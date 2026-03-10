import type { User } from "./User";



export interface UserRepository {

    logIn: (email: string, password: string) => Promise<User>

}



