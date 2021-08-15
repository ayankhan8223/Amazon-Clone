import React from 'react'
import "./Header.css"
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {Link} from "react-router-dom"
import { useStateValue } from './StateProvider';
import {auth} from "./firebase"
function Header() {
    const [{basket,user},dispatch]=useStateValue()

    const handleAuthentication=()=>{
        if(user){
            auth.signOut()
        }
    }
    return (
    <div>
     <div className="header">
         <Link to="/">
         <img className="logo" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
         </Link>
     
          
        <div className="header__search">
         <input className="header__searchInput" type="text" />
            <SearchIcon className="header__searchIcon"/> 
        </div>
         
                
        <div className="header__nav">
        <Link to={!user && "./login"}>
            <div onClick={handleAuthentication} className="header__options">
                <div className="header__optionsLineOne">{user?"hello":"hello guest"}</div>
                <span className="header__optionsLineTwo">{user? user?.email :"Sign In`"}</span>

            </div>
            </Link>

            <Link to="./orders">
            <div className="header__options">
                 <span className="header__optionsLineOne">Returns</span>
                <span className="header__optionsLineTwo">& Order</span>
            </div>
            </Link>
            <div className="header__options">
                <span className="header__optionsLineOne">Your</span>
                <span className="header__optionsLineTwo">Prime</span>
            </div>
        </div>
      <Link to="/checkout">
      <div className="header__optionBasket">
             <ShoppingCartIcon/>
             <div className="header__optionsLineTwo header__basketCount">
                 {basket?.length}
             </div>
        </div>
      </Link>
        
          
    </div>
            
    </div>
    )
}

export default Header
