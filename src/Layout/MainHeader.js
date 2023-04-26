import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faCoffee, faHeartCircleBolt, faSearch } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from "react-router";
import { useEffect, useState } from 'react';
import axios from 'axios';
const MainHeader = () => {
  const navigate = useNavigate();
  const [getShowmincart, setShowmincart] = useState(false);
  const [getCartProducts, setCartProducts] = useState(JSON.parse(localStorage.getItem('cartProducts')));
  const [getCategories, setCategories] = useState([]);
  const logOut = (e) => {
    localStorage.clear();
    navigate("/admin");
  };
  useEffect(()=>{
    let mounted = true;
    
    document.addEventListener("updateCart",(data)=>{    
        updateCart(data.detail);
        })
        return () => {
            document.removeEventListener("updateCart",(data)=>{});
        };
  },[])
   const  updateCart = (product)=>{
        let cartProducts = [];
        cartProducts.push(product)
       let getProducts = JSON.parse(localStorage.getItem('cartProducts'));
       if (getProducts && getProducts.length > 0) {
           getProducts.push(product);
           localStorage.setItem('cartProducts', JSON.stringify(getProducts))
       }
       else {
           localStorage.setItem('cartProducts', JSON.stringify(cartProducts))
       }
       setCartProducts(JSON.parse(localStorage.getItem('cartProducts')));
       console.log(getCartProducts);
    }
  let total = 0;
    if( getCartProducts && getCartProducts.length > 0){
    total = getCartProducts.reduce((currentvalue,item)=>Number(item.price)+currentvalue,0);
    }
  
  const removeproduct =(item) =>{   
    let index = getCartProducts.findIndex((pitem)=>pitem.id==item.id);
    getCartProducts.splice(index,1);
    localStorage.setItem("cartProducts",JSON.stringify(getCartProducts))
  }
 
  useEffect(() => {
    let mounted = true;
   
    getCategoriesList().then(function (response) {
      // handle success
      if(mounted) {
        setCategories(response.data.data);
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
  const getCategoriesList = ()=>{
    return axios.get('http://localhost:5000/categories');
     
   }
    

  const carthideandshow = () =>{
    // toggle minicart
    setShowmincart(getShowmincart => !getShowmincart);
  }
    return <>
    
    <header>
                <div class="header-top">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-3 col-md-4">
                                <div class="header-top-left">
                                    <ul class="phone-wrap">
                                        <li><span>Telephone Enquiry:</span><a href="#">(+123) 123 321 345</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-9 col-md-8">
                                <div class="header-top-right">
                                    <ul class="ht-menu">                                   
                                        <li>
                                            <div class="ht-setting-trigger"><span>Setting</span></div>
                                            <div class="setting ht-setting">
                                                <ul class="ht-setting-list">
                                                    <li><a href="login-register.html">My Account</a></li>
                                                    <li><a href="checkout.html">Checkout</a></li>
                                                    <li><a href="login-register.html">Sign In</a></li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li>
                                            <span class="currency-selector-wrapper">Currency :</span>
                                            <div class="ht-currency-trigger"><span>USD $</span></div>
                                            <div class="currency ht-currency">
                                                <ul class="ht-setting-list">
                                                    <li><a href="#">EUR €</a></li>
                                                    <li class="active"><a href="#">USD $</a></li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li>
                                            <span class="language-selector-wrapper">Language :</span>
                                            <div class="ht-language-trigger"><span>English</span></div>
                                            <div class="language ht-language">
                                                <ul class="ht-setting-list">
                                                    <li class="active"><a href="#"><img src="/assets/image/menu/flag-icon/1.jpg" alt=""/>English</a></li>
                                                    <li><a href="#"><img src="/assets/image/menu/flag-icon/2.jpg" alt=""/>Français</a></li>
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="header-middle pl-sm-0 pr-sm-0 pl-xs-0 pr-xs-0">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-2">
                                <div class="logo pb-sm-30 pb-xs-30">
                                    <a href={window.location.origin}>
                                        <img src="/assets/image/menu/logo/1.jpg" alt=""/>
                                        
                                    
                                    </a>
                                </div>
                            </div>
                            <div class="col-lg-10 ml-sm-15 ml-xs-15">
                           <form action="#" class="hm-searchbox">
                           
                                    <select class="nice-select select-search-category">
                                    {
                      getCategories.map((item)=>{
                        return(
                                        <option value={item.id}>{item.category_name}</option>)
                        })
                    }  

                                    </select>
                                    <input type="text" placeholder="Enter your search key ..."/>
                                    <button class="li-btn" type="submit">
                                    <FontAwesomeIcon icon={faSearch} />
                                        </button>
                                </form>
                      
                    
                                <div class="header-middle-right">
                                    <ul class="hm-menu">
                                        <li class="hm-wishlist">
                                            <a href="wishlist.html">
                                                <span class="cart-item-count wishlist-item-count">0</span>
                                             
                                                <FontAwesomeIcon icon={faHeartCircleBolt} />
                                            </a>
                                        </li>
                                        <li class="hm-minicart" onClick={carthideandshow}>
                                            <div class="hm-minicart-trigger">
                                                <span class="item-icon"></span>
                                                <span class="item-text">RS.{total}
                                                    <span class="cart-item-count">{getCartProducts && getCartProducts.length> 0 ?getCartProducts.length:0}</span>
                                                </span>
                                            </div>
                                            <span></span>
                                            <div class="minicart" style={{display: getShowmincart?'block':'none' }}>
                                                <ul class="minicart-product-list">
                                                    {getCartProducts && getCartProducts.slice(0,5).map((item) => {
                                    return<li>
                                                        <a href={`/products-details/${item.id}`} class="minicart-product-image">
                                                            <img src={`assets/image/upload/${item.image_url}`} alt="cart products"/>
                                                        </a>
                                                        <div class="minicart-product-details">
                                                            <h6><a href={`/products-details/${item.id}`}>{item.title}</a></h6>
                                                            <span>{item.symbol}{item.price}</span>
                                                        </div>
                                                        <button class="close" onClick={()=>removeproduct(item)} title="Remove">
                                                            <i class="fa fa-close"></i>
                                                        </button>
                                                    </li>})}
                                                    
                                                </ul>
                                                <p class="minicart-total">SUBTOTAL: <span>RS.{total}</span></p>
                                                <div class="minicart-button">
                                                    <a href={'/full-cart'} class="li-button li-button-fullwidth li-button-dark">
                                                        <span>View Full Cart</span>
                                                    </a>
                                                    <a href={'check-out'} class="li-button li-button-fullwidth">
                                                        <span>Checkout</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                </header>
    </>
  
};

export default MainHeader;