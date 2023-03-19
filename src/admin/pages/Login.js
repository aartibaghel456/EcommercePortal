import axios from 'axios'
import React, {   useState } from 'react';
import { useNavigate   } from 'react-router-dom';
import { useForm } from "react-hook-form";
import '../css/Login.css';


function Login(){

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
          navigate("/admin/dashboard");
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
        <main>
        <div class="container">
    
          <section class="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
            <div class="container">
              <div class="row justify-content-center">
                <div class="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
    
                  <div class="d-flex justify-content-center py-4">
                    <a href="index.html" class="logo d-flex align-items-center w-auto">
                      <img src="assets/img/logo.png" alt=""/>
                      <span class="d-none d-lg-block">Admin Panel</span>
                    </a>
                  </div>
    
                  <div class="card mb-3">
    
                    <div class="card-body">
    
                      <div class="pt-4 pb-2">
                        <h5 class="card-title text-center pb-0 fs-4">Login to Your Account</h5>
                        <p className={formErrors.isError?'text-center small error':'hide'}>Username or password doesn't exist</p>
                      </div>
    
                      <form class="row g-3 needs-validation" onSubmit={handleSubmit(onSubmit)}>
    
                        <div class="col-12">
                          <label for="yourUsername" class="form-label">Username</label>
                          
                           
                            <input type="text"  name="username" className="form-control"  onChange={onChange}  id="yourUsername"  />
                            <div  className = {!getUserDetails.username && isSubmiited?'error':'hide'}>Please enter your username.</div>
                           
                          </div>
                       
                       
    
                        <div class="col-12">
                          <label for="yourPassword" class="form-label">Password</label>
                          <input type="password" name="password" className='form-control' onChange={onChange} id="yourPassword" />
                          <div className = {!getUserDetails.password && isSubmiited?'error':'hide'}>Please enter your password!</div>
                          
                        </div>
    
                        <div class="col-12">
                          <div class="form-check">
                            <input class="form-check-input" type="checkbox" name="remember" value="true" id="rememberMe"/>
                            <label class="form-check-label" for="rememberMe">Remember me</label>
                          </div>
                        </div>
                        <div class="col-12">
                          <button class="btn btn-primary w-100" type="submit" 
                          disabled={!getUserDetails.username || !getUserDetails.password}
                          >Login</button>
                        </div>
                        <div class="col-12">
                          <p class="small mb-0">Don't have account? <a href="pages-register.html">Create an account</a></p>
                        </div>
                      </form>
    
                    </div>
                  </div>
    
                 
    
                </div>
              </div>
            </div>
    
          </section>
    
        </div>
      </main>
          )
}

export default Login;