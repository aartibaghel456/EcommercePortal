import { Bell, BoxArrowRight, ChatLeftText, CheckCircle, Gear, InfoCircle, List, Person, QuestionCircle, Search, XCircle } from "react-bootstrap-icons";
import { useNavigate } from "react-router";
import "../css/Header.css";
const Header = () => {
  const navigate = useNavigate();
  const logOut = (e) => {
    localStorage.clear();
    navigate("/admin");
  };
    return <header id="header" class="header fixed-top d-flex align-items-center">
    <div class="d-flex align-items-center justify-content-between">
      <a href="index.html" class="logo d-flex align-items-center">
        <img src="assets/img/logo.png" alt=""/>
        <span class="d-none d-lg-block">Admin</span>
      </a>
      <i class="bi bi-list toggle-sidebar-btn"></i>
      <List className="toggle-sidebar-btn"/>
    </div>
    <div class="search-bar">
      <form class="search-form d-flex align-items-center" method="POST" action="#">
        <input type="text" name="query" placeholder="Search" title="Enter search keyword"/>
        <button type="submit" title="Search">
          <Search/>
        </button>
      </form>
    </div>
    <nav class="header-nav ms-auto">
      <ul class="d-flex align-items-center">
        <li class="nav-item d-block d-lg-none">
          <a class="nav-link nav-icon search-bar-toggle " href="#">
          <Search/>
          </a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
            
            <Bell/>
            <span class="badge bg-primary badge-number">4</span>
          </a>
          <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
            <li class="dropdown-header"> You have 4 new notifications <a href="#">
                <span class="badge rounded-pill bg-primary p-2 ms-2">View all</span>
              </a>
            </li>
            <li>
              <hr class="dropdown-divider"/>
            </li>
            <li class="notification-item">
              <i class="bi bi-exclamation-circle text-warning"></i>
              <div>
                <h4>Lorem Ipsum</h4>
                <p>Quae dolorem earum veritatis oditseno</p>
                <p>30 min. ago</p>
              </div>
            </li>
            <li>
              <hr class="dropdown-divider"/>
            </li>
            <li class="notification-item">
              
              <XCircle/>
              <div>
                <h4>Atque rerum nesciunt</h4>
                <p>Quae dolorem earum veritatis oditseno</p>
                <p>1 hr. ago</p>
              </div>
            </li>
            <li>
              <hr class="dropdown-divider"/>
            </li>
            <li class="notification-item">
              
              <CheckCircle/>
              <div>
                <h4>Sit rerum fuga</h4>
                <p>Quae dolorem earum veritatis oditseno</p>
                <p>2 hrs. ago</p>
              </div>
            </li>
            <li>
              <hr class="dropdown-divider"/>
            </li>
            <li class="notification-item">
      
              <InfoCircle/>
              <div>
                <h4>Dicta reprehenderit</h4>
                <p>Quae dolorem earum veritatis oditseno</p>
                <p>4 hrs. ago</p>
              </div>
            </li>
            <li>
              <hr class="dropdown-divider"/>
            </li>
            <li class="dropdown-footer">
              <a href="#">Show all notifications</a>
            </li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
            <ChatLeftText/>
            <span class="badge bg-success badge-number">3</span>
          </a>
          <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow messages">
            <li class="dropdown-header"> You have 3 new messages <a href="#">
                <span class="badge rounded-pill bg-primary p-2 ms-2">View all</span>
              </a>
            </li>
            <li>
              <hr class="dropdown-divider"/>
            </li>
            <li class="message-item">
              <a href="#">
                <img src="assets/img/messages-1.jpg" alt="" class="rounded-circle"/>
                <div>
                  <h4>Maria Hudson</h4>
                  <p>Velit asperiores et ducimus soluta repudiandae labore officia est ut...</p>
                  <p>4 hrs. ago</p>
                </div>
              </a>
            </li>
            <li>
              <hr class="dropdown-divider"/>
            </li>
            <li class="message-item">
              <a href="#">
                <img src="assets/img/messages-2.jpg" alt="" class="rounded-circle"/>
                <div>
                  <h4>Anna Nelson</h4>
                  <p>Velit asperiores et ducimus soluta repudiandae labore officia est ut...</p>
                  <p>6 hrs. ago</p>
                </div>
              </a>
            </li>
            <li>
              <hr class="dropdown-divider"/>
            </li>
            <li class="message-item">
              <a href="#">
                <img src="assets/img/messages-3.jpg" alt="" class="rounded-circle"/>
                <div>
                  <h4>David Muldon</h4>
                  <p>Velit asperiores et ducimus soluta repudiandae labore officia est ut...</p>
                  <p>8 hrs. ago</p>
                </div>
              </a>
            </li>
            <li>
              <hr class="dropdown-divider"/>
            </li>
            <li class="dropdown-footer">
              <a href="#">Show all messages</a>
            </li>
          </ul>
        </li>
        <li class="nav-item dropdown pe-3">
          <a class="nav-link nav-profile d-flex align-items-center pe-0" href="#" data-bs-toggle="dropdown">
            <img src={'../assets/img/profile-img.jpg'} alt="Profile" class="rounded-circle"/>
            <span class="d-none d-md-block dropdown-toggle ps-2">K. Anderson</span>
          </a>
          <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
            <li class="dropdown-header">
              <h6>Kevin Anderson</h6>
              <span>Web Designer</span>
            </li>
            <li>
              <hr class="dropdown-divider"/>
            </li>
            <li>
              <a class="dropdown-item d-flex align-items-center" href="users-profile.html">
                <Person/>
                <span>My Profile</span>
              </a>
            </li>
            <li>
              <hr class="dropdown-divider"/>
            </li>
            <li>
              <a class="dropdown-item d-flex align-items-center" href="users-profile.html">
               
                <Gear/>
                <span>Account Settings</span>
              </a>
            </li>
            <li>
              <hr class="dropdown-divider"/>
            </li>
            <li>
              <a class="dropdown-item d-flex align-items-center" href="pages-faq.html">
                
                <QuestionCircle/>
                <span>Need Help?</span>
              </a>
            </li>
            <li>
              <hr class="dropdown-divider"/>
            </li>
            <li>
              <a class="dropdown-item d-flex align-items-center" onClick={logOut}>
                <i class="bi bi-box-arrow-right"></i>
                <BoxArrowRight/>
                <span>Sign Out</span>
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </header>
  
};

export default Header;