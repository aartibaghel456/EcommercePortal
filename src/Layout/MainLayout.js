import { Outlet } from "react-router-dom";
import "../css/material-design-iconic-font.min.css";
import "../css/animate.css";
import "../css/style.css";
import "../css/font-awesome.min.css";
import "../css/fontawesome-stars.css";
import "../css/helper.css";
import "../css/magnific-popup.css";
import "../css/meanmenu.css";
import "../css/owl.carousel.min.css";
import "../css/nice-select.css";
import "../css/responsive.css";
import "../css/slick.css";
import "../css/venobox.css";
import $ from 'jquery';
import MainHeader from "./MainHeader";
import MainNav from "./MainNav";
import MainFooter from "./MainFooter";
const MainLayout = () => {
    return (
      <>
         <div class="body-wrapper">
    <MainHeader/>
    
<MainNav/>
<Outlet />
<MainFooter/>

</div>
    
      </>
    )
  };
  
  export default MainLayout;