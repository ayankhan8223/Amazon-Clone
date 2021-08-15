import React from 'react'
import "./subtotal.css"
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider'; 
import {getBasketTotal} from "./reducer";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { useHistory } from 'react-router-dom';


function Subtotal() {
  const [{basket,user},dispatch]=useStateValue();
  const history=useHistory();
    return (
        <div className="subtotal">  
          <CurrencyFormat
          renderText={(value)=>(
        <>
        <img className="image" src="https://images-eu.ssl-images-amazon.com/images/G/31/checkout/assets/TM_desktop._CB443006202_.png" alt="" />
        <p className="free__delivery">
        <CheckCircleIcon/>
        Part of your order qualifies for FREE Delivery. Select this option at checkout. Details
        </p>
        <p className="subtotal__items">
        Subtotal ({basket?.length} items): <strong>{value}</strong>
        </p>
        <small className="subtotal__gift">
            <input type="checkbox" />This order
            contains a gift
        </small>
        </>
          )}
          decimalScale={2}
          value={getBasketTotal(basket)}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"₹"}
          />
    <button onClick={e => {user?history.push('/payment'):history.push("/login")}}>Proceed to checkout</button>
    {/* //we can use both link as well as history but in case of link it forms a link and kill the button functionality */}
          
        </div>
    )
}

export default Subtotal
