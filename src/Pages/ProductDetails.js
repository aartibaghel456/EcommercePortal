import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

const ProductDeatils = ()=>{
    const [getProduct, setProduct] = useState([]);
    const [getCategoryProductList, setCategoryProductList] = useState([]);

    const params = useParams();
    const productId = params.id;


    useEffect(() => {
        let mounted = true;
        getProductDetails().then(function (response) {
          // handle success
          if(mounted) {
            setProduct(response.data.data); 
            getProductsFromSpecCategory(response.data.data.category_id).then(function(response){
                console.log(response.data.data);
                setCategoryProductList(response.data.data)
                
            }) 
            console.log(response.data.data);    
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
      const getProductDetails = ()=>{
        return axios.get('http://localhost:5000/product/'+productId);
         
       }
       const getProductsFromSpecCategory =(catId)=>{
        return axios.get('http://localhost:5000/categoryproduct/'+catId);
       }
     return (
        <>
        <div class="breadcrumb-area">
                <div class="container">
                    <div class="breadcrumb-content">
                        <ul>
                            <li><a href="index.html">Home</a></li>
                            <li class="active">Single Product</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="content-wraper">
                <div class="container">
                    <div class="row single-product-area">
                        <div class="col-lg-5 col-md-6">
                          
                            <div class="product-details-left">
                                <div class="product-details-images slider-navigation-1">
                                    <div class="lg-image">
                                        <a class="popup-img venobox vbox-item" href="/assets/image/product/large-size/1.jpg" data-gall="myGallery">
                                            <img src={`/assets/image/upload/${getProduct.image_url}`} alt="product image" />
                                        </a>
                                    </div>
                               
                                </div>
                                {/* <div class="product-details-thumbs slider-thumbs-1">                                        
                                    <div class="sm-image"><img src="/assets/image/product/small-size/1.jpg" alt="product image thumb"/></div>
                                    <div class="sm-image"><img src="/assets/image/product/small-size/2.jpg" alt="product image thumb"/></div>
                                    <div class="sm-image"><img src="/assets/image/product/small-size/3.jpg" alt="product image thumb"/></div>
                                    <div class="sm-image"><img src="/assets/image/product/small-size/4.jpg" alt="product image thumb"/></div>
                                    <div class="sm-image"><img src="/assets/image/product/small-size/5.jpg" alt="product image thumb"/></div>
                                    <div class="sm-image"><img src="/assets/image/product/small-size/6.jpg" alt="product image thumb"/></div>
                                </div> */}
                            </div>
                           
                        </div>

                        <div class="col-lg-7 col-md-6">
                            <div class="product-details-view-content pt-60">
                                <div class="product-info">
                                    <h2>{getProduct.title}</h2>
                                    <span class="product-details-ref">Reference: demo_15</span>
                                    <div class="rating-box pt-20">
                                        <ul class="rating rating-with-review-item">
                                            <li><i class="fa fa-star-o"></i></li>
                                            <li><i class="fa fa-star-o"></i></li>
                                            <li><i class="fa fa-star-o"></i></li>
                                            <li class="no-star"><i class="fa fa-star-o"></i></li>
                                            <li class="no-star"><i class="fa fa-star-o"></i></li>
                                            <li class="review-item"><a href="#">Read Review</a></li>
                                            <li class="review-item"><a href="#">Write Review</a></li>
                                        </ul>
                                    </div>
                                    <div class="price-box pt-20">
                                        <span class="new-price new-price-2">{getProduct.symbol}{getProduct.price}</span>
                                    </div>
                                    <div class="product-desc">
                                        <p>
                                            <span>{getProduct.description}</span>
                                        </p>
                                    </div>
                                    <div class="product-variants">
                                        <div class="produt-variants-size">
                                            <label>Dimension</label>
                                            <select class="nice-select">
                                                <option value="1" title="S" selected="selected">40x60cm</option>
                                                <option value="2" title="M">60x90cm</option>
                                                <option value="3" title="L">80x120cm</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="single-add-to-cart">
                                        <form action="#" class="cart-quantity">
                                            <div class="quantity">
                                                <label>Quantity</label>
                                                <div class="cart-plus-minus">
                                                    <input class="cart-plus-minus-box" value="1" type="text" />
                                                    <div class="dec qtybutton"><i class="fa fa-angle-down"></i></div>
                                                    <div class="inc qtybutton"><i class="fa fa-angle-up"></i></div>
                                                </div>
                                            </div>
                                            <button class="add-to-cart" type="submit">Add to cart</button>
                                        </form>
                                    </div>
                                    <div class="product-additional-info pt-25">
                                        <a class="wishlist-btn" href="wishlist.html"><i class="fa fa-heart-o"></i>Add to wishlist</a>
                                        <div class="product-social-sharing pt-25">
                                            <ul>
                                                <li class="facebook"><a href="#"><i class="fa fa-facebook"></i>Facebook</a></li>
                                                <li class="twitter"><a href="#"><i class="fa fa-twitter"></i>Twitter</a></li>
                                                <li class="google-plus"><a href="#"><i class="fa fa-google-plus"></i>Google +</a></li>
                                                <li class="instagram"><a href="#"><i class="fa fa-instagram"></i>Instagram</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="block-reassurance">
                                        <ul>
                                            <li>
                                                <div class="reassurance-item">
                                                    <div class="reassurance-icon">
                                                        <i class="fa fa-check-square-o"></i>
                                                    </div>
                                                    <p>Security policy (edit with Customer reassurance module)</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="reassurance-item">
                                                    <div class="reassurance-icon">
                                                        <i class="fa fa-truck"></i>
                                                    </div>
                                                    <p>Delivery policy (edit with Customer reassurance module)</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="reassurance-item">
                                                    <div class="reassurance-icon">
                                                        <i class="fa fa-exchange"></i>
                                                    </div>
                                                    <p> Return policy (edit with Customer reassurance module)</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>

            <div class="container">
            <div class="product-area pt-35">
            <Tabs>
       <div class="row">
        <div class="col-lg-12">
<TabList>
        <div class="container">
        <div class="row">
        <div class="col-lg-12">
        <div class="li-product-tab">
        <ul class="nav li-product-menu">
        <Tab><li><a class="active" data-toggle="tab" href="#li-new-product"><span>Description</span></a></li></Tab>
        <Tab><li><a class="active" data-toggle="tab" href="#li-new-product"><span>Product Details</span></a></li></Tab>
        <Tab><li><a class="active" data-toggle="tab" href="#li-new-product"><span>Reviews</span></a></li></Tab>
</ul>
</div>
</div>
</div>
</div>


   
</TabList>
</div>
</div>
<TabPanel>
{getProduct.description}
</TabPanel>
<TabPanel>
    tab 2
</TabPanel>
<TabPanel>
    tab 3
</TabPanel>
</Tabs>
            </div>
            </div>
          
            <section class="product-area li-laptop-product pt-30 pb-50">
                <div class="container">
                    <div class="row">
              
                        <div class="col-lg-12">
                            <div class="li-section-title">
                                <h2>
                                    <span>15 other products in the same category:</span>
                                </h2>
                            </div>
                            <div class="row">
                            {getCategoryProductList.map((item)=>{
        return(          
   <div class="col-lg-2">
      <div class="single-product-wrap">
         <div class="product-image"><a href={`/products-details/${item.id}`}><img src={`/assets/image/upload/${item.image_url}`} alt="Li's Product Image"/></a><span class="sticker">New</span></div>
         <div class="product_desc">
            <div class="product_desc_info">
               <div class="product-review">
                  <h5 class="manufacturer"><a href="shop-left-sidebar.html">Graphic Corner</a></h5>
                  <div class="rating-box">
                     <ul class="rating">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="svg-inline--fa fa-star " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                           <path fill="currentColor" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path>
                        </svg>
                        <li><i class="fa fa-star-o"></i></li>
                        <li><i class="fa fa-star-o"></i></li>
                        <li class="no-star"><i class="fa fa-star-o"></i></li>
                        <li class="no-star"><i class="fa fa-star-o"></i></li>
                     </ul>
                  </div>
               </div>
               <h4><a class="product_name" href={`/products-details/${item.id}`}>{item.title}</a></h4>
               <div class="price-box"><span class="new-price">{item.symbol}{item.price}</span></div>
            </div>
            <div class="add-actions">
               <ul class="add-actions-link">
                  <li class="add-cart active"><a href="#">Add to cart</a></li>
                  <li><a class="links-details" href="wishlist.html"><i class="fa fa-heart-o"></i></a></li>
                  <li><a href="#" title="quick view" class="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i class="fa fa-eye"></i></a></li>
               </ul>
            </div>
         </div>
      </div>
   </div>
   )})}
</div>
                        </div>
                      
                    </div>
                </div>
            </section>
        </>
     )
}
export default ProductDeatils;