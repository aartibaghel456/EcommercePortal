import {ArrowRight, BarChart, BoxArrowDownRight, CardList, ChevronBarDown, ChevronDown, Circle, DashCircle, Envelope, FileEarmark, Gem, Grid, JournalText, LayoutTextWindowReverse, MenuButtonWide, Person, QuestionCircle} from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
const Sidebar = () => {
    return <aside id="sidebar" class="sidebar">
    <ul class="sidebar-nav" id="sidebar-nav">
      <li class="nav-item">
        <Link  class="nav-link" to ="/admin/dashboard">
          <Grid color="royalblue" size={16} />
          <span>Dashboard</span>
        </Link>
      </li>
      <li class="nav-item">
        <a class="nav-link collapsed" data-bs-target="#users-nav" data-bs-toggle="collapse" href="#">
          <Person color="royalblue" size={16} />
          <span>User Managment</span>   
          <ChevronDown className='ms-auto'/>
        </a>
        <ul id="users-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
          <li>
            <Link to="/admin/users">
              <Circle size={16} />
              <span>Users List</span>
            </Link>
          </li>
           <li>
            <Link to="/admin/addnewuser">
              <Circle size={16} />
              <span>Add New</span>
            </Link>
          </li>
     
        </ul>
      </li>
      <li class="nav-item">
        <a class="nav-link collapsed" data-bs-target="#products-nav" data-bs-toggle="collapse" href="#">
          <Person color="royalblue" size={16} />
          <span>Product Managment</span>   
          <ChevronDown className='ms-auto'/>
        </a>
        <ul id="products-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
          <li>
            <Link to="/admin/products">
              <Circle size={16} />
              <span>Products List</span>
            </Link>
          </li>
           <li>
            <Link to="/admin/addnewproduct">
              <Circle size={16} />
              <span>Add New Product</span>
            </Link>
          </li>
   
        </ul>
      </li>
      <li class="nav-item">
        <a class="nav-link collapsed" data-bs-target="#categories-nav" data-bs-toggle="collapse" href="#">
          <Person color="royalblue" size={16} />
          <span>Category Managment</span>   
          <ChevronDown className='ms-auto'/>
        </a>
        <ul id="categories-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
          <li>
            <Link to="/admin/categories">
              <Circle size={16} />
              <span>Category List</span>
            </Link>
          </li>
           <li>
            <Link to="/admin/addnewcategory">
              <Circle size={16} />
              <span>Add New Category</span>
            </Link>
          </li>

        </ul>
      </li>
      <li class="nav-item">
        <a class="nav-link collapsed" data-bs-target="#pages-nav" data-bs-toggle="collapse" href="#">
          <Person color="royalblue" size={16} />
          <span>Page Managment</span>   
          <ChevronDown className='ms-auto'/>
        </a>
        <ul id="pages-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
          <li>
            <Link to="/admin/pages">
              <Circle size={16} />
              <span>Pages List</span>
            </Link>
          </li>
           <li>
            <Link to="/admin/addnewpage">
              <Circle size={16} />
              <span>Add New Page</span>
            </Link>
          </li>
 
        </ul>
      </li>
      <li class="nav-item">
        <a class="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse" href="#">
          <MenuButtonWide color="royalblue" size={16} />
          <span>Components</span>   
          <ChevronDown className='ms-auto'/>
        </a>
        <ul id="components-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
          <li>
            <a href="components-alerts.html">
              <Circle size={16} />
              <span>Alerts</span>
            </a>
          </li>
          <li>
            <a href="components-accordion.html">
            <Circle size={16} />
              <span>Accordion</span>
            </a>
          </li>
          <li>
            <a href="components-badges.html">
            <Circle size={16} />
              <span>Badges</span>
            </a>
          </li>
          <li>
            <a href="components-breadcrumbs.html">
            <Circle size={16} />
              <span>Breadcrumbs</span>
            </a>
          </li>
          <li>
            <a href="components-buttons.html">
            <Circle size={16} />
              <span>Buttons</span>
            </a>
          </li>
          <li>
            <a href="components-cards.html">
               <Circle size={16} />
              <span>Cards</span>
            </a>
          </li>
          <li>
            <a href="components-carousel.html">
            <Circle size={16} />
              <span>Carousel</span>
            </a>
          </li>
          <li>
            <a href="components-list-group.html">
               <Circle size={16} />
              <span>List group</span>
            </a>
          </li>
          <li>
            <a href="components-modal.html">
               <Circle size={16} />
              <span>Modal</span>
            </a>
          </li>
          <li>
            <a href="components-tabs.html">
               <Circle size={16} />
              <span>Tabs</span>
            </a>
          </li>
          <li>
            <a href="components-pagination.html">
               <Circle size={16} />
              <span>Pagination</span>
            </a>
          </li>
          <li>
            <a href="components-progress.html">
               <Circle size={16} />
              <span>Progress</span>
            </a>
          </li>
          <li>
            <a href="components-spinners.html">
               <Circle size={16} />
              <span>Spinners</span>
            </a>
          </li>
          <li>
            <a href="components-tooltips.html">
               <Circle size={16} />
              <span>Tooltips</span>
            </a>
          </li>
        </ul>
      </li>
      <li class="nav-item">
        <a class="nav-link collapsed" data-bs-target="#forms-nav" data-bs-toggle="collapse" href="#">
          <i class="bi bi-journal-text"></i>
          <JournalText/>
          <span>Forms</span>
          <ChevronDown/>
        </a>
        <ul id="forms-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
          <li>
            <a href="forms-elements.html">
               <Circle size={16} />
              <span>Form Elements</span>
            </a>
          </li>
          <li>
            <a href="forms-layouts.html">
               <Circle size={16} />
              <span>Form Layouts</span>
            </a>
          </li>
          <li>
            <a href="forms-editors.html">
               <Circle size={16} />
              <span>Form Editors</span>
            </a>
          </li>
          <li>
            <a href="forms-validation.html">
               <Circle size={16} />
              <span>Form Validation</span>
            </a>
          </li>
        </ul>
      </li>
      <li class="nav-item">
        <a class="nav-link collapsed" data-bs-target="#tables-nav" data-bs-toggle="collapse" href="#">
       
          <LayoutTextWindowReverse/>
          <span>Tables</span>
   
          <ChevronDown/>
        </a>
        <ul id="tables-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
          <li>
            <a href="tables-general.html">
               <Circle size={16} />
              <span>General Tables</span>
            </a>
          </li>
          <li>
            <a href="tables-data.html">
               <Circle size={16} />
              <span>Data Tables</span>
            </a>
          </li>
        </ul>
      </li>
      <li class="nav-item">
        <a class="nav-link collapsed" data-bs-target="#charts-nav" data-bs-toggle="collapse" href="#">
          <BarChart/>
          <span>Charts</span>
          <ChevronDown/>
        </a>
        <ul id="charts-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
          <li>
            <a href="charts-chartjs.html">
               <Circle size={16} />
              <span>Chart.js</span>
            </a>
          </li>
          <li>
            <a href="charts-apexcharts.html">
               <Circle size={16} />
              <span>ApexCharts</span>
            </a>
          </li>
          <li>
            <a href="charts-echarts.html">
               <Circle size={16} />
              <span>ECharts</span>
            </a>
          </li>
        </ul>
      </li>
      <li class="nav-item">
        <a class="nav-link collapsed" data-bs-target="#icons-nav" data-bs-toggle="collapse" href="#">
          <Gem/>
          <span>Icons</span>
          <ChevronDown/>
        </a>
        <ul id="icons-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
          <li>
            <a href="icons-bootstrap.html">
               <Circle size={16} />
              <span>Bootstrap Icons</span>
            </a>
          </li>
          <li>
            <a href="icons-remix.html">
               <Circle size={16} />
              <span>Remix Icons</span>
            </a>
          </li>
          <li>
            <a href="icons-boxicons.html">
               <Circle size={16} />
              <span>Boxicons</span>
            </a>
          </li>
        </ul>
      </li>
      <li class="nav-heading">Pages</li>
      <li class="nav-item">
        <a class="nav-link collapsed" href="users-profile.html">
          <Person/>
          <span>Profile</span>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link collapsed" href="pages-faq.html">
          <QuestionCircle/>
          <span>F.A.Q</span>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link collapsed" href="pages-contact.html">
          <Envelope/>
          <span>Contact</span>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link collapsed" href="pages-register.html">
          
          <CardList/>
          <span>Register</span>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link collapsed" href="pages-login.html">
        
          <BoxArrowDownRight/>
          <span>Login</span>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link collapsed" href="pages-error-404.html">
          <DashCircle/>
          <span>Error 404</span>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link collapsed" href="pages-blank.html">
       
          <FileEarmark/>
          <span>Blank</span>
        </a>
      </li>
    </ul>
  
  </aside>
};

export default Sidebar;