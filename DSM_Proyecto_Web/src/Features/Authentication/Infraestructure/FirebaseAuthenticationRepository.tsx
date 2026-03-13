import axios from "axios";
import type { UserRepository } from "../Domain/UserRepository";
import type { User } from "../Domain/User";


const FirebaseAuthenticationRepository: UserRepository = {

    logIn: async (email: string, password: string) => {

        const authData = {

            email: email,
            password: password,
            returnSecureToken: true

        }

        try {

            const response = await axios.post("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAgLsZsIw1vmISe-YZGjeyJmVIkBQRH7cw", authData)

            const userLoged: User = {
                id: response.data.localId,
                idToken: response.data.idToken,
                email: authData.email,
                password: authData.password
            }

            console.log("Bienvenido:", userLoged.email)

            return userLoged

        } catch (error) {

            console.log("Error de Autentificación:", error)
            throw error

        }
    },


    signUp: async (email: string, password: string) => {

        const authData = {

            email: email,
            password: password,
            returnSecureToken: true

        }

        try {

            const response = await axios.post("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAgLsZsIw1vmISe-YZGjeyJmVIkBQRH7cw", authData)

            const userLoged: User = {
                id: response.data.localId,
                idToken: response.data.idToken,
                email: authData.email,
                password: authData.password
            }

            console.log("Usuario Creado:", userLoged.email)

            return userLoged

        } catch (error) {

            console.log("Error de Autentificación:", error)
            throw error

        }

    }



}


export default FirebaseAuthenticationRepository