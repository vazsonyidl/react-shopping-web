import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';
import {firebaseApp} from './init';

const auth = getAuth(firebaseApp);

export const loginWithEmail = (email, password) => signInWithEmailAndPassword(auth, email, password);
