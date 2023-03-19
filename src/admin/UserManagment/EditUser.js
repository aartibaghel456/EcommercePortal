import axios from 'axios'
import React, { useCallback, useEffect, useState } from 'react';
import { useParams,useNavigate   } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { Form, Message } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'
function EditUser() {
  const [getUserDetails, setUserDetails] = useState([]);
  const [isShowingAlert, setShowingAlert] = React.useState(false);
  const params = useParams();
  const navigate  = useNavigate();
  const userId = params.id;
  const { register, handleSubmit, formState: { errors } } = useForm();
  useEffect(() => {
    let mounted = true;
    getUser().then(function (response) {
      // handle success
      if(mounted) {
        setUserDetails(response.data.data);
      }
      
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    })
    return () => mounted = false;
  },[])
  const getUser = ()=>{
    return axios.get('http://localhost:5000/user/'+userId);
     
   }
   const onSubmit = (event) => {
    console.log(errors);
    let finalpayload = {
      "user_id":userId,
     "user": getUserDetails
  }
    axios.put(' http://localhost:5000/user', finalpayload)
        .then(response => {
          setShowingAlert(true);
          setTimeout(()=>{setShowingAlert(false);
            navigate('/admin/users');
          },2000)
        });
    
}
const onChange = (event) => {
  setUserDetails({...getUserDetails, [event.target.name]: event.target.value})
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
              <h5 class="card-title">Edit User</h5>
              <Form className="row g-3" onSubmit={handleSubmit(onSubmit)}>
              
                <div class="col-md-12">
               
                  <Form.Input
                    label="Name"
                    fluid
                    type="text"
                    name="name"
                    value={getUserDetails.name}
                    onChange={onChange}
                    error={getUserDetails.name ? false : {
                      content: 'Please enter a valid Name',
                      pointing: 'above'
                  }}
                  />
                
                 
                </div>
                <div class="col-md-6">
                  <Form.Input
                    label="Email"
                    fluid
                    type="text"
                    name="email"
                    value={getUserDetails.email}
                    onChange={onChange}
                    error={getUserDetails.email ? false : {
                      content: 'Please enter a valid Email',
                      pointing: 'above'
                  }}
                  />
                </div>
                <div class="col-md-6">
                  <label for="inputPassword5" class="form-label">Username</label>
                  <input type="text" class="form-control" name='username' value={getUserDetails.username} onChange={onChange}  readOnly={true} id="inputPassword5"/>
                </div>
                <div class="col-12">
                  <label for="inputAddress5" class="form-label">Phone</label>
                  <input type="text" class="form-control" name='phone' onChange={onChange} value={getUserDetails.phone} id="inputAddres5s" placeholder="1234 Main St"/>
                </div>
                <div class="col-12">
                  <label for="inputAddress2" class="form-label">Address </label>
                  <input type="text" class="form-control" name='address' onChange={onChange} value={getUserDetails.address} id="inputAddress2" placeholder="Apartment, studio, or floor"/>
                </div>
                <div class="col-md-6">
                  <label for="inputCity" class="form-label">City</label>
                  <input type="text" class="form-control" name='city' onChange={onChange} value={getUserDetails.city} id="inputCity"/>
                </div>
          
                <div class="col-md-6">
                  <label for="inputZip" class="form-label">Zip</label>
                  <input type="text" class="form-control" name='zip' onChange={onChange} value={getUserDetails.zip} id="inputZip"/>
                </div>
                <div class="col-12">
                  
                  <div class="text-center">
                  <button type="submit" class="btn btn-primary">Submit</button>
                  &nbsp;
                  <button type="reset" class="btn btn-secondary">Reset</button>
                </div>
                </div>
              
              </Form>

            </div>
          </div>
        </main>
        </>
    )
};

export default EditUser;