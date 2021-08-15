
import React from 'react'
import { useStateValue } from './StateProvider'; 
import "./CheckoutProduct.css"

function CheckoutProduct({id,image,title,price,rating,hideButton}) {
    const [{basket},dispatch]=useStateValue();
    const removeFromBasket = () =>{
        //remove from the basket
        dispatch({
            type:"REMOVE_FROM_BASKET",
            id:id
        })
    }
    return (
    <div className="checkoutProducts">
        <div className="checkoutProduct">
            <div className="checkoutproduct__image">
            <img src={image} alt="" />
            </div>
            <div className="checkoutProduct__info">
               <div className="checkoutProduct__title">{title}</div>
               <div className="checkoutProduct__stock">In stock</div>
               <div className="checkoutProduct__eligible">Eligible for FREE Shipping</div>
               <div className="checkoutProduct__fullflied">
                   <img src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px._CB485936079_.png" alt="" />
               </div>
               <small className="checkoutProduct__gift">
            <input type="checkbox" />This will be a gift
        </small>
               <div className="checkoutProduct__rating">Rating : {rating}</div>
               {!hideButton? <button onClick={removeFromBasket} className="checkoutProduct__button" >Remove From Basket</button>:""}
              
            </div>
            <div className="checkoutProduct__price">₹{price}</div>
        </div>
    </div>
    )
}

export default CheckoutProduct
