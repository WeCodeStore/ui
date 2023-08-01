import { useState} from 'react';
import { useDispatch } from "react-redux";
import { loginUser, registerUser } from '../../store/authActions';


const useForm = () => {

  // const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
 
  const regUser = {
    email: email,
    password: password,
  }
  
  const handleSubmit = (event) => {
    
     event.preventDefault();
     dispatch(loginUser(regUser));
  };

  const handleSignUp = () => {
    dispatch(registerUser(regUser));

 };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
      };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
     };


  return {
    handleChangeEmail,
    handleChangePassword,
    handleSubmit,
    handleSignUp,
    email,
    password,
    errors,
  }
}
export default useForm;