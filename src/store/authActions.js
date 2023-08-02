import { createAsyncThunk } from '@reduxjs/toolkit';
import {  createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import UserService from '../services/userService';
import {auth} from '../firebaseConfig/config';

export const registerUser = createAsyncThunk(
    'auth/register',
    async (regUser, {rejectWithValue}) => {
        try {
                console.log(' regUser ' + JSON.stringify(regUser))
                const data = await createUserWithEmailAndPassword(auth, regUser.email, regUser.password);

                console.log(' data ' + JSON.stringify(data))
                //Removing password field from the user object.
                const {password, ...userTemp} = regUser;

                const res = await UserService.registerUser(userTemp);
                if (res.status !== 201){
                    const curUser=auth.currentUser;
                    curUser.delete().then(()=>{}).catch((error)=>{console.error("Eror deleting user")});
                    return rejectWithValue("Error server issue");
                }

                console.log('res is ' + JSON.stringify(res))
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
        let data = null; 

        try{                 
                data = await signInWithEmailAndPassword(auth, user.email, user.password);
        }
        catch (error ) {
              return rejectWithValue(loginErrorMapping(error));
        }                             
        if (data !=  null){
                    let userRes = null;
                    try {
                            userRes = await UserService.loginUser(user.email);
                    }catch(error){
                        return rejectWithValue("Error server issue");
                    }
                    if (userRes?.status === 200){
                        const responseUser ={  
                            user:userRes.data,
                            idToken: data._tokenResponse.idToken,
                            refreshToken: data._tokenResponse.refreshToken,
                            expireson: data._tokenResponse.expiresIn
                          }
                          console.log('loginUser ' + JSON.stringify(responseUser));
                          return responseUser;
                    } else {
                        return rejectWithValue("User not found");
                    } 
        } else{
            return rejectWithValue("User not found");
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
