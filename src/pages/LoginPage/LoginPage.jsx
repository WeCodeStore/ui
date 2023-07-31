import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Forms.css";
import { Eye, EyeSlash } from "react-bootstrap-icons";
// import validate from "../../global/LoginFormValidationRules"
import useForm from "./UseForm";

const LoginPage = () => {
  
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [isShowPassword, setIsShowPassword] = useState(false);

  // const [emailError, setEmailError] = useState("");
  // const [passwordError, setPasswordError] =useState("");


  // const checkAuthentication = (event) => {
  //   console.log(email)
  //   event.preventDefault();

    

  //   setEmailError(validateEmail(email));

  //   console.log(validateEmail(email))
  //   setPasswordError(validatePassword(password));

  //   //login(email, password);

   
  //   // setEmail("");
  //   // setPassword("");
  // };

  // const emailChangeHandler = (event) => {
  //   setEmail(event.target.value);
  // };

  // const passwordChangeHandler = (event) => {
  //   setPassword(event.target.value);
  // };

  

  // const validateEmail = (email) => {
  //   let err = ""
  //   const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  //   console.log(!email)
  //   if (!email) {
  //     err = "Email Required";
  //   }
  //   else if (!regex.test(email)) {
  //     err = "Invalid email format";
  //   }

  //   return err;
  // }
  
  //   const validatePassword = (password) => {
  //     let err2 = ""
  //     if (!password) {
  //       err2 = "Password Required";
  //     }

  //     return err2;
  //   }

  const {
    values,
    errors,
    handleChange,
    handleSubmit,
  } = useForm(login)

  function login() {
    console.log("No errors, called!")
    //call login api
  }
  

  return (
    <div className="card-container">
       <div className="card-form">
          <section className='account-header'>
           <div className='account-title'>
             <h2 className='title-account'>Account Login</h2>      
           </div>
        </section> 
        <section >
          <form onSubmit={handleSubmit} className="form" >
            <div  className='input-form'>
            <div className="input-field">
              <input
                type="email"
                id="email"
                placeholder="Email"
                name="email"
                value={values.email || ''}
                onChange={handleChange}
                className="input"
                required
              ></input>

            {errors.email && 
              <p className="error">{errors.email}</p>
            }
             </div>
              <div className="pass-cont">
                 <input
                    type={isShowPassword ? "text" : "password"}
                    id="password"
                    placeholder="Password"
                    value={values.password || ''}
                    name= "password"
                    onChange={handleChange}
                    className="input"
                    required
                  ></input>
              <div className="icon-container" onClick={() => setIsShowPassword(!isShowPassword)}>
                {isShowPassword ? <Eye /> : <EyeSlash />}
              </div>
            </div>

            {errors.password && (
              <p className="error">{errors.password}</p>
            )}

            <div className="buttons">
              <button className="button-blue" type="submit">Submit</button>
 
            </div>
            </div>
            <div>
            <div>
            <div>
            <p className="form-sign-up-m1">
            New here? Or shopped with us, but didn’t sign up
              </p> 
            </div>  
            <div>
            <p className="form-sign-up-m2">
            Welcome! Sign up to activate your account{" "}
                <Link className="login-link" to="/registerPage">
                  here.
                </Link>
              </p>
            </div>  
              <div className="buttons">
                <button className="button-white" type="sign up">Sign up</button>
  
              </div>
            </div>
            
            </div>
            
              
            
          </form>
          </section>
          
        </div>
     
    </div>
  );
};

export default LoginPage;
// 

// import React from 'react';
// import './LoginPage.css' 

// export default function LoginPage()  {
   
//     return (
//         <div className='login-page'>
//             <div className='login-container'>
//                 <section className='account-header'>
//                      <div className='account-title'>
//                         <h2 className='title-account'>Account Login</h2>
//                     </div>
//                 </section>
//                <section className='login-form'>
//                     <div className='login'>
//                         <form action="">
//                             <div className='input-header'>
//                                 <p className='input-title'>Email</p>
//                                 <p></p>
//                             </div>
//                             <div className='email-input-wrapper'>
//                                 <input type="email"  className='email-input' placeholder='Email'/>
//                             </div>
//                             <div className='email-input-message'>
//                                 <span>Please enter a valid email.</span>
//                             </div>
//                             <div className='input-header'>
//                                 <p className='input-title'>Password</p>
//                                 <p></p>
//                             </div>
//                             <div className='password-input-wrapper'>
//                                 <input type="password"  className='password-input' placeholder='Password'/>
//                             </div>
//                             <div className='password-input-message'>
//                                 <span>Forgot your password?.</span>
//                             </div>
//                             <div className='submit-input-wrapper'>
//                                 <input type="submit"  className='submit-input btn' id="loginSubmit"/>
//                             </div>
                            
                            
//                         </form>
//                     </div>
//                     <div className='sign-up'>
//                         <p className='sign-up-header'> New here? Or shopped with us, but didn’t sign up?</p>
//                         <p className='sign-up-subhedear'>Welcome! Sign up to activate your account.</p>
//                         <div className='btn-sign-up'></div>
//                     </div>
//                </section>
//             </div>
//         </div>
//    );
    // };