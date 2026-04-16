import type { UserEntity } from "../entities/userEntity";

export interface AuthRepository {
    login(email: string, password: string): Promise<UserEntity>;
    register(email: string, password: string, displayName: string): Promise<UserEntity>;
    logout(): Promise<void>;
}