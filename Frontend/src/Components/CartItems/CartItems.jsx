import React, { useContext, useState } from 'react'
import "./CartItems.css";
import { ShopContext } from '../../Context/ShopContext';
import remove from "../../assets/remove.png"
import { useNavigate } from 'react-router-dom';

const CartItems = () => {

  const {getTotalCartAmount, all_product, cartItems, removeFromCart, addToCart } = useContext(ShopContext);
  const [promocode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

const applyPromoCode = () => {

  if(promocode === "PC8962"){
    setDiscount(0.05)
    setMessage("Offer Added ✅ 5% Discount Applied")
  }

  else if(promocode === "PC2005"){
    setDiscount(0.10)
    setMessage("Offer Added ✅ 10% Discount Applied")
  }

  else if(promocode === "PC2708"){
    setDiscount(0.15)
    setMessage("Offer Added ✅ 15% Discount Applied")
  }

  else{
    setDiscount(0)
    setMessage("Invalid Promo Code ❌")
  }
}
const subtotal = getTotalCartAmount();
const discountAmount = Math.round(subtotal * discount);
const finalTotal = Math.round(subtotal - discountAmount);

  return (
    <div className='cartitems'>

      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>

      <hr />

      {all_product.map((e) => {

        if (cartItems[e.id] > 0) {
          return (
            <div key={e.id}>
              <div className="cartitems-format cartitems-format-main">

                <img src={e.image} alt="" className='carticon-product-icon' />

                <p>{e.name}</p>

                <p>Rs.{e.new_price}</p>

                <div className="cartitems-quantity">
                  <button onClick={()=>removeFromCart(e.id)}>-</button>
                  <span>{cartItems[e.id]}</span>
                  <button onClick={()=>addToCart(e.id)}>+</button>
                </div>

                <p>Rs.{e.new_price * cartItems[e.id]}</p>

                <img
                  src={remove}
                  alt=""
                  className='cartitem-remove-icon'
                  onClick={() => removeFromCart(e.id)}
                />
              </div>
              <hr />
            </div>
          )
        }       
        return null;
      })}

      {/* DELIVERY + TOTAL SECTION */}

      <div className="cartitems-down">

        {/* DELIVERY DETAILS */}
        <div className="delivery-details">

          <h2>Delivery Details</h2>

          <input type="text" placeholder="Full Name" required />
          <input type="text" placeholder="Mobile Number" required />
          <input type="text" placeholder="House No." required />
          <input type="text" placeholder="Address" required />
          <input type="text" placeholder="City" required />
          <input type="text" placeholder="Pin Code" required />

        </div>

        {/* DIVIDER */}
        <div className="cart-divider"></div>

        {/* CART TOTALS */}
        <div className="cartitems-total">

          <h1>Cart Totals</h1>

          <div className="cartitems-total-items">
            <p>Subtotal</p>
            {/* <p>Rs.{getTotalCartAmount()}</p> */}
            <p>Rs.{subtotal}</p>
          </div>
          <hr />

          <div className="cartitems-total-items">
              <p>Discount</p>
              <p>- Rs.{discountAmount}</p>
          </div>

          <hr/>

          <div className="cartitems-total-items">
            <p>Shipping Fee</p>
            <p>Free</p>
          </div>

          <hr/>

          <div className="cartitems-total-items">
            <p>Total</p>
            {/* <p>Rs.{getTotalCartAmount()}</p> */}
            <p>Rs.{finalTotal}</p>
          </div>

          {/* PROMO CODE */}

          <div className="cartitems-promocode">

            <p>If you have a promo code, Enter here</p>

            <div className="cartitems-promobox">
              <input
            type="text"
placeholder="Enter promo code"
value={promocode}
onChange={(e)=>setPromoCode(e.target.value)}
/>

<button onClick={applyPromoCode}>
Submit
</button>
            </div>

          <p>{message}</p>
          </div>

        </div>

      </div>

      {/* CENTER BUTTON */}

      <div className="checkout-center">
        <button className="continue-btn" onClick={()=>navigate("/mens")}>
          CONTINUE SHOPPING
        </button>

        <button className="checkout-btn">PROCEED TO CHECKOUT</button>
      </div>

    </div>
  )
}

export default CartItems;