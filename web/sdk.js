// One place that loads the Firebase SDK (pinned version).
export { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js';
export {
  getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut,
} from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js';
export {
  getFirestore, collection, doc, getDoc, getDocs, setDoc, updateDoc, deleteDoc,
  query, orderBy, limit, where, Timestamp, serverTimestamp, writeBatch,
  runTransaction, getCountFromServer, getAggregateFromServer, sum,
} from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js';
