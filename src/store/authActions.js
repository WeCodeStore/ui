import { createAsyncThunk } from '@reduxjs/toolkit';
import {  createUserWithEmailAndPassword, signInWithEmailAndPassword  } from 'firebase/auth';
import {auth} from '../firebaseConfig/config';

export const registerUser = createAsyncThunk(
    'auth/register',
    async (registerUser, {rejectWithValue}) => {
        try {
                const data = await createUserWithEmailAndPassword(auth, registerUser.email, registerUser.password);
               
                const responseUser ={
                    user: {firstName: registerUser.firstName, lastName:registerUser.lastName, profilePicture:registerUser.profilePicture, email:registerUser.email},
                    idToken: data._tokenResponse.idToken,
                    refreshToken: data._tokenResponse.refreshToken,
                    expireson: data._tokenResponse.expiresIn
                }

              //  console.log('repponseUser is ' + JSON.stringify(responseUser));
                return responseUser;
        }
        catch (error ) {
           console.log('error is ' + JSON.stringify(registerErrorMapping(error.customData._tokenResponse.error)));
           let errorMessage = '6';

         
           return rejectWithValue(registerErrorMapping(error.customData._tokenResponse.error));
        }
    }
)

export const loginUser = createAsyncThunk(
    'auth/login',
    async (loginUser, {rejectWithValue}) => {
        try {
                const data = await signInWithEmailAndPassword(auth, loginUser.email, loginUser.password);

                const responseUser ={
                    user: {firstName: loginUser.firstName, lastName:loginUser.lastName, profilePicture:loginUser.profilePicture, email:loginUser.email},
                    idToken: data._tokenResponse.idToken,
                    refreshToken: data._tokenResponse.refreshToken,
                    expireson: data._tokenResponse.expiresIn
                }

                
               // console.log('repponseUser is ' + JSON.stringify(responseUser));
                return responseUser;
        }
        catch (error ) {
         //  console.log('error is ' + JSON.stringify(loginErrorMapping(error)));
           return rejectWithValue(loginErrorMapping(error));
        }
    }
)


const registerErrorMapping = (error) =>{
    let returnError = {code:error.code, message:''};
    
    if (error.message === 'INVALID_EMAIL'){
        returnError.message = 'Invalid email';
    } else if (error.message === 'EMAIL_EXISTS'){
        returnError.message = 'Email already exists';
    } else if (error.message === 'TOO_MANY_ATTEMPTS_TRY_LATER'){
        returnError.message = 'Requests from this device have been temporarily blocked';
    } else if (error.message === 'EMAIL_NOT_FOUND'){
        returnError.message = 'Incorrect Credentials';
    } else if (error.message === 'INVALID_PASSWORD'){
        returnError.message = 'Incorrect Credentials';
    } else if (error.message === 'USER_DISABLED'){
        returnError.message = 'User Disabled';
    }

    return returnError;

}

const loginErrorMapping = (error) =>{
    let returnError = {code:400, message:''};
    
    if (error.code === 'auth/wrong-password'){
        returnError.message = 'Invalid password';
    } else if (error.code === 'auth/user-not-found'){
        returnError.message = 'Invalid email';
    } else if (error.code === 'auth/user-disabled'){
        returnError.message = 'Account disabled';
    } 

    return returnError;

}
