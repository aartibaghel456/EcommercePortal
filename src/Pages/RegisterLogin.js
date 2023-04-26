import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const RegisterLogin =() =>{

    const [getUserDetails, setUserDetails] = useState({});
  const[formErrors, setFormErrors] = useState({});
  const[isSubmiited, setFormSubmitted] = useState(false);
  const navigate  = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onChange = (event) => {
    setUserDetails({...getUserDetails,[event.target.name]: event.target.value})
  }

  const onSubmit = (event) => {
    setFormSubmitted(true);
    //Prevent page reload 
    if(getUserDetails.username && getUserDetails.password){
        axios.post(' http://localhost:5000/login', getUserDetails)
        .then(response => {
          setFormSubmitted(false);
          if(response.data.data){
          localStorage.setItem("userInfo", JSON.stringify(response.data.data));
          localStorage.setItem("token", response.data.token);
          navigate("/");
          }
          else{
            setFormErrors({isError:true})
            setTimeout(()=>{
              setFormErrors({isError:false});
            },2000)
          }
        });
      }

  };

    return(
        <>
        <div class="breadcrumb-area">
                <div class="container">
                    <div class="breadcrumb-content">
                        <ul>
                            <li><a href="index.html">Home</a></li>
                            <li class="active">Login Register</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="page-section mb-60">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12 col-md-12 col-xs-12 col-lg-6 mb-30">
                            <form action="#" onSubmit={handleSubmit(onSubmit)} >
                                <div class="login-form">
                                    <h4 class="login-title">Login</h4>
                                    <p className={formErrors.isError?'text-center small error':'hide'}>Username or password doesn't exist</p>

                                    <div class="row">
                                        <div class="col-md-12 col-12 mb-20">
                                            <label>Username*</label>
                                            <input class="mb-0" type="text" placeholder="Username" name="username" onChange={onChange}  id="yourUsername"/>
                                            <div  className = {!getUserDetails.username && isSubmiited?'error':'hide'}>Please enter your username.</div>
                                        </div>
                                        <div class="col-12 mb-20">
                                            <label>Password</label>
                                            <input class="mb-0" type="password" placeholder="Password" name="password" onChange={onChange} id="yourPassword"/>
                                            <div className = {!getUserDetails.password && isSubmiited?'error':'hide'}>Please enter your password!</div>
                                        </div>
                                        <div class="col-md-8">
                                            <div class="check-box d-inline-block ml-0 ml-md-2 mt-10">
                                                <input type="checkbox" id="remember_me"/>
                                                <label for="remember_me">Remember me</label>
                                            </div>
                                        </div>
                                        <div class="col-md-4 mt-10 mb-20 text-left text-md-right">
                                            <a href="#"> Forgotten pasward?</a>
                                        </div>
                                        <div class="col-md-12">
                                            <button class="register-button mt-0" type="submit" 
                          disabled={!getUserDetails.username || !getUserDetails.password}>Login</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div class="col-sm-12 col-md-12 col-lg-6 col-xs-12">
                            <form action="#">
                                <div class="login-form">
                                    <h4 class="login-title">Register</h4>
                                    <div class="row">
                                        <div class="col-md-6 col-12 mb-20">
                                            <label>First Name</label>
                                            <input class="mb-0" type="text" placeholder="First Name"/>
                                        </div>
                                        <div class="col-md-6 col-12 mb-20">
                                            <label>Last Name</label>
                                            <input class="mb-0" type="text" placeholder="Last Name"/>
                                        </div>
                                        <div class="col-md-12 mb-20">
                                            <label>Email Address*</label>
                                            <input class="mb-0" type="email" placeholder="Email Address"/>
                                        </div>
                                        <div class="col-md-6 mb-20">
                                            <label>Password</label>
                                            <input class="mb-0" type="password" placeholder="Password"/>
                                        </div>
                                        <div class="col-md-6 mb-20">
                                            <label>Confirm Password</label>
                                            <input class="mb-0" type="password" placeholder="Confirm Password"/>
                                        </div>
                                        <div class="col-12">
                                            <button class="register-button mt-0">Register</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RegisterLogin;