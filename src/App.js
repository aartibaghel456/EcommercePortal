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
import ProductDeatils from './Pages/ProductDetails';
import CategoryProduct from './Pages/CategoryProduct';
import Checkout from './Pages/Checkout';
import Fullcart from './Pages/Fullcart';
import RegisterLogin from './Pages/RegisterLogin';
import Orders from './admin/OrderManagment/Orders';
import OrderDetails from './admin/OrderManagment/OrderDetails';
import Billing from './admin/BillingManagment/Billing';
import Shipping from './admin/ShippingManagment/Shipping';
import PaymentMethods from './admin/PaymentManagment/PaymentMethods';
import EditPayments from './admin/PaymentManagment/EditPayments';
import AddNewPayment from './admin/PaymentManagment/AddNewPayment';

function App() {
  //let authed = localStorage.getItem("userInfo");
  return (
    <BrowserRouter>

    <Routes>
        <Route path="/" element={<MainLayout />}>
           <Route index element={<Home />} />
           <Route path='/products-details/:id' element={<ProductDeatils />} />
           <Route path='/category-product/:id' element={<CategoryProduct />} />
           <Route path='/check-out' element={<Checkout />} />
           <Route path='/full-cart' element={<Fullcart />} />
           <Route path='/register-login' element={<RegisterLogin />} />
           
    
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
          <Route path="/admin/orders" element={
          <RequireAuth>
          <Orders />
          </RequireAuth>
          } />
          <Route path="/admin/orderdetails/:id" element={
          <RequireAuth>
          <OrderDetails />
          </RequireAuth>
          } />
          <Route path="/admin/billing" element={
          <RequireAuth>
          <Billing />
          </RequireAuth>
          } />
          <Route path="/admin/shipping" element={
          <RequireAuth>
          <Shipping />
          </RequireAuth>
          } />
          <Route path="/admin/paymentmethods" element={
          <RequireAuth>
          <PaymentMethods />
          </RequireAuth>
          } />
          <Route path="/admin/editpayments/:id" element={
          <RequireAuth>
          <EditPayments />
          </RequireAuth>
          } />
          <Route path="/admin/addnewpayment" element={
          <RequireAuth>
          <AddNewPayment />
          </RequireAuth>
          } />
          <Route path="*" element={<Notfound />} />

        </Route>
      </Routes>
  </BrowserRouter>
    
  );
}

export default App;
