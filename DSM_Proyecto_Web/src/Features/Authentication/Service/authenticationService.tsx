import type { UserRepository } from "../Domain/UserRepository"




const authenticationService = (repository: UserRepository) => {

    return {
        logIn: (email: string, password: string) => repository.logIn (email, password)
    }

}

export default authenticationService