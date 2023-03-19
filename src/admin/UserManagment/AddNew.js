import axios from 'axios'
import React, { useCallback, useEffect, useState } from 'react';
import { useParams,useNavigate   } from 'react-router-dom';
import { useForm } from "react-hook-form";
function AddNewUser(){
  const [getUserDetails, setUserDetails] = useState({});
  const [isShowingAlert, setShowingAlert] = React.useState(false);
  const params = useParams();
  const navigate  = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (event) => {
    axios.post(' http://localhost:5000/addnewuser', getUserDetails)
        .then(response => {
          setShowingAlert(true);
          setTimeout(()=>{setShowingAlert(false);
            navigate('/admin/users');
          },2000)
        });
    
}
  const onChange = (event) => {
    setUserDetails({...getUserDetails,[event.target.name]: event.target.value})
  }
    return(
        <>
        <main id="main" class="main">
        <div class="card">
          {
            isShowingAlert?<div className={`alert alert-success ${isShowingAlert ? 'alert-shown' : 'alert-hidden'}`}  >
            <strong>Success!</strong> Your data successfully update.
          </div>:''
            }
            <div class="card-body">
              <h5 class="card-title">Add User</h5>
              <form class="row g-3" onSubmit={handleSubmit(onSubmit)}>
                <div class="col-md-12">
                  <label for="inputName5" class="form-label">Name</label>
                  <input type="text" class="form-control" name='name'  onChange={onChange}    id="inputName5"/>
                  {errors.name && <p>Please check the  Name</p>}
                </div>
                <div class="col-md-4">
                  <label for="inputEmail5" class="form-label">Email</label>
                  <input type="email" class="form-control" name='email'  onChange={onChange}  id="inputEmail5"/>
                </div>
                <div class="col-md-4">
                  <label for="inputPassword5" class="form-label">Username</label>
                  <input type="text" class="form-control" name='username'  onChange={onChange}   id="inputPassword5"/>
                </div>
                <div class="col-md-4">
                  <label for="inputPassword5" class="form-label">Password</label>
                  <input type="text" class="form-control" name='password'  onChange={onChange}   id="inputPassword5"/>
                </div>
                <div class="col-12">
                  <label for="inputAddress5" class="form-label">Phone</label>
                  <input type="text" class="form-control" name='phone' onChange={onChange}  id="inputAddres5s" placeholder="1234 Main St"/>
                </div>
                <div class="col-12">
                  <label for="inputAddress2" class="form-label">Address </label>
                  <input type="text" class="form-control" name='address' onChange={onChange}  id="inputAddress2" placeholder="Apartment, studio, or floor"/>
                </div>
                <div class="col-md-6">
                  <label for="inputCity" class="form-label">City</label>
                  <input type="text" class="form-control" name='city' onChange={onChange}  id="inputCity"/>
                </div>
          
                <div class="col-md-6">
                  <label for="inputZip" class="form-label">Zip</label>
                  <input type="text" class="form-control" name='zip' onChange={onChange}  id="inputZip"/>
                </div>
                <div class="col-12">
                  
                  <div class="text-center">
                  <button type="submit" class="btn btn-primary">Submit</button>
                  &nbsp;
                  <button type="reset" class="btn btn-secondary">Reset</button>
                </div>
                </div>
              
              </form>

            </div>
          </div>
        </main>
        </>
    )
};

export default AddNewUser;