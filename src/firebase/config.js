import { initializeApp } from 'firebase/app';
import { FieldValue, getFirestore, serverTimestamp, Timestamp } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyAMIxkg1xuwqmeCwP0sq3Vo8_qzTdf9IAo',
	authDomain: 'project-manager-firebase-4a2bf.firebaseapp.com',
	projectId: 'project-manager-firebase-4a2bf',
	storageBucket: 'project-manager-firebase-4a2bf.appspot.com',
	messagingSenderId: '885535590100',
	appId: '1:885535590100:web:206c249f07441e79749d41',
	measurementId: 'G-X50ZS61BZG',
};
// init firebase
const firebaseApp = initializeApp(firebaseConfig);

// init firestore service
const projectFireStore = getFirestore();
const timestamp = Timestamp.now();
const auth = getAuth();
export { projectFireStore, timestamp, auth };
