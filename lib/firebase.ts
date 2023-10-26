import { initializeApp, getApps } from 'firebase/app'
import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore'
import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth'

import 'firebase/firestore'

// Your Firebase config object
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
}

let db: any
let auth: any
let app

if (!getApps().length) {
 app = initializeApp(firebaseConfig)
 auth = getAuth(app)
 db = getFirestore(app)
}

if (auth) {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in.
      console.log("User is signed in:", user);
    } else {
      // User is signed out.
      console.log("User is signed out");
    }
  });
}

// Get a list of registered users from your database
export async function getUsers() {
  const userCollection = await collection(db, 'clients')
  const usersSnapshot = await getDocs(userCollection)
  const usersList = await usersSnapshot.docs.map((doc) => doc.data())
  usersList.sort((a, b) => b.dateAdded - a.dateAdded)
  return usersList
}


export async function signIn(email: string, password: string) {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password,
    )
    const user = userCredential.user
    return {user: user, error: null}
  } catch (error) {
    console.log(error)
    return {user: null, error: error}
  }
}

export async function signOutUser () {

  try {
    await signOut(auth);
    // Sign-out successful
    await fetch('/api/signOutAdmin', {
      method: 'POST'
    });
    window.location.href = '/';
    return true


  } catch (error) {
    // An error happened.
    console.error(error);
  }
};

export async function getToken() {
  const token = await auth.currentUser.getIdToken()
  return token
}