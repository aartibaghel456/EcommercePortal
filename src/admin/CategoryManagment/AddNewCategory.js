import axios from 'axios'
import React, { useCallback, useEffect, useState } from 'react';
import { useParams,useNavigate   } from 'react-router-dom';
import { useForm } from "react-hook-form";
function AddNewCategory(){
  const [getCategoryDetails, setCategoryDetails] = useState({});
  const [isShowingAlert, setShowingAlert] = React.useState(false);
  const params = useParams();
  const navigate  = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (event) => {
    console.log(getCategoryDetails);
    axios.post(' http://localhost:5000/addnewcategory', getCategoryDetails)
        .then(response => {
          setShowingAlert(true);
          setTimeout(()=>{setShowingAlert(false);
            navigate('/admin/categories');
          },2000)
        });
    
}
  const onChange = (event) => {
    setCategoryDetails({...getCategoryDetails,[event.target.name]: event.target.value})
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
              <h5 class="card-title">Add New Category</h5>
              <form class="row g-3" onSubmit={handleSubmit(onSubmit)}>
                <div class="col-md-12">
                  <label for="inputName5" class="form-label">category Name</label>
                  <input type="text" class="form-control" name='category_name'  onChange={onChange}    id="inputCategoryName"/>
                  {errors.name && <p>Please check the  Title</p>}
                </div>
                <div class="col-md-6">
                  <label for="inputEmail5" class="form-label">Category Description</label>
                  <input type="text" class="form-control" name='category_description'  onChange={onChange}  id="inputCategoryDescription"/>
                </div>
                <div class="col-md-6">
                  <label for="inputPassword5" class="form-label">parent ID</label>
                  <input type="text" class="form-control" name='parent_id'  onChange={onChange}   id="inputParentId"/>
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

export default AddNewCategory;