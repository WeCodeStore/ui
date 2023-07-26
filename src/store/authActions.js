import { createAsyncThunk } from '@reduxjs/toolkit';
import {  createUserWithEmailAndPassword, signInWithEmailAndPassword  } from 'firebase/auth';
import userService from'../services/userService';
import {auth} from '../firebaseConfig/config';

export const registerUser = createAsyncThunk(
    'auth/register',
    async (regUser, {rejectWithValue}) => {
        try {
                const data = await createUserWithEmailAndPassword(auth, regUser.email, regUser.password);
                const userTemp ={firstName: regUser.firstName, lastName:regUser.lastName, profilePicture:regUser.profilePicture, email:regUser.emai};
             //   const res = await userService.createUser(userTemp);
                
                //{firstName: loginUser.firstName, lastName:loginUser.lastName, profilePicture:loginUser.profilePicture, email:loginUser.email}
                const responseUser ={
                   // user: res,
                    user: userTemp,
                    idToken: data._tokenResponse.idToken,
                    refreshToken: data._tokenResponse.refreshToken,
                    expireson: data._tokenResponse.expiresIn
                }

              //  console.log('repponseUser is ' + JSON.stringify(responseUser));
                return responseUser;
        }
        catch (error ) {
          // console.log('error is ' + JSON.stringify(registerErrorMapping(error.customData._tokenResponse.error)));
           return rejectWithValue(registerErrorMapping(error.customData._tokenResponse.error));
        }
    }
)

export const loginUser = createAsyncThunk(
    'auth/login',
    async (user, {rejectWithValue}) => {
        try {
                const data = await signInWithEmailAndPassword(auth, user.email, user.password);
               
                //const res = await userService.getUser(user.email);
                const responseUser ={
                    user: {firstName: user.firstName, lastName:user.lastName, profilePicture:user.profilePicture, email:user.email},
                  //  user:res,
                    idToken: data._tokenResponse.idToken,
                    refreshToken: data._tokenResponse.refreshToken,
                    expireson: data._tokenResponse.expiresIn
                }
                
              // console.log('repponseUser is ' + JSON.stringify(responseUser));
                return responseUser;
        }
        catch (error ) {
            //console.log('error is ' + JSON.stringify(loginErrorMapping(error)));
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
