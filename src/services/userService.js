import api from './apiSetup';

class  userService  {
     registerUser(data){
        return api.post ('/store/register', data);
     }
     loginUser(user){
        return api.post('/store/login', user);
     }

     getAllUser(){
      return api.get('/store/users');
   }
}

export default new userService();