import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios'
import 'react-tabs/style/react-tabs.css';
const Home = (props) => {
    const [getProducts, setProducts] = useState([]);
    const [getArrivalProducts, setArrivalProducts] = useState([]);
    const [getBestsellerProducts, setBestsellerProducts] = useState([]);
    const [getFeaturedProducts, setFeaturedProducts] = useState([]);
    const [getLaptopProducts, setLaptopProducts] = useState([]);
    const [getTvaudioProducts, setTvaudioProducts] = useState([]);
    const [getTrenddingProducts, setTrenddingProducts] = useState([]);
    const [getBestsellersProducts, setBestsellersProducts] = useState([]);
    useEffect(() => {
        let mounted = true;
        getProductsList().then(function (response) {
            // handle success
            if (mounted) {
                setProducts(response.data.data);
                let newarrivalproducts = response.data.data.filter((item) => item.category_id == 9);
                let bestsellerproducts = response.data.data.filter((item) => item.category_id == 13);
                let featuredproducts = response.data.data.filter((item) => item.category_id == 14);
                let laptopproducts = response.data.data.filter((item) => item.category_id == 12);
                let tvaudioproducts = response.data.data.filter((item) => item.category_id == 15);
                let trenddingproducts = response.data.data.filter((item) => item.category_id == 16);
                let bestsellersproducts = response.data.data.filter((item) => item.category_id == 17);
                setArrivalProducts(newarrivalproducts);
                setBestsellerProducts(bestsellerproducts)
                setFeaturedProducts(featuredproducts)
                setLaptopProducts(laptopproducts)
                setTvaudioProducts(tvaudioproducts)
                setTrenddingProducts(trenddingproducts)
                setBestsellersProducts(bestsellersproducts)
                console.log(newarrivalproducts);
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
    }, [])
    const getProductsList = () => {
        return axios.get('http://localhost:5000/products');

    }
    const addTocart = (product) => {
        const event = new CustomEvent("updateCart", { detail: product });
        document.dispatchEvent(event);
    }
    return (
        <>
            <div class="slider-with-banner">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8 col-md-8">
                            <div class="slider-area">
                                <div class="slider-active">
                                    <div class="single-slide">
                                        <img class="img-responsive" src="/assets/image/banner/banner.png" />
                                    </div>

                                </div>

                            </div>
                        </div>
                        <div class="col-lg-4 col-md-4 text-center pt-xs-30">
                            <div class="li-banner">
                                <a href="#">
                                    <img src="assets/image/banner/1_1.jpg" alt="" />
                                </a>
                            </div>
                            <div class="li-banner mt-15 mt-sm-30 mt-xs-30">
                                <a href="#">
                                    <img src="assets/image/banner/1_2.jpg" alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container">
                <Tabs>
                    <div class="row">
                        <div class="col-lg-12">
                            <TabList>
                                <div class="container">
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div class="li-product-tab">
                                                <ul class="nav li-product-menu">
                                                    <Tab><li><a class="active" data-toggle="tab" href="#li-new-product"><span>New Arrival</span></a></li></Tab>
                                                    <Tab><li><a class="active" data-toggle="tab" href="#li-new-product"><span>Bestseller</span></a></li></Tab>
                                                    <Tab><li><a class="active" data-toggle="tab" href="#li-new-product"><span>Featured Products</span></a></li></Tab>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>



                            </TabList>
                        </div>
                    </div>


                    <div class="container">
                        <TabPanel>
                            <div class="row">
                                {getArrivalProducts.map((item) => {
                                    return (<div class="col-lg-2">
                                        <div class="single-product-wrap">
                                            <div class="product-image">
                                                <a href={`/products-details/${item.id}`}>
                                                    <img src={`assets/image/upload/${item.image_url}`} alt="Li's Product Image" />
                                                </a>
                                                <span class="sticker">New</span>
                                            </div>
                                            <div class="product_desc">
                                                <div class="product_desc_info">
                                                    <div class="product-review">
                                                        <h5 class="manufacturer">
                                                            <a href="shop-left-sidebar.html">Graphic Corner</a>
                                                        </h5>
                                                        <div class="rating-box">
                                                            <ul class="rating">
                                                                <FontAwesomeIcon icon={faStar} />
                                                                <li><i class="fa fa-star-o"></i></li>
                                                                <li><i class="fa fa-star-o"></i></li>
                                                                <li class="no-star"><i class="fa fa-star-o"></i></li>
                                                                <li class="no-star"><i class="fa fa-star-o"></i></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <h4><a class="product_name" href="single-product.html">{item.title}</a></h4>
                                                    <div class="price-box">
                                                        <span class="new-price">{item.symbol}{item.price}</span>
                                                    </div>
                                                </div>
                                                <div class="add-actions">
                                                    <ul class="add-actions-link">
                                                        <li class="add-cart active"><a onClick={() => addTocart(item)}>Add to cart</a></li>
                                                        <li><a class="links-details" href="wishlist.html"><i class="fa fa-heart-o"></i></a></li>
                                                        <li><a href="#" title="quick view" class="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i class="fa fa-eye"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    )
                                })}


                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div class="row">
                                {getBestsellerProducts.map((item) => {
                                    return (<div class="col-lg-2">
                                        <div class="single-product-wrap">
                                            <div class="product-image">
                                                <a href={`/products-details/${item.id}`}>
                                                    <img src={`assets/image/upload/${item.image_url}`} alt="Li's Product Image" />
                                                </a>
                                                <span class="sticker">New</span>
                                            </div>
                                            <div class="product_desc">
                                                <div class="product_desc_info">
                                                    <div class="product-review">
                                                        <h5 class="manufacturer">
                                                            <a href="shop-left-sidebar.html">Graphic Corner</a>
                                                        </h5>
                                                        <div class="rating-box">
                                                            <ul class="rating">
                                                                <FontAwesomeIcon icon={faStar} />
                                                                <li><i class="fa fa-star-o"></i></li>
                                                                <li><i class="fa fa-star-o"></i></li>
                                                                <li class="no-star"><i class="fa fa-star-o"></i></li>
                                                                <li class="no-star"><i class="fa fa-star-o"></i></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <h4><a class="product_name" href="single-product.html">{item.title}</a></h4>
                                                    <div class="price-box">
                                                        <span class="new-price">{item.symbol}{item.price}</span>
                                                    </div>
                                                </div>
                                                <div class="add-actions">
                                                    <ul class="add-actions-link">
                                                        <li class="add-cart active"><a href="#" onClick={() => addTocart(item)}>Add to cart</a></li>
                                                        <li><a class="links-details" href="wishlist.html"><i class="fa fa-heart-o"></i></a></li>
                                                        <li><a href="#" title="quick view" class="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i class="fa fa-eye"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    )
                                })}

                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div class="row">
                                {getFeaturedProducts.map((item) => {
                                    return (<div class="col-lg-2">
                                        <div class="single-product-wrap">
                                            <div class="product-image">
                                                <a href={`/products-details/${item.id}`}>
                                                    <img src={`assets/image/upload/${item.image_url}`} alt="Li's Product Image" />
                                                </a>
                                                <span class="sticker">New</span>
                                            </div>
                                            <div class="product_desc">
                                                <div class="product_desc_info">
                                                    <div class="product-review">
                                                        <h5 class="manufacturer">
                                                            <a href="shop-left-sidebar.html">Graphic Corner</a>
                                                        </h5>
                                                        <div class="rating-box">
                                                            <ul class="rating">
                                                                <FontAwesomeIcon icon={faStar} />
                                                                <li><i class="fa fa-star-o"></i></li>
                                                                <li><i class="fa fa-star-o"></i></li>
                                                                <li class="no-star"><i class="fa fa-star-o"></i></li>
                                                                <li class="no-star"><i class="fa fa-star-o"></i></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <h4><a class="product_name" href="single-product.html">{item.title}</a></h4>
                                                    <div class="price-box">
                                                        <span class="new-price">{item.symbol}{item.price}</span>
                                                    </div>
                                                </div>
                                                <div class="add-actions">
                                                    <ul class="add-actions-link">
                                                        <li class="add-cart active"><a href="#" onClick={() => addTocart(item)}>Add to cart</a></li>
                                                        <li><a class="links-details" href="wishlist.html"><i class="fa fa-heart-o"></i></a></li>
                                                        <li><a href="#" title="quick view" class="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i class="fa fa-eye"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    )
                                })}



                            </div>
                        </TabPanel>
                    </div>
                </Tabs>
            </div>
            <br />
            <div class="li-static-banner">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4 col-md-4 text-center">
                            <div class="single-banner">
                                <a href="#">
                                    <img src="assets/image/banner/1_3.jpg" alt="Li's Static Banner" />
                                </a>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-4 text-center pt-xs-30">
                            <div class="single-banner">
                                <a href="#">
                                    <img src="assets/image/banner/1_4.jpg" alt="Li's Static Banner" />
                                </a>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-4 text-center pt-xs-30">
                            <div class="single-banner">
                                <a href="#">
                                    <img src="assets/image/banner/1_5.jpg" alt="Li's Static Banner" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section class="product-area li-laptop-product pt-60 pb-45">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="li-section-title laptop-section">
                                <h2>
                                    <span>Laptop</span>
                                </h2>

                                <ul class="li-sub-category-list">
                                    <li class="active"><a href={`/category-product/18`}>Prime Video</a></li>
                                    <li><a href={`/category-product/19`}>Computers</a></li>
                                    <li><a href={`/category-product/20`}>Electronics</a></li>
                                </ul>
                            </div>
                            <div class="row">
                                {getLaptopProducts.map((item) => {
                                    return (<div class="col-lg-2">
                                        <div class="single-product-wrap">
                                            <div class="product-image">
                                                <a href={`/products-details/${item.id}`}>
                                                    <img src={`assets/image/upload/${item.image_url}`} alt="Li's Product Image" />
                                                </a>
                                                <span class="sticker">New</span>
                                            </div>
                                            <div class="product_desc">
                                                <div class="product_desc_info">
                                                    <div class="product-review">
                                                        <h5 class="manufacturer">
                                                            <a href="shop-left-sidebar.html">Graphic Corner</a>
                                                        </h5>
                                                        <div class="rating-box">
                                                            <ul class="rating">
                                                                <FontAwesomeIcon icon={faStar} />
                                                                <li><i class="fa fa-star-o"></i></li>
                                                                <li><i class="fa fa-star-o"></i></li>
                                                                <li class="no-star"><i class="fa fa-star-o"></i></li>
                                                                <li class="no-star"><i class="fa fa-star-o"></i></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <h4><a class="product_name" href="single-product.html">{item.title}</a></h4>
                                                    <div class="price-box">
                                                        <span class="new-price">{item.symbol}{item.price}</span>
                                                    </div>
                                                </div>
                                                <div class="add-actions">
                                                    <ul class="add-actions-link">
                                                        <li class="add-cart active"><a href="#" onClick={() => addTocart(item)}>Add to cart</a></li>
                                                        <li><a class="links-details" href="wishlist.html"><i class="fa fa-heart-o"></i></a></li>
                                                        <li><a href="#" title="quick view" class="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i class="fa fa-eye"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    )
                                })}


                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section class="product-area li-laptop-product li-tv-audio-product pb-45">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="li-section-title">
                                <h2>
                                    <span>TV & Audio</span>
                                </h2>
                                <ul class="li-sub-category-list">
                                    <li class="active"><a href={`/category-product/21`}>Chamcham</a></li>
                                    <li><a href={`/category-product/22`}>Sanai</a></li>
                                    <li><a href={`/category-product/23`}>Meito</a></li>
                                </ul>
                            </div>
                            <div class="row">
                                {getTvaudioProducts.map((item) => {
                                    return (<div class="col-lg-2">
                                        <div class="single-product-wrap">
                                            <div class="product-image">
                                                <a href={`/products-details/${item.id}`}>
                                                    <img src={`assets/image/upload/${item.image_url}`} alt="Li's Product Image" />
                                                </a>
                                                <span class="sticker">New</span>
                                            </div>
                                            <div class="product_desc">
                                                <div class="product_desc_info">
                                                    <div class="product-review">
                                                        <h5 class="manufacturer">
                                                            <a href="shop-left-sidebar.html">Graphic Corner</a>
                                                        </h5>
                                                        <div class="rating-box">
                                                            <ul class="rating">
                                                                <FontAwesomeIcon icon={faStar} />
                                                                <li><i class="fa fa-star-o"></i></li>
                                                                <li><i class="fa fa-star-o"></i></li>
                                                                <li class="no-star"><i class="fa fa-star-o"></i></li>
                                                                <li class="no-star"><i class="fa fa-star-o"></i></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <h4><a class="product_name" href="single-product.html">{item.title}</a></h4>
                                                    <div class="price-box">
                                                        <span class="new-price">{item.symbol}{item.price}</span>
                                                    </div>
                                                </div>
                                                <div class="add-actions">
                                                    <ul class="add-actions-link">
                                                        <li class="add-cart active"><a href="#" onClick={() => addTocart(item)}>Add to cart</a></li>
                                                        <li><a class="links-details" href="wishlist.html"><i class="fa fa-heart-o"></i></a></li>
                                                        <li><a href="#" title="quick view" class="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i class="fa fa-eye"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    )
                                })}


                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-md-12">
                        <div class="slider-area">
                            <div class="slider-active">
                                <div class="single-slide">
                                    <img class="img-responsive" src="/assets/image/banner/banner1.png" />
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <section class="product-area li-trending-product pt-60 pb-45">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="li-product-tab li-trending-product-tab">
                                <h2>
                                    <span>Trendding Products</span>
                                </h2>
                                <ul class="nav li-product-menu li-trending-product-menu">
                                    <li><a class="active" data-toggle="tab" href={`/category-product/22`}><span>Sanai</span></a></li>
                                    <li><a data-toggle="tab" href={`/category-product/24`}><span>Camera Accessories</span></a></li>
                                    <li><a data-toggle="tab" href={`/category-product/25`}><span>XailStation</span></a></li>
                                </ul>
                            </div>
                            <div class="tab-content li-tab-content li-trending-product-content">
                                <div id="home1" class="tab-pane show fade in active">
                                    <div class="row">
                                        {getTrenddingProducts.map((item) => {
                                            return (<div class="col-lg-2">
                                                <div class="single-product-wrap">
                                                    <div class="product-image">
                                                        <a href={`/products-details/${item.id}`}>
                                                            <img src={`assets/image/upload/${item.image_url}`} alt="Li's Product Image" />
                                                        </a>
                                                        <span class="sticker">New</span>
                                                    </div>
                                                    <div class="product_desc">
                                                        <div class="product_desc_info">
                                                            <div class="product-review">
                                                                <h5 class="manufacturer">
                                                                    <a href="shop-left-sidebar.html">Graphic Corner</a>
                                                                </h5>
                                                                <div class="rating-box">
                                                                    <ul class="rating">
                                                                        <FontAwesomeIcon icon={faStar} />
                                                                        <li><i class="fa fa-star-o"></i></li>
                                                                        <li><i class="fa fa-star-o"></i></li>
                                                                        <li class="no-star"><i class="fa fa-star-o"></i></li>
                                                                        <li class="no-star"><i class="fa fa-star-o"></i></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <h4><a class="product_name" href="single-product.html">{item.title}</a></h4>
                                                            <div class="price-box">
                                                                <span class="new-price">{item.symbol}{item.price}</span>
                                                            </div>
                                                        </div>
                                                        <div class="add-actions">
                                                            <ul class="add-actions-link">
                                                                <li class="add-cart active"><a href="#" onClick={() => addTocart(item)}>Add to cart</a></li>
                                                                <li><a class="links-details" href="wishlist.html"><i class="fa fa-heart-o"></i></a></li>
                                                                <li><a href="#" title="quick view" class="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i class="fa fa-eye"></i></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            )
                                        })}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="product-area li-laptop-product li-trendding-products best-sellers pb-45">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="li-section-title">
                                <h2>
                                    <span>Bestsellers</span>
                                </h2>
                            </div>
                            <div class="row">
                                {getBestsellersProducts.map((item) => {
                                    return (<div class="col-lg-2">
                                        <div class="single-product-wrap">
                                            <div class="product-image">
                                                <a href={`/products-details/${item.id}`}>
                                                    <img src={`assets/image/upload/${item.image_url}`} alt="Li's Product Image" />
                                                </a>
                                                <span class="sticker">New</span>
                                            </div>
                                            <div class="product_desc">
                                                <div class="product_desc_info">
                                                    <div class="product-review">
                                                        <h5 class="manufacturer">
                                                            <a href="shop-left-sidebar.html">Graphic Corner</a>
                                                        </h5>
                                                        <div class="rating-box">
                                                            <ul class="rating">
                                                                <FontAwesomeIcon icon={faStar} />
                                                                <li><i class="fa fa-star-o"></i></li>
                                                                <li><i class="fa fa-star-o"></i></li>
                                                                <li class="no-star"><i class="fa fa-star-o"></i></li>
                                                                <li class="no-star"><i class="fa fa-star-o"></i></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <h4><a class="product_name" href="single-product.html">{item.title}</a></h4>
                                                    <div class="price-box">
                                                        <span class="new-price">{item.symbol}{item.price}</span>
                                                    </div>
                                                </div>
                                                <div class="add-actions">
                                                    <ul class="add-actions-link">
                                                        <li class="add-cart active"><a href="#" onClick={() => addTocart(item)}>Add to cart</a></li>
                                                        <li><a class="links-details" href="wishlist.html"><i class="fa fa-heart-o"></i></a></li>
                                                        <li><a href="#" title="quick view" class="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i class="fa fa-eye"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    )
                                })}

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home;