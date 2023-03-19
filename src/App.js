//import logo from './logo.svg';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
 import Dashboard from './admin/pages/Dashboard';
import Login from './admin/pages/Login';
import Users from './admin/UserManagment/Users';
import Notfound from './admin/pages/Notfound';
import RequireAuth from './admin/pages/RequireAuth';
import AddNewUser from './admin/UserManagment/AddNew';
import EditUser from './admin/UserManagment/EditUser';
import Layout from './admin/componants/Layout';
import Basic_Layout from './Basic_Layout';
import Products from './admin/ProductManagment/Products';
import AddNewProduct from './admin/ProductManagment/AddNewProduct';
import EditProduct from './admin/ProductManagment/EditProduct';
import Categories from './admin/CategoryManagment/Categories';
import AddNewCategory from './admin/CategoryManagment/AddNewCategory';
import EditCategory from './admin/CategoryManagment/EditCategory';
import Pages from './admin/PageManagment/Pages';
import AddNewPage from './admin/PageManagment/AddNewPage';
import EditPage from './admin/PageManagment/EditPage';
import MainLayout from './Layout/MainLayout';
import Home from './Pages/Home';

function App() {
  let authed = localStorage.getItem("userInfo");
  return (
    <BrowserRouter>

    <Routes>
        <Route path="/" element={<MainLayout />}>
           <Route index element={<Home />} />
    
        </Route>
     
        
        <Route path="/admin" element={< Layout hidHeaderPaths={["/admin"]}/>} >
          <Route index element={<Login />} />
          <Route path="/admin/dashboard" element={ 
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
              } 
              />
          <Route path="/admin/users" element={
           <RequireAuth>
          <Users  />
         </RequireAuth>
          } />
          <Route path="/admin/addnewuser" element={
          <RequireAuth>
          <AddNewUser />
          </RequireAuth>
          } />
          <Route path="/admin/edituser/:id" element={
          <RequireAuth>
          <EditUser />
          </RequireAuth>
          } />
          <Route path="/admin/products" element={
           <RequireAuth>
          <Products />
         </RequireAuth>
          } />
          <Route path="/admin/addnewproduct" element={
          <RequireAuth>
          <AddNewProduct />
          </RequireAuth>
          } />
          <Route path="/admin/editproduct/:id" element={
          <RequireAuth>
          <EditProduct />
          </RequireAuth>
          } />
          <Route path="/admin/categories" element={
           <RequireAuth>
          <Categories />
         </RequireAuth>
          } />
          <Route path="/admin/addnewcategory" element={
          <RequireAuth>
          <AddNewCategory />
          </RequireAuth>
          } />
          <Route path="/admin/editcategory/:id" element={
          <RequireAuth>
          <EditCategory />
          </RequireAuth>
          } />
          <Route path="/admin/pages" element={
           <RequireAuth>
          <Pages />
         </RequireAuth>
          } />
          <Route path="/admin/addnewpage" element={
          <RequireAuth>
          <AddNewPage />
          </RequireAuth>
          } />
          <Route path="/admin/editpage/:id" element={
          <RequireAuth>
          <EditPage />
          </RequireAuth>
          } />
          <Route path="*" element={<Notfound />} />

        </Route>
      </Routes>
  </BrowserRouter>
    
  );
}

export default App;
