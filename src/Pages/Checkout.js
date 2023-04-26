import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const Checkout =() =>{
    const { Checkout, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (event) => {

    }
    const cartProducts =JSON.parse(localStorage.getItem('cartProducts'));
    let total = cartProducts && cartProducts.reduce((currentvalue,item)=>Number(item.price)+currentvalue,0);
    const[getPaymentMethods,setPaymentMethods] = useState([]);
    const[getSelectPaymentType,setSelectPaymentType] = useState('5');
    const[getBillingAddress,setBillingAddress] = useState([]);
    const[getShippingAddress,setShippingAddress] = useState([]);
    const[getOrderNotes,setOrderNotes] = useState('');
    const[getShipBox,setShipBox] = useState([]);
    const userInfo =JSON.parse(localStorage.getItem('userInfo'));
    

    useEffect(() => {
        let mounted = true;
        getPaymentMethodsList().then(function (response) {
          // handle success
          if(mounted) {
            setPaymentMethods(response.data.data);     
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

      const placeorder = () =>{
        axios.post('http://localhost:5000/createorder', 
        {
            "order_number":new Date().getTime(),
            "customer_id":userInfo.id>0?userInfo.id:0,
            "subtotal":total,
            "total":total,
            "status":"pending",
            "payment_type":getSelectPaymentType,
            "order_notes":getOrderNotes,
            "billing_info":getBillingAddress,
            "shipping_info":getShipBox?getBillingAddress:getShippingAddress,
            "product_info":cartProducts
        }).then((res)=>{
        console.log(res);
        localStorage.removeItem("cartProducts");
      })
    
    };


      const getPaymentMethodsList = ()=>{
        return axios.get('http://localhost:5000/paymentmethods');
         
       }

       const onChange = (event) => {
        setBillingAddress({...getBillingAddress,[event.target.name]: event.target.value})
      }

      const onChangeShipping = (event) => {
        setShippingAddress({...getShippingAddress,[event.target.name]: event.target.value})
      }

      const onChangeOrderNotes = (event) => {
        setOrderNotes(event.target.value)
      }

      const onChangeshipBox = (event) => {
        setShipBox(getShipBox => !getShipBox);
      }

      const onChangePaymentType = (event) => {
        setSelectPaymentType(event.target.value);
      }
       
    
    return(
        <>
        <div class="breadcrumb-area">
                <div class="container">
                    <div class="breadcrumb-content">
                        <ul>
                            <li><a href="index.html">Home</a></li>
                            <li class="active">Checkout</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="checkout-area pt-60 pb-30">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="coupon-accordion">
                                <h3>Returning customer? <span id="showlogin">Click here to login</span></h3>
                                <div id="checkout-login" class="coupon-content">
                                    <div class="coupon-info">
                                        <p class="coupon-text">Quisque gravida turpis sit amet nulla posuere lacinia. Cras sed est sit amet ipsum luctus.</p>
                                        <form action="#">
                                            <p class="form-row-first">
                                                <label>Username or email <span class="required">*</span></label>
                                                <input type="text"/>
                                            </p>
                                            <p class="form-row-last">
                                                <label>Password  <span class="required">*</span></label>
                                                <input type="text"/>
                                            </p>
                                            <p class="form-row">
                                                <input value="Login" type="submit"/>
                                                <label>
                                                    <input type="checkbox"/>
                                                     Remember me 
                                                </label>
                                            </p>
                                            <p class="lost-password"><a href="#">Lost your password?</a></p>
                                        </form>
                                    </div>
                                </div>
                                <h3>Have a coupon? <span id="showcoupon">Click here to enter your code</span></h3>
                                <div id="checkout_coupon" class="coupon-checkout-content">
                                    <div class="coupon-info">
                                        <form action="#">
                                            <p class="checkout-coupon">
                                                <input placeholder="Coupon code" type="text"/>
                                                <input value="Apply Coupon" type="submit"/>
                                            </p>
                                        </form>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-6 col-12">
                            <form action="#" onSubmit={handleSubmit(onSubmit)}>
                                <div class="checkbox-form">
                                    <h3>Billing Details</h3>
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="country-select clearfix">
                                                <label>Country <span class="required">*</span></label>
                                                <select class="nice-select wide" onChange={onChange} name="country" >
                                                <option data-display="">Select country</option>
                                                 <option value="Bangladesh">Bangladesh</option>
                                                  <option value="uk">London</option>
                                                  <option value="rou">Romania</option>
                                                  <option value="fr">French</option>
                                                  <option value="de">Germany</option>
                                                  <option value="aus">Australia</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="checkout-form-list">
                                                <label>First Name <span class="required">*</span></label>
                                                <input placeholder="" type="text" class="form-control" name='first_name'  onChange={onChange}    id="inputFirstName"/>
                                                {errors.first_name && <p>Please check the first name</p>}
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="checkout-form-list">
                                                <label>Last Name <span class="required">*</span></label>
                                                <input placeholder="" type="text" class="form-control" name='last_name'  onChange={onChange}    id="inputLastName"/>
                                                {errors.last_name && <p>Please check the last name</p>}
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="checkout-form-list">
                                                <label>Company Name</label>
                                                <input placeholder="" type="text" onChange={onChange} name="company_name"/>
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="checkout-form-list">
                                                <label>Address <span class="required">*</span></label>
                                                <input placeholder="Street address" type="text" onChange={onChange} name="address" />
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="checkout-form-list">
                                                <input placeholder="Apartment, suite, unit etc. (optional)" type="text" onChange={onChange} name="address1" />
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="checkout-form-list">
                                                <label>Town / City <span class="required">*</span></label>
                                                <input type="text" onChange={onChange} name="city" />
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="checkout-form-list">
                                                <label>State / County <span class="required">*</span></label>
                                                <input placeholder="" type="text" onChange={onChange} name="state" />
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="checkout-form-list">
                                                <label>Postcode / Zip <span class="required">*</span></label>
                                                <input placeholder="" type="text" onChange={onChange} name="postcode" />
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="checkout-form-list">
                                                <label>Email Address <span class="required">*</span></label>
                                                <input placeholder="" type="email" onChange={onChange} name="email_address" />
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="checkout-form-list">
                                                <label>Phone  <span class="required">*</span></label>
                                                <input type="text" onChange={onChange} name="phone" />
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="checkout-form-list create-acc">
                                                <input id="cbox" type="checkbox" onChange={onChange} name="create_an_account"/>
                                                <label>Create an account?</label>
                                            </div>
                                            <div id="cbox-info" class="checkout-form-list create-account">
                                                <p>Create an account by entering the information below. If you are a returning customer please login at the top of the page.</p>
                                                <label>Account password  <span class="required">*</span></label>
                                                <input placeholder="password" type="password"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="different-address">
                                        <div class="ship-different-title">
                                            <h3>
                                                <label>Ship to a different address?</label>
                                                <input id="ship-box" type="checkbox" onChange={onChangeshipBox}/>
                                            </h3>
                                        </div>
                                        <div id="ship-box-info" style={{display: getShipBox?'none':'block' }} class="row">
                                            <div class="col-md-12">
                                                <div class="country-select clearfix">
                                                    <label>Country <span class="required">*</span></label>
                                                    <select class="nice-select wide" onChange={onChangeShipping} name="country" >
                                                      <option data-display="">Select country</option>
                                                      <option value="Bangladesh">Bangladesh</option>
                                                      <option value="uk">London</option>
                                                      <option value="rou">Romania</option>
                                                      <option value="fr">French</option>
                                                      <option value="de">Germany</option>
                                                      <option value="aus">Australia</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="checkout-form-list">
                                                    <label>First Name <span class="required">*</span></label>
                                                    <input placeholder="" type="text" onChange={onChangeShipping} name="first_name" />
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="checkout-form-list">
                                                    <label>Last Name <span class="required">*</span></label>
                                                    <input placeholder="" type="text" onChange={onChangeShipping} name="last_name" />
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="checkout-form-list">
                                                    <label>Company Name</label>
                                                    <input placeholder="" type="text" onChange={onChangeShipping} name="company_name" />
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="checkout-form-list">
                                                    <label>Address <span class="required">*</span></label>
                                                    <input placeholder="Street address" type="text" onChange={onChangeShipping} name="address" />
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="checkout-form-list">
                                                    <input placeholder="Apartment, suite, unit etc. (optional)" type="text" onChange={onChangeShipping} name="address1" />
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="checkout-form-list">
                                                    <label>Town / City <span class="required">*</span></label>
                                                    <input type="text" onChange={onChangeShipping} name="city" />
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="checkout-form-list">
                                                    <label>State / County <span class="required">*</span></label>
                                                    <input placeholder="" type="text" onChange={onChangeShipping} name="state" />
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="checkout-form-list">
                                                    <label>Postcode / Zip <span class="required">*</span></label>
                                                    <input placeholder="" type="text" onChange={onChangeShipping} name="postcode" />
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="checkout-form-list">
                                                    <label>Email Address <span class="required">*</span></label>
                                                    <input placeholder="" type="email" onChange={onChangeShipping} name="email_address" />
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="checkout-form-list">
                                                    <label>Phone  <span class="required">*</span></label>
                                                    <input type="text" onChange={onChangeShipping} name="phone" />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="order-notes">
                                            <div class="checkout-form-list">
                                                <label>Order Notes</label>
                                                <textarea id="checkout-mess" cols="30" rows="10" placeholder="Notes about your order, e.g. special notes for delivery." onChange={onChangeOrderNotes} name="order_notes" ></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div class="col-lg-6 col-12">
                            <div class="your-order">
                                <h3>Your order</h3>
                                <div class="your-order-table table-responsive">
                                    <table class="table">
                                        <thead>
                                            <tr>
                                                <th class="cart-product-name">Product</th>
                                                <th class="cart-product-total">Total</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        {cartProducts && cartProducts.map((item) => {
                                    return (
                                            <tr class="cart_item">
                                              <td class="cart-product-name"> {item.title}<strong class="product-quantity"> × 1</strong></td>
                                              <td class="cart-product-total"><span class="amount">{item.symbol}{item.price}</span></td>  
                                            </tr>
                                              )
                                            })}
                                            
                                        </tbody>
                                        <tfoot>
                                            <tr class="cart-subtotal">
                                                <th>Cart Subtotal</th>
                                                <td><span class="amount">Rs.{total}</span></td>
                                            </tr>
                                            <tr class="order-total">
                                                <th>Order Total</th>
                                                <td><strong><span class="amount">Rs.{total}</span></strong></td>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>
                                <div class="payment-method">
                                    <div class="payment-accordion">
                                        <div id="accordion">
                                        {getPaymentMethods.map((item) => {
                                    return (
                                          <div class="card">
                                            <div class="card-header" id={'#payment-'+item.id}>
                                              <h5 class="panel-title">
                                              <input type="radio" class="payment" name="paymentmethod" value={item.id} onChange={onChangePaymentType}/>
                                                <a class="" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                  {item.payment_type}
                                                </a>
                                              </h5>
                                            </div>
                                            <div id="collapseOne" class="collapse show" data-parent="#accordion">
                                              <div class="card-body">
                                                <p>{item.description}</p>
                                              </div>
                                            </div>
                                          </div>
                                          )
                                        })}
                                        </div>
                                        <div class="order-button-payment">
                                            <input value="Place order" type="submit" onClick={placeorder}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Checkout;