import axios from 'axios'
import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const Pages = (props) => {
  const [getPages, setPages] = useState([]);
 
  useEffect(() => {
    let mounted = true;
    getPagesList().then(function (response) {
      // handle success
      if(mounted) {
        setPages(response.data.data);
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
  const getPagesList = ()=>{
    return axios.get('http://localhost:5000/pages');
     
   }
  const deletePage = useCallback(
    (id) => () => {
      if (window.confirm("Are you sure want to delete?")) {
        console.log("ID: ", id)
        axios.delete('http://localhost:5000/page',{data:{page_id:id}}).then((res)=>{
console.log(res)
window.location.reload(false);
        })
      }
      
    },
    [],
  )
    return(<>
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
                            <a href="#" class="dataTable-sorter">S.N</a>
                          </th>
                          <th scope="col" data-sortable="" >
                            <a href="#" class="dataTable-sorter">Title</a>
                          </th>
                          <th scope="col" data-sortable="" >
                            <a href="#" class="dataTable-sorter">Description</a>
                          </th>
                          <th scope="col" data-sortable="" >
                            <a href="#" class="dataTable-sorter">Slug</a>
                          </th>
                          <th scope="col" data-sortable="" >
                            <a href="#" class="dataTable-sorter">Parent_ID</a>
                          </th>
                          <th scope="col" data-sortable="" >
                            <a href="#" class="dataTable-sorter">Image_URL</a>
                          </th>
                          <th scope="col" data-sortable="" >
                        <a href="#" class="dataTable-sorter">Action</a>
                      </th>
                        </tr>
                      </thead>
                      <tbody>
                      {
                      getPages.map((item,i)=>{
                        return(<tr>
                          <th scope="row">{i+1}</th>
                          <td>{item.title}</td>
                          <td>{item.description}</td>
                          <td>{item.slug}</td>
                          <td>{item.parent_id}</td>
                          <td>{item.image_url}</td>
                          <td> <Link to={'/admin/editpage/'+item.id}>
             Edit
            </Link> | <Link onClick={deletePage(item.id)}>
             Delete
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
    </>)
    }
    
    export default Pages;