import { collection, addDoc, onSnapshot } from "firebase/firestore";
import { db } from "./firebase";

export const sendMessage = async (chatId, message) => {
  await addDoc(collection(db, "chats", chatId, "messages"), {
    text: message,
    createdAt: new Date()
  });
};

export const listenMessages = (chatId, callback) => {
  return onSnapshot(
    collection(db, "chats", chatId, "messages"),
    (snapshot) => {
      callback(snapshot.docs.map(doc => doc.data()));
    }
  );
};
