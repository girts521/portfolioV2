import admin from "firebase-admin";
import crypto from "crypto";

const keyBuffer = Buffer.from(process.env.ENCRYPTION_KEY as string, "hex");
function decrypt(encryptedData: any, iv: any, authTag: any, keyBuffer: any) {
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

export default async (req: any, res: any) => {
  if (req.method === "POST") {
    // Verify the user token using Firebase Admin
    const token = req.headers.authorization?.replace("Bearer ", "");
    const encryptedUsers = req.body.users;
    const type = req.body.type;

    try {
      const decodedToken = await admin.auth().verifyIdToken(token);
      if (decodedToken.uid === process.env.ADMIN_UID) {
        // Fetch encrypted users


        if (type === "users") {
          try {
            const decryptedUsers = encryptedUsers.map((user: any) => {
              console.log("user: ", user);

              return {
                email: decrypt(
                  user.email.data,
                  user.email.iv,
                  user.email.authTag,
                  keyBuffer
                ),
                name: user.name
                  ? decrypt(
                      user.name.data,
                      user.name.iv,
                      user.name.authTag,
                      keyBuffer
                    )
                  : null,
                surname: user.surname
                  ? decrypt(
                      user.surname.data,
                      user.surname.iv,
                      user.surname.authTag,
                      keyBuffer
                    )
                  : null,
                message: user.message
                  ? decrypt(
                      user.message.data,
                      user.message.iv,
                      user.message.authTag,
                      keyBuffer
                    )
                  : null,
              };
            });
            res.status(200).json(decryptedUsers);
          } catch (error) {
            console.log(error);
            res.status(400).json({ error: "Bad request" });
          }
        }
      } else {
        res.status(403).json({ error: "Unauthorized" });
      }
    } catch (error) {
      res.status(401).json({ error: "Authentication failed" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
};
