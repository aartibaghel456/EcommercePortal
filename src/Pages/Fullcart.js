import { useState } from "react";

const Fullcart =() =>{
    const cartProducts =JSON.parse(localStorage.getItem('cartProducts'));
    console.log(cartProducts);
    const [getTotal, setTotal] = useState(0);
    const [getSubTotal, setSubTotal] = useState(0);
    let total = cartProducts.reduce((currentvalue,item)=>Number(item.price)+currentvalue,0);
    
    return(
        <>
        <div class="breadcrumb-area">
                <div class="container">
                    <div class="breadcrumb-content">
                        <ul>
                            <li><a href="index.html">Home</a></li>
                            <li class="active">Shopping Cart</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="Shopping-cart-area pt-60 pb-60">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <form action="#">
                                <div class="table-content table-responsive">
                                    <table class="table">
                                        <thead>
                                                                                    <tr>
                                                <th class="li-product-remove">remove</th>
                                                <th class="li-product-thumbnail">images</th>
                                                <th class="cart-product-name">Product</th>
                                                <th class="li-product-price">Unit Price</th>
                                                <th class="li-product-quantity">Quantity</th>
                                                <th class="li-product-subtotal">Total</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        {cartProducts.map((item) => {
                                    return <tr>
                                                <td class="li-product-remove"><a href="#"><i class="fa fa-times"></i></a></td>
                                                <td class="li-product-thumbnail"><a href="#"><img src={`assets/image/upload/${item.image_url}`} alt="Li's Product Image"/></a></td>
                                                <td class="li-product-name"><a href="#">{item.title}</a></td>
                                                <td class="li-product-price"><span class="amount">{item.symbol}{item.price}</span></td>
                                                <td class="quantity">
                                                    <label>Quantity</label>
                                                    <div class="cart-plus-minus">
                                                        <input class="cart-plus-minus-box" value="1" type="text"/>
                                                        <div class="dec qtybutton"><i class="fa fa-angle-down"></i></div>
                                                        <div class="inc qtybutton"><i class="fa fa-angle-up"></i></div>
                                                    </div>
                                                </td>
                                                <td class="product-subtotal"><span class="amount">{item.symbol}{item.price}</span></td>
                                            </tr>})}
                                            
                                        </tbody>
                                    </table>
                                </div>
                                <div class="row">
                                    <div class="col-12">
                                        <div class="coupon-all">
                                            <div class="coupon">
                                                <input id="coupon_code" class="input-text" name="coupon_code" value="" placeholder="Coupon code" type="text"/>
                                                <input class="button" name="apply_coupon" value="Apply coupon" type="submit"/>
                                            </div>
                                            <div class="coupon2">
                                                <input class="button" name="update_cart" value="Update cart" type="submit"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-7 ml-auto"></div>
                                    <div class="col-md-5 ml-auto">
                                        <div class="cart-page-total">
                                            <h2>Cart totals</h2>
                                            <ul>
                                                <li>Subtotal <span>Rs.{total}</span></li>
                                                <li>Total <span>Rs.{total}</span></li>
                                            </ul>
                                            <a href="/check-out">Proceed to checkout</a>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Fullcart;