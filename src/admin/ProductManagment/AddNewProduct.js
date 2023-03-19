import axios from 'axios'
import React, { useCallback, useEffect, useState } from 'react';
import { useParams,useNavigate   } from 'react-router-dom';
import { useForm } from "react-hook-form";
function AddNewProduct(){
  const [getProductDetails, setProductDetails] = useState({});
  const [isShowingAlert, setShowingAlert] = React.useState(false);
  const [getImage, setImage] = React.useState('No_Image_Available.jpg');
  const [getcatList,setCatlist] = React.useState([]);
  const params = useParams();
  const navigate  = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (event) => {
    axios.post(' http://localhost:5000/addnewproduct', getProductDetails)
        .then(response => {
          setShowingAlert(true);
          setTimeout(()=>{setShowingAlert(false);
            navigate('/admin/products');
          },2000)
        });
    
}
  const onChange = (event) => {
    setProductDetails({...getProductDetails,[event.target.name]: event.target.value})
  }
  useEffect(() => {
    let mounted = true;
    getcatagoryList().then(function (response) {
      // handle success
      if(mounted) {
        setCatlist(response.data.data);
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
  const getcatagoryList = ()=>{
    return axios.get('http://localhost:5000/categories');
     
   }
  const uploadHandler = (event)=> {
    const data = new FormData();
    data.append('upload', event.target.files[0]);
    axios.post('http://localhost:5000/uploads', data)
      .then((res) => {
        setProductDetails({...getProductDetails,'image_url':res.data})
       setImage(res.data)
      });
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
              <h5 class="card-title">Add New Product</h5>
              <form class="row g-3" onSubmit={handleSubmit(onSubmit)}>
                <div class="col-md-12">
                  <label for="inputName5" class="form-label">Title</label>
                  <input type="text" class="form-control" name='title'  onChange={onChange}    id="inputName"/>
                  {errors.name && <p>Please check the  Title</p>}
                </div>
                <div class="col-md-6">
                  <label for="inputEmail5" class="form-label">Category</label>
                  <select class="form-control" name='category_id'  onChange={onChange}  id="inputCategory">
                  <option value="0">Select Category</option>
                    {getcatList.map((res)=>{
                      return <option value={res.id}>{res.category_name}</option>
                    })}
                  </select>
                </div>
                <div class="col-md-6">
                  <label for="inputPassword5" class="form-label">SKU</label>
                  <input type="text" class="form-control" name='sku'  onChange={onChange}   id="inputSku"/>
                </div>
                <div class="col-md-6">
                  <label for="inputPassword5" class="form-label">Image URL</label>
                  <input type="file" name="file" onChange={uploadHandler}/>
                
                  </div>
                  <div class="col-md-6">
                  <img src={`../assets/image/upload/${getImage}`} height={100} width={100}/>
                  </div>
                <div class="col-12">
                  <label for="inputAddress5" class="form-label">Description</label>
                  <input type="text" class="form-control" name='description' onChange={onChange}  id="inputDescription"/>
                </div>
                <div class="col-12">
                  <label for="inputAddress2" class="form-label">Quantity</label>
                  <input type="text" class="form-control" name='quantity' onChange={onChange}  id="inputQuantity"/>
                </div>
                <div class="col-md-6">
                  <label for="inputCity" class="form-label">Price</label>
                  <input type="text" class="form-control" name='price' onChange={onChange}  id="inputPrice"/>
                </div>
          
                <div class="col-md-6">
                  <label for="inputZip" class="form-label">Discount Price</label>
                  <input type="text" class="form-control" name='discount_price' onChange={onChange}  id="inputDiscount_price"/>
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

export default AddNewProduct;