const functions = require("firebase-functions");
const express=require("express")
const cors =require("cors");
// const { response } = require("express");
const stripe=require("stripe")('sk_test_51JNJakSFwzNZjYHkomvFANLzd7YGnPOJVbiLU70KivXwo5ePsZbl1VS1XE8iDZ9Lq1Z9By7MUW8DlQT6O1Qa5xgh003VvnCbPr')

//api


//app config
const app=express();

//middleware
app.use(cors({origin:true}));
app.use(express.json())


//api route
app.get("/",(req,res)=>
res.send("hey there").status(200)
)
app.post("/payments/create",async(request,response)=>{
    const total=request.query.total
    console.log("payment request recivied ",total)
    const paymentIntent=await stripe.paymentIntents.create({
        amount:total, //subcurrency
        currency:"inr"
    })
    response.status(201).send({
        clientSecret: paymentIntent.client_secret 
    })
}
 

)

//listen command
exports.api=functions.https.onRequest(app)

//http://localhost:5001/fir-aa28e/us-central1/api