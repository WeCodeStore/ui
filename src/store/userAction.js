import { createAsyncThunk } from '@reduxjs/toolkit';
import UserService from'../services/userService';

/*export const createUser = createAsyncThunk(
    'user/create',
    async (user, {rejectWithValue}) => {
        try {
                const res = await userService.createUser(user);
              //  console.log('repponseUser is ' + JSON.stringify(responseUser));
                return res;
        }
        catch (error ) {
           console.log('error is ' + JSON.stringify(error));
           return rejectWithValue(error.message);
        }
    }
) 

export const retrieveUser = createAsyncThunk(
    'user/retrieveById',
    async (id, {rejectWithValue}) => {
        try {
                const res = await userService.getUser(id);
              //  console.log('repponseUser is ' + JSON.stringify(responseUser));
                return res;
        }
        catch (error ) {
           console.log('error is ' + JSON.stringify(error));
           return rejectWithValue(error.message);
        }
    }
)  */

export const allUser = createAsyncThunk(
  'user/retrieveAll',
  async ( {rejectWithValue}) => {
      try {
              const res = await UserService.getUser();
            //  console.log('repponseUser is ' + JSON.stringify(responseUser));
              return res;
      }
      catch (error ) {
         console.log('error is ' + JSON.stringify(error));
         return rejectWithValue(error.message);
      }
  }
)
