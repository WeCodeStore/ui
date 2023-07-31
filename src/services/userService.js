import {axiosUser} from './apiSetup';

class UserService  {
     registerUser(data){
        return axiosUser.post ('/store/register', data);
     }
     loginUser(user){
        return axiosUser.post('/store/login', user);
     }

     getAllUser(){
      return axiosUser.get('/store/users');
   }
}

export default new UserService();