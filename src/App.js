import React from "react";
import "./App.css";
import PageContainer from "./pages/PageContainer";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useEffect} from 'react';
import { userRegister, userLogin } from "./firebaseConfig/firebaseAPI";
import {useSelector, useDispatch} from 'react-redux';
import {registerUser, loginUser} from './store/authActions';

function App() {

  const dispatch = useDispatch();

 // useEffect(() => {
        dispatch(loginUser(({ "firstName": 'John', "lastName": 'smith', "profilePicture": "test.img", "email": '14591789@gmai.com', "password": '$ER567J' })));
  //},[]);

//  const user = useSelector((state) => state.auth);
//  console.log("user in App is " + JSON.stringify(user));
 // userRegister({email:'4567Test2@yahoo.com', password:'thg56%sdghb'});
  return (
    <div className="App">
      <PageContainer />
    </div>
  );
}

export default App;
