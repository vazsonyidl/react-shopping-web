import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';
import {firebaseApp} from './init';

firebaseApp();
const auth = getAuth();

export const loginWithEmail = (email, password) => signInWithEmailAndPassword(auth, email, password);
