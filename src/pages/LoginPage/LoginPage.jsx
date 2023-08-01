import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Forms.css";
import { Eye, EyeSlash } from "react-bootstrap-icons";
// import validate from "../../global/LoginFormValidationRules"
import useForm from "./UseForm";
import { useSelector } from "react-redux";

const LoginPage = () => {
  const {
    email, 
    password,
    handleChangeEmail,
    handleChangePassword,
    handleSubmit,
  } = useForm()
  const navigate = useNavigate();
  
  const [errors, setErrors] = useState({});
  
  const signUp = () => {
    navigate("/store/register");
  };
  
  const [isShowPassword, setIsShowPassword] = useState(false);
  
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
                value={email}
                onChange={handleChangeEmail}
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
                    value={password || ''}
                    name= "password"
                    onChange={handleChangePassword}
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
              </p>
            </div>  
              <div className="buttons">
                <button className="button-white" type="sign up" onClick={signUp}>Sign up</button>
  
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
