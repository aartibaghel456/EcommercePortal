import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Billing=() =>{
    const [getBilling, setBilling] = useState([]);
 
  useEffect(() => {
    let mounted = true;
    getBillingList().then(function (response) {
      // handle success
      if(mounted) {
        setBilling(response.data.data);
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
  const getBillingList = ()=>{
    return axios.get('http://localhost:5000/billing');
     
   }

   const cancelBilling =() =>{

   }
    return(
        <>
        <main id="main" class="main">
      <div class="pagetitle">
        <h1>Data Tables</h1>
        <nav>
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <a href="index.html">Home</a>
            </li>
            <li class="breadcrumb-item">Tables</li>
            <li class="breadcrumb-item active">Data</li>
          </ol>
        </nav>
      </div>
      <section class="section">
        <div class="row">
          <div class="col-lg-12">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Datatables</h5>
                <p>Add lightweight datatables to your project with using the <a href="https://github.com/fiduswriter/Simple-DataTables" target="_blank">Simple DataTables</a> library. Just add <code>.datatable</code> class name to any table you wish to conver to a datatable </p>
                <div class="dataTable-wrapper dataTable-loading no-footer sortable searchable fixed-columns">
                  <div class="dataTable-top">
                    <div class="dataTable-dropdown">
                      <label>
                        <select class="dataTable-selector">
                          <option value="5">5</option>
                          <option value="10" selected="">10</option>
                          <option value="15">15</option>
                          <option value="20">20</option>
                          <option value="25">25</option>
                        </select> entries per page </label>
                    </div>
                    <div class="dataTable-search">
                      <input class="dataTable-input" placeholder="Search..." type="text"/>
                    </div>
                  </div>
                  <div class="dataTable-container">
                    <table class="table datatable dataTable-table">
                      <thead>
                        <tr>
                          <th scope="col" data-sortable="" >
                            <a href="#" class="dataTable-sorter">ID</a>
                          </th>
                          <th scope="col" data-sortable="" >
                            <a href="#" class="dataTable-sorter">Country</a>
                          </th>
                          <th scope="col" data-sortable="" >
                            <a href="#" class="dataTable-sorter">First Name</a>
                          </th>
                          <th scope="col" data-sortable="" >
                            <a href="#" class="dataTable-sorter">Last Name</a>
                          </th>
                          <th scope="col" data-sortable="" >
                            <a href="#" class="dataTable-sorter">Company Name</a>
                          </th>
                          <th scope="col" data-sortable="" >
                            <a href="#" class="dataTable-sorter">Address</a>
                          </th>
                          <th scope="col" data-sortable="" >
                            <a href="#" class="dataTable-sorter">Address1</a>
                          </th>
                          <th scope="col" data-sortable="" >
                            <a href="#" class="dataTable-sorter">City</a>
                          </th>
                          <th scope="col" data-sortable="" >
                            <a href="#" class="dataTable-sorter">State</a>
                          </th>
                          <th scope="col" data-sortable="" >
                            <a href="#" class="dataTable-sorter">Postcode</a>
                          </th>
                          <th scope="col" data-sortable="" >
                            <a href="#" class="dataTable-sorter">Email Address</a>
                          </th>
                          <th scope="col" data-sortable="" >
                            <a href="#" class="dataTable-sorter">Phone</a>
                          </th>
                          <th scope="col" data-sortable="" >
                            <a href="#" class="dataTable-sorter">Create an Account</a>
                          </th>
                          <th scope="col" data-sortable="" >
                        <a href="#" class="dataTable-sorter">Action</a>
                      </th>
                        </tr>
                      </thead>
                      <tbody>
                      {
                      getBilling.map((item,i)=>{
                        return(<tr>
                          <th scope="row">{i+1}</th>
                          <td>{item.country}</td>
                          <td>{item.first_name}</td>
                          <td>{item.last_name}</td>
                          <td>{item.company_name}</td>
                          <td>{item.address}</td>
                          <td>{item.address1}</td>
                          <td>{item.city}</td>
                          <td>{item.state}</td>
                          <td>{item.postcode}</td>
                          <td>{item.email_address}</td>
                          <td>{item.phone}</td>
                          <td>{item.create_an_account}</td>
                          <td> <Link to={'/admin/updatebilling/'+item.id}>
             Update
            </Link> | <Link onClick={cancelBilling(item.id)}>
             Cancel
            </Link></td>
                        </tr>)
                      })
                    }
                    </tbody>
                </table>
                  </div>
                  <div class="dataTable-bottom">
                    <div class="dataTable-info">Showing 1 to 5 of 5 entries</div>
                    <nav class="dataTable-pagination">
                      <ul class="dataTable-pagination-list"></ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
        </>
    )
}


export default Billing;