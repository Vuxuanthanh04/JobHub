import { signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import type { AuthRepository } from "../../domain/respositories/authRepository";
import type { UserEntity } from "../../domain/entities/userEntity";
import { auth } from "../../../../core/config/conectFireBase";

export class FirebaseAuthRepositoryImpl implements AuthRepository {
    async login(email: string, password: string): Promise<UserEntity> {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        let token = await userCredential.user.getIdToken();
        localStorage.setItem("uId",userCredential.user.uid);
        localStorage.setItem("token",token);
        return {
            uid: userCredential.user.uid,
            email: userCredential.user.email,
            displayName: userCredential.user.displayName || undefined,
            token: token,
        };
    }

    async register(email: string, password: string, displayName: string): Promise<UserEntity> {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        await updateProfile(userCredential.user, { displayName });
        return {
            uid: userCredential.user.uid,
            email: userCredential.user.email,
            displayName: userCredential.user.displayName || undefined,
            token: await userCredential.user.getIdToken(),
        };
    }

    async logout(): Promise<void> {
        await auth.signOut();
    }
}
