import firebase from "firebase/app"
import "firebase/auth"
import { firebaseConfig } from "./Firebase.config";



export const initializeAuthFramework = () => {
    if(!firebase.apps.length){
        firebase.initializeApp(firebaseConfig)
    }
} 

const GoogleProvider =  new firebase.auth.GoogleAuthProvider();


export const signInWithGoogle = () => {
   return signInWtihProvider(GoogleProvider)
} 





const signInWtihProvider = (provider) => {
     return firebase
         .auth()
         .signInWithPopup(provider)
         .then((result) => {
             const user = result.user;
             const newUser = {
                 isLoggedIn: true,
                 displayName: user.displayName,
                 email: user.email,
                 photoURL: user.photoURL,
                 succes: true,
                 error: "",
             };

             return newUser;
         })
         .catch((error) => {
             const errorMessage = error.message;

             const errorUser = {
                 isLoggedIn: false,
                 displayName: "",
                 email: "",
                 photoURL: "",
                 succes: false,
                 error: errorMessage,
             };

             return errorUser;
         });
}





export const logOutUser = () => {
   return firebase
        .auth()
        .signOut()
        .then(() => {
            const newUser = {
                isLoggedIn: false,
                displayName: "",
                email:"",
                photoURL: "",
                succes: false,
                error: "",
            };

            return newUser
        })
        .catch((error) => {
             const errorMessage = error.message;
             const newUser = {
                 error: errorMessage,
             };
        });
}