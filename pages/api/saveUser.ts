import { db } from "lib/firebaseAdmin";
import admin from 'firebase-admin';
import crypto from "crypto";
import { NextApiRequest, NextApiResponse } from "next";

const secretKey = process.env.ENCRYPTION_KEY as string;

interface EncryptedData {
  iv: string;
  encryptedData: string;
  authTag: string;
}


function encrypt(text: string, key: Buffer): EncryptedData {
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv("aes-256-gcm", key, iv);
  let encrypted = cipher.update(text, "utf8", "hex");
  encrypted += cipher.final("hex");
  const authTag = cipher.getAuthTag().toString("hex");

  return {
    iv: iv.toString("hex"),
    encryptedData: encrypted,
    authTag,
  };
}

function decrypt(
  encryptedData: string,
  iv: string,
  authTag: string,
  keyBuffer: Buffer
): string {
  const decipher = crypto.createDecipheriv(
    "aes-256-gcm",
    keyBuffer,
    Buffer.from(iv, "hex")
  );
  decipher.setAuthTag(Buffer.from(authTag, "hex"));
  let decrypted = decipher.update(encryptedData, "hex", "utf8");
  decrypted += decipher.final("utf8");
  return decrypted;
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    try {
      const { email, userName, surname, message, terms } = req.body;

      const keyBuffer = Buffer.from(secretKey, "hex");

      const encryptedEmail = encrypt(email, keyBuffer);
      const encryptedName = encrypt(userName, keyBuffer);
      const encryptedSurname = encrypt(surname, keyBuffer);
      const encryptedMessage = encrypt(message, keyBuffer);

      const userCollection = db.collection("clients");
      const usersSnapshot = await userCollection.get();
      const usersList = await usersSnapshot.docs.map((doc: any) => doc.data());

      let user: any;
      if (usersList.length > 0) {
        try {
          user = usersList.find((user: any) => {
            const decryptedEmail = decrypt(
              user.email.data,
              user.email.iv,
              user.email.authTag,
              keyBuffer
            );
            return decryptedEmail === email;
          });
        } catch (error) {
          console.log(error);
        }
      } else {
        console.log("No users");
        user = false;
      }
      if (user) {
        console.log("User already exists");
        res.status(400).send("User already exists");
        return;
      } else {
        console.log("Creating new user");
        const newUserDoc = await userCollection.add({
          email: {
            data: encryptedEmail.encryptedData,
            iv: encryptedEmail.iv,
            authTag: encryptedEmail.authTag,
          },
          name: {
            data: encryptedName.encryptedData,
            iv: encryptedName.iv,
            authTag: encryptedName.authTag,
          },
          surname: {
            data: encryptedSurname.encryptedData,
            iv: encryptedSurname.iv,
            authTag: encryptedSurname.authTag,
          },
          message: {
            data: encryptedMessage.encryptedData,
            iv: encryptedMessage.iv,
            authTag: encryptedMessage.authTag,
          },
          terms: terms,
          dateAdded: admin.firestore.FieldValue.serverTimestamp()
        });
        res.status(200).json({ id: newUserDoc.id });
      }
    } catch (error) {
      res.status(500).send(error);
    }
  } else {
    res.status(405).send("Method not allowed");
  }
};
