import axios from 'axios'
import React, { useCallback, useEffect, useState } from 'react';
import { useParams,useNavigate   } from 'react-router-dom';
import { useForm } from "react-hook-form";
function AddNewPage(){
  const [getPageDetails, setPageDetails] = useState({});
  const [isShowingAlert, setShowingAlert] = React.useState(false);
  const params = useParams();
  const navigate  = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (event) => {
    axios.post(' http://localhost:5000/addnewpage', getPageDetails)
        .then(response => {
          setShowingAlert(true);
          setTimeout(()=>{setShowingAlert(false);
            navigate('/admin/pages');
          },2000)
        });
    
}
  const onChange = (event) => {
    setPageDetails({...getPageDetails,[event.target.name]: event.target.value})
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
              <h5 class="card-title">Add New Page</h5>
              <form class="row g-3" onSubmit={handleSubmit(onSubmit)}>
                <div class="col-md-12">
                  <label for="inputName5" class="form-label">Title</label>
                  <input type="text" class="form-control" name='title'  onChange={onChange}    id="inputName"/>
                  {errors.name && <p>Please check the  Title</p>}
                </div>
                <div class="col-md-12">
                  <label for="inputEmail5" class="form-label">Description</label>
                  <input type="text" class="form-control" name='description'  onChange={onChange}  id="inputCategory"/>
                </div>
                <div class="col-md-4">
                  <label for="inputPassword5" class="form-label">Slug</label>
                  <input type="text" class="form-control" name='slug'  onChange={onChange}   id="inputSku"/>
                </div>
                <div class="col-md-4">
                  <label for="inputPassword5" class="form-label">Parent ID</label>
                  <input type="text" class="form-control" name='parent_id'  onChange={onChange}   id="inputSku"/>
                </div>
                <div class="col-md-4">
                  <label for="inputPassword5" class="form-label">Image URL</label>
                  <input type="text" class="form-control" name='image_url'  onChange={onChange}   id="inputImage_url"/>
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

export default AddNewPage;