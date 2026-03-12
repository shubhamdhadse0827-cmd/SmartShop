import React, { useContext } from 'react'
import "./Item.css"
import { ShopContext } from '../../Context/ShopContext'

const Item = (props) => {

  const { addToCart } = useContext(ShopContext);

  return (
    <div className="item">

        <img src={props.image} alt="" />

        <p>{props.name}</p>

        <div className="item-prices">

            <div className="item-price-new">
                Rs. {props.new_price}
            </div>

            <div className="item-price-old">
                Rs. {props.old_price}
            </div>

        </div>

        <button
          className='add-cart-btn'
          onClick={() => addToCart(props.id)}
        >
          Add To Cart
        </button>

    </div>
  )
}

export default Item