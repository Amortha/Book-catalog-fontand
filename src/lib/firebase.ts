/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyACA7ePmjI9MpqE_kkGkGkd1W4comQ4G0c",
  authDomain: "book-catalog-fontand.firebaseapp.com",
  projectId: "book-catalog-fontand",
  storageBucket: "book-catalog-fontand.appspot.com",
  messagingSenderId: "426834454747",
  appId: "1:426834454747:web:e9f5c41013a125aac6c4fe"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
