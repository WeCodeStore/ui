import React from "react";
import "./App.css";
import PageContainer from "./pages/PageContainer";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch} from 'react-redux';
import {registerUser, loginUser} from './store/authActions';

function App() {

  const dispatch = useDispatch();

  dispatch(loginUser(({ "firstName": 'John', "lastName": 'smith', "profilePicture": "test.img", "email": '14591789@gmai.com', "password": '$ER567J' })));

  return (
    <div className="App">
      <PageContainer />
    </div>
  );
}

export default App;
