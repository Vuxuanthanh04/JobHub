import { auth } from "../../../core/config/conectFireBase";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

export class FireBaseAuthDatasource {
    async login(email: string, password: string) {
        const userCredential = signInWithEmailAndPassword(auth, email, password);
        const token = (await userCredential).user.getIdToken();
        return token
    }

    async register(email: string, password: string, displayName: string) {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        await updateProfile(userCredential.user, { displayName });
        return userCredential;
    }
}