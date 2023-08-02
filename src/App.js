import React from "react";
import "./App.css";
import PageContainer from "./pages/PageContainer";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch } from "react-redux";

import { registerUser, loginUser} from "../src/store/authActions";

function App() {

  const dispatch = useDispatch();
  dispatch(loginUser({email:'jdoe@email.com', password:'pass10', firstName:'Jane', lastName:'Doe', shippingAddress:{},billingAddress:{}, phoneNumber:'321567890' }));
  return (
    <div className="App">
      <PageContainer />
    </div>
  );
}

export default App;
