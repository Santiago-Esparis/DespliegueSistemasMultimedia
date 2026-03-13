import type { UserRepository } from "../Domain/UserRepository"




const authenticationService = (repository: UserRepository) => {

    return {
        logIn: (email: string, password: string) => repository.logIn (email, password),
        signUp: (email: string, password: string) => repository.signUp (email, password)
    }

}

export default authenticationService