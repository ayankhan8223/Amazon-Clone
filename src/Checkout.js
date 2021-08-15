

import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
    const [{ basket, user }, dispatch] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad"
                 src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Acko/AugART/Bank-page_Desktop_01.jpg" alt="" />
            <div className="checkout__titless">  
                <div className="checkout__titles">
                  <div className="user__email">
                  <h5>{user? "Hello" : ""}</h5>
                     <h3>{user? user?.email: ""}</h3>
                     
                    
                   </div>
                    <h2 className="checkout__title">
                       Your Shopping Basket
                    </h2>
                    <p className="checkout__price">Price</p>
                </div>
             </div>
           {basket.map(item => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
               
            </div>




            <div className="checkout__right">
              <Subtotal/>
            </div>
            
        </div>
    )
}

export default Checkout;
