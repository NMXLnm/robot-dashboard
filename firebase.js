// firebase.js
// === 替换下面的配置为你在 Firebase 控制台拿到的 ===
const firebaseConfig = {
  apiKey: "AIzaSyD7KN-D2L52ckATbk1aEDZgwhXYDADU7sE",
  authDomain: "fir-9fe3e.firebaseapp.com",
  projectId: "fir-9fe3e",
  storageBucket: "fir-9fe3e.appspot.com",
  messagingSenderId: "110235897961",
  appId: "1:110235897961:web:aa862e3d76ec5879c252f8"
};

firebase.initializeApp(firebaseConfig);

// 导出引用
const auth = firebase.auth();
const db = firebase.firestore();

