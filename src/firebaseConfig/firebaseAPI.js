import {  createUserWithEmailAndPassword, signInWithEmailAndPassword  } from 'firebase/auth';
import {auth} from "./config";

const userRegister= async (user) =>{
    
    await createUserWithEmailAndPassword(auth, user.email, user.password)
    .then((userCredential) => {
        const user = userCredential.user;
        console.log("userCredential " + JSON.stringify(userCredential));
       
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
    });
}

const userLogin=  (user) =>{
    signInWithEmailAndPassword(auth, user.email, user.password)
    .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
       
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
    });
}

export {userRegister, userLogin};