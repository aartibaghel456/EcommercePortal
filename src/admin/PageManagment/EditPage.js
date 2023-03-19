import axios from 'axios'
import React, { useCallback, useEffect, useState } from 'react';
import { useParams,useNavigate   } from 'react-router-dom';
import { useForm } from "react-hook-form";
function EditPage() {
  const [getPageDetails, setPageDetails] = useState([]);
  const [isShowingAlert, setShowingAlert] = React.useState(false);
  const params = useParams();
  const navigate  = useNavigate();
  const pageId = params.id;
  const { register, handleSubmit, formState: { errors } } = useForm();
  useEffect(() => {
    let mounted = true;
    getPage().then(function (response) {
      // handle success
      if(mounted) {
        setPageDetails(response.data.data);
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
  const getPage = ()=>{
    return axios.get('http://localhost:5000/page/'+pageId);
     
   }
   const onSubmit = (event) => {
    let finalpayload = {
      "page_id":pageId,
     "page": getPageDetails
  }
    axios.put(' http://localhost:5000/page', finalpayload)
        .then(response => {
          setShowingAlert(true);
          setTimeout(()=>{setShowingAlert(false);
            navigate('/admin/pages');
          },2000)
        });
    
}
const onChange = (event) => {
  setPageDetails({...getPageDetails, [event.target.name]: event.target.value})
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
              <h5 class="card-title">Edit Page</h5>
              <form class="row g-3" onSubmit={handleSubmit(onSubmit)}>
                <div class="col-md-12">
                  <label for="inputName5" class="form-label">Title</label>
                  <input type="text" class="form-control" name='title'  onChange={onChange} value={getPageDetails.title}   id="inputTitle"/>
                  {errors.name && <p>Please check the  Title</p>}
                </div>
                <div class="col-md-6">
                  <label for="inputEmail5" class="form-label">Description</label>
                  <input type="text" class="form-control" name='description' value={getPageDetails.description} onChange={onChange}  id="inputDescription"/>
                </div>
                <div class="col-md-6">
                  <label for="inputPassword5" class="form-label">Slug</label>
                  <input type="text" class="form-control" name='slug' value={getPageDetails.slug} onChange={onChange}  readOnly={true} id="inputSlug"/>
                </div>
                <div class="col-md-6">
                  <label for="inputPassword5" class="form-label">Parent_ID</label>
                  <input type="text" class="form-control" name='parent_id' value={getPageDetails.parent_id} onChange={onChange}  readOnly={true} id="inputparent_id"/>
                </div>
                <div class="col-12">
                  <label for="inputAddress5" class="form-label">Image URL</label>
                  <input type="text" class="form-control" name='image_url' onChange={onChange} value={getPageDetails.image_url} id="inputimage_url"/>
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

export default EditPage;