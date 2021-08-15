

import React from 'react'
import "./Home.css"
import Product from './Product';

function Home() {
    return (
        <div className="home">
           <div className="home__container">
               <img
                className="home__img"
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/AugART21/GW/NEW/HERO/PCshopnow/fdfo/AugART21_PC_hero_1x_Shopnow_FDFO._CB645150351_.jpg" alt="" />
           </div>

           <div className="home__row">
               {/* product */}
               <Product
               id="12121"
                title="AmazonBasics 127cm (50 inch) 4K Ultra HD Smart LED Fire TV AB50U20PS (Black)"
                 price={33999.00} 
                 image="https://images-na.ssl-images-amazon.com/images/I/61bXjE5ESwS._SL1240_.jpg"
                 rating="&#11088;&#11088;&#11088;&#11088;&#11088;"/>
               <Product
                id='21212'
                title="Samsung Galaxy Note 20 (Mystic Bronze, 8GB RAM, 256GB Storage) with No Cost EMI/Additional Exchange Offers"
                price={54999.00}
                image="https://images-na.ssl-images-amazon.com/images/I/81v6FUkT5CL._SL1500_.jpg"
                rating="&#11088;&#11088;&#11088;&#11088;"
                />
              
                {/* product */}
           </div>
           <div className="home__row">
               {/* product */}
                {/* product */}
                 {/* product */}
                 <Product
                 id="42452"
                  title="Oxford Student Atlas for India - Third Edition Paperback – 1 December 2019"
                  price={215.00} 
                  image="https://images-na.ssl-images-amazon.com/images/I/81k3++L3AdL.jpg"
                  rating="&#11088;&#11088;&#11088;&#11088;"
                 />
               <Product
                id="43434"
                title="Samsung 345L 3 Star Inverter Frost Free Double Door Refrigerator (RT37T4513S8/HL, Elegant Inox, Convertible)"
                  price={34490.00} 
                  image="https://images-na.ssl-images-amazon.com/images/I/71pfYtV2upL._SL1500_.jpg"
                  rating="&#11088;&#11088;&#11088;&#11088;"/>
               <Product
                id="845342"
                title="2021 Apple iPad Pro with Apple M1 chip (12.9-inch/32.77 cm, Wi-Fi, 128GB) - Space Grey (5th Generation)"
                price={99900.00}
                image="https://images-na.ssl-images-amazon.com/images/I/81%2BN4PFF7jS._SL1500_.jpg"
                rating="&#11088;&#11088;&#11088;&#11088;"/>
               
           </div>
           <div className="home__row">
               {/* product */}
               <Product
                id="087867"
               title="Samsung 34-inch (86.40cm) Curved Monitor- 21:9 Ultrawide QLED, Thunderbolt 3 Port- LC34J791WTWXXL"
               price={66599.00}
               image="https://images-na.ssl-images-amazon.com/images/I/91pi34PiUPL._SL1500_.jpg"
               rating="&#11088;&#11088;&#11088;&#11088;"/>
               
                
           </div>
        </div>
    )
}

export default Home;

// // https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg