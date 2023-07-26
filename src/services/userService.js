import api from './apiSetup';

class  userService  {
     createUser(data){
        return api.post ("/store/user", data);
     }
     getUser(email){
        return api.get(`/store/user/${email}`);
     }

     getAllUser(){
      return api.get('/store/user');
   }
}

export default new userService();