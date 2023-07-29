import { createAsyncThunk } from '@reduxjs/toolkit';
import {  createUserWithEmailAndPassword, signInWithEmailAndPassword , database } from 'firebase/auth';
import userService from'../services/userService';
import {auth} from '../firebaseConfig/config';

export const registerUser = createAsyncThunk(
    'auth/register',
    async (regUser, {rejectWithValue}) => {
        try {
                const data = await createUserWithEmailAndPassword(auth, regUser.email, regUser.password);
                //Removing password field from the user object.
                const {password, ...userTemp} = regUser;

                const res = await userService.registerUser(userTemp);
                if (res.status != 201){
                    const curUser=auth.currentUser;
                    curUser.delete().then(()=>{}).catch((error)=>{console.error("Eror deleting user")});
                    return rejectWithValue("Error server issue");
                }
                const responseUser ={
                    user: res.config.data,
                    idToken: data._tokenResponse.idToken,
                    refreshToken: data._tokenResponse.refreshToken,
                    expireson: data._tokenResponse.expiresIn
                }

                return responseUser;
        }
        catch (error ) {
           return rejectWithValue(registerErrorMapping(error.customData._tokenResponse.error));
        }
    }
)

export const loginUser = createAsyncThunk(
    'auth/login',
    async (user, {rejectWithValue}) => {
        let userRes =null;
        try {
                userRes = await userService.loginUser(user.email);
        }catch(error){
            return rejectWithValue("Error server issue");
        }
        try{     
                if (userRes?.status == 200){
                   const data = await signInWithEmailAndPassword(auth, user.email, user.password);
                   const responseUser ={  
                      user:userRes.data,
                      idToken: data._tokenResponse.idToken,
                      refreshToken: data._tokenResponse.refreshToken,
                      expireson: data._tokenResponse.expiresIn
                    }
                
                    return responseUser;
                } else {
                    return rejectWithValue("User not found");
                }
        }
        catch (error ) {
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
        returnError.message = 'Invalid login credentials';
    } else if (error.code === 'auth/user-not-found'){
        returnError.message = 'Invalid login credentials';
    } else if (error.code === 'auth/user-disabled'){
        returnError.message = 'Account disabled';
    } 

    return returnError;

}
