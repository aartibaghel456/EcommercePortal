import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
const Layout = ({hidHeaderPaths=[]}) => {
  const {pathname} = useLocation();
  let userInfo =   localStorage.getItem("userInfo");
    return (
      <>
    {!hidHeaderPaths.includes(pathname) && userInfo && <Header/>}
    <Outlet />
    {!hidHeaderPaths.includes(pathname)&& userInfo && <Sidebar/>}
    
      </>
    )
  };
  
  export default Layout;