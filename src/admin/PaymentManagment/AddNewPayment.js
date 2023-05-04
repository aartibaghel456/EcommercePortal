import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

const AddNewPayment=() =>{
  const [getPaymentDetails, setPaymentDetails] = useState([]);
  const [isShowingAlert, setShowingAlert] = React.useState(false);
  const params = useParams();
  const navigate  = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (event) => {
    axios.post(' http://localhost:5000/addnewpayment', getPaymentDetails)
        .then(response => {
          setShowingAlert(true);
          setTimeout(()=>{setShowingAlert(false);
            navigate('/admin/paymentmethods');
          },2000)
        });
    
}
  const onChange = (event) => {
    setPaymentDetails({...getPaymentDetails,[event.target.name]: event.target.value})
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
              <h5 class="card-title">Add New Payment</h5>
              <form class="row g-3" onSubmit={handleSubmit(onSubmit)}>
                <div class="col-md-12">
                  <label for="inputName5" class="form-label">Payment Type</label>
                  <input type="text" class="form-control" name='paymenttype'  onChange={onChange}    id="inputName"/>
                  {errors.name && <p>Please check the  Payment Type</p>}
                </div>
                <div class="col-md-12">
                  <label for="inputEmail5" class="form-label">Description</label>
                  <input type="text" class="form-control" name='description'  onChange={onChange}  id="inputCategory"/>
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
}

export default AddNewPayment;