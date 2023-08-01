import React, { useState }  from "react";
import useForm from "./UseForm";
import "./Forms.css";


const SignUpPage = () => {

    const [isShowPassword, setIsShowPassword] = useState(false);
    const {
        email, 
        password,
        errors,
        handleSignUp,
        handleChangeEmail,
        handleChangePassword,
      } = useForm()
    
    return (
        <div>
            <form onSubmit={handleSignUp} className="form" >
            <div  className='input-form'>
            <div className="input-field">
              <input
                type="email"
                id="email"
                placeholder="Email"
                name="email"
                value={email || ''}
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
                  </div>
                </div>
                <div className="buttons">
                <button className="button-blue" type="sign up">Sign up</button>
              </div>
                </form>
        </div>
    );
}


export default SignUpPage;