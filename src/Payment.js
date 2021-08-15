import React,{useState,useEffect}from 'react'
import "./Payment.css"
import { useStateValue } from './StateProvider'; 
import CheckoutProduct from "./CheckoutProduct";
import {CardElement,Elements,useStripe,useElements,} from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer';
import {Link,useHistory} from 'react-router-dom';
import axios from "./axios";
import {db} from "./firebase" 

function Payment() {
    const [{basket,user},dispatch]=useStateValue();
    const [error,setError]=useState(null);
    const [disabled,setDisabled]=useState(true)
    const [succeeded,setSucceeded]=useState(false)
    const [processing,setProcessing]=useState("")
    const [clientSecret,setClientSecret]=useState(true)

    const stripe=useStripe();
    const elements=useElements();
    const history=useHistory()

    useEffect(()=>{
        //generate the special stripe secret which allows us to charge a customer
        const getClientSecret=async()=>{
            const response =await axios({
                method: "post",
                // Stripe expects the total in a currencies submit
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`
            });
            setClientSecret(response.data.clientSecret)
        };
      getClientSecret();
    },[basket])
    console.log('THE SECRET IS >>>', clientSecret)
    console.log('👱', user)

    const handleSubmit=async(event)=>{
        //do all the fancy stripe stuff
        event.preventDefault();
        setProcessing(true)
      const payload=await stripe.confirmCardPayment(clientSecret,{
          payment_method:{
              card: elements.getElement(CardElement)
          }
      }).then(({ paymentIntent })=>{
        // paymentIntent=payment confirmation
        db
        .collection('users')
        .doc(user?.uid)
        .collection('orders')
        .doc(paymentIntent.id)
        .set({
            basket: basket,
            amount: paymentIntent.amount,
            created: paymentIntent.created
        })
       
         setSucceeded(true)
          setError(null)
           setProcessing(false)
             
             dispatch({
                 type:"EMPTY_BASKET"
             })
             history.replace("/orders")  
      })
      

    }
    const handleChange=(event)=>{
        //listen for changes in the cardelements
        //and display any error as the customer types their card details
        setDisabled(event.empty)
        setError(event.item ? event.error.message: "")
    }
    return (
        <div className="payment">
         
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/x-locale/checkout/checkout-spc-ship-banner._CB485947700_.gif" alt="" />
            <div className="payment__container">

                <div className="payment__section">
                    <div className="payment__section1">

                    <div className="delivery__title">
                        <div>Delivery Address</div>
                    </div>
                    <div className="delivery__address">
                       <p>{user?.email}</p>
                       <p>141,Rajendra Marg</p>
                       <p>Dhar Madhya Pradesh </p>
                    </div>
                    </div>

            
                </div>
                <div className="payment__section_2">
                <div className="payment__title">
                      <div>Review Items and Delivery</div>
                  </div>
              
                    <div className="items">
                   
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
        </div>
                
            </div>
            <div className="payment__section3">
                
                  <div className="paymentmethod__title">
                      <div>Payment Method</div>
                  </div>
                    <div className="payment__details">
                        <form onSubmit={handleSubmit}>
                        <div className="payment__priceContainer">
                                <CurrencyFormat
                                renderText={(value)=>(
                                   
                                    <h3>Order Total: {value}</h3>
                                  
                                )}
                                decimalScale={2}
                                value={getBasketTotal(basket)}
                                displayType={"text"}
                                thousandSeparator={true}
                                prefix={"₹ "}/>
                            </div>
                            <CardElement onChange={handleChange}/>
                            <button className="payment__button" disabled={processing||disabled||succeeded}>
                                <span>{processing? <p>Processing</p>: "Buy Now"}</span>
                                </button>
                            {/* Error */}
                            {error && <div>{error}</div>}

                        </form>

                    </div>
                   
                    
                 </div>
            
        </div>
    )
}

export default Payment
