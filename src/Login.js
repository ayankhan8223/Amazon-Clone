import React,{useState} from 'react'
import { Link,useHistory } from 'react-router-dom';
import { auth } from "./firebase.js"
import "./Login.css"


function Login() {
const history=useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login=(e)=>{
console.log(e)
e.preventDefault()

auth
.signInWithEmailAndPassword(email,password)
.then((auth)=>{
    if(auth){
        history.push('/')
    }
})
.catch((e)=>{
    alert(e.message)
})
//firebase login
    }

    const register=(e)=>{
        console.log(e)
        e.preventDefault()
        
        //firebase register
    

    auth.createUserWithEmailAndPassword(email,password)
    .then((auth)=>{
        console.log(auth)
        if(auth){
            history.push('/')
        }
    })
    .catch((error)=>{
        alert(error.message)
    })
   

    }
    return (
        <div className="login">
            <Link to="/">
            <div className="login__image">
                <img src="http://pngimg.com/uploads/amazon/amazon_PNG21.png" alt="" />
            </div>
            </Link>
            <div className="login__details">
                <h1 className="signin__title">Sign-In</h1>
                <form action="">
               <div className="sign__input">
                   <h3>Email or mobile phone number</h3>
                   <input type="text" value={email} onChange={
                       e=>setEmail(e.target.value)
                      
                   }/>
               </div>
               <div className="sign__input">
                   <h3>Password</h3>
                   <input type="password" value={password} onChange={
                       e=>setPassword(e.target.value)
                      
                   }/>
               </div>
               <button type="submit" onClick={login} className="login__button">Continue</button>
               </form>
               <p className="login__agreement"> By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice</p>
                <button onClick={register} className="create__button">Create Aamzon Account</button>
              
              
            </div>
        </div>
    )
}

export default Login
