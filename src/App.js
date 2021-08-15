import React,{useEffect} from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import Payment from './Payment';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
import {loadStripe} from '@stripe/stripe-js';
import {CardElement,Elements,useStripe,useElements,} from '@stripe/react-stripe-js';
import Orders from "./Orders"
const promise=loadStripe("pk_test_51JNJakSFwzNZjYHkEcKaxtFbSIa38L9cjXkLJq8tLCqwAQk84WNxSqsaV4GWPUxBUWVSOFBMrcJZKy6QhEFRSA2K00ZFFkaLRB")

function App() {

  const[{},dispatch]=useStateValue()
 
useEffect(()=>{
//will only run once when the app componenet loads
auth.onAuthStateChanged(authUser=>{
  console.log('this is User',authUser)

  if(authUser){
    dispatch({
       type:'SET_USER',
       user:authUser
    })
  }
  else{
    dispatch({
      type:'SET_USER',
      user:null
    })
  }
})



},[])
  return (
    <Router>
       <div className="App">
      
     
            
            
       <Switch>
       <Route path="/payment">


           <Elements stripe={promise}>

            <Payment/>

            </Elements>


        </Route>
       <Route path="/login">
             {/*login  */}
             <Login/>
        </Route>
        <Route path="/orders">
             {/*Orders  */}
             <Orders/>
        </Route>


       <Route path="/checkout">
          {/* {header} */}
          <Header/>
             {/* checkout */}
            <Checkout/>
           
            
        </Route>


       <Route path="/">
          
          {/* {header} */}
         <Header/>
             {/* home */}
             <Home/>
            
        </Route>
        
        
      
    
    
    
        
        </Switch>
   </div>
    </Router>
  );
}

export default App;
