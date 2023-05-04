import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

const EditPayments=() =>{
  const [getPaymentDetails, setPaymentDetails] = useState([]);
  const [isShowingAlert, setShowingAlert] = React.useState(false);
  const params = useParams();
  const navigate  = useNavigate();
  const paymentId = params.id;
  const { register, handleSubmit, formState: { errors } } = useForm();
  useEffect(() => {
    let mounted = true;
    getPaymentMethods().then(function (response) {
      // handle success
      if(mounted) {
        setPaymentDetails(response.data.data);
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
  const getPaymentMethods = ()=>{
    return axios.get('http://localhost:5000/paymentmethods/'+paymentId);
     
   }
   const onSubmit = (event) => {
    let finalpayload = {
      "payment_id":paymentId,
     "payment": getPaymentDetails
  }
    axios.put(' http://localhost:5000/paymentmethods', finalpayload)
        .then(response => {
          setShowingAlert(true);
          setTimeout(()=>{setShowingAlert(false);
            navigate('/admin/pages');
          },2000)
        });
    
}
const onChange = (event) => {
    setPaymentDetails({...getPaymentDetails, [event.target.name]: event.target.value})
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
              <h5 class="card-title">Edit Payments</h5>
              <form class="row g-3" onSubmit={handleSubmit(onSubmit)}>
                <div class="col-md-12">
                  <label for="inputName5" class="form-label">Payment Type</label>
                  <input type="text" class="form-control" name='paymenttype'  onChange={onChange} value={getPaymentDetails.paymenttype}   id="inputTitle"/>
                  {errors.name && <p>Please check the  Title</p>}
                </div>
                <div class="col-md-6">
                  <label for="inputEmail5" class="form-label">Description</label>
                  <input type="text" class="form-control" name='description' value={getPaymentDetails.description} onChange={onChange}  id="inputDescription"/>
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

export default EditPayments;