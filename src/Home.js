import React, {useEffect, useState} from 'react'
import './Home.css'
import Product from './Product'

function Home({cartItems}) {

    return (
        <div className="Home">
            <div className="Home-container">
                <div 
                    className="Home-banner" 
                    style={{backgroundImage: "url(https://img.freepik.com/free-vector/we-are-hiring-announcement-template-design_60438-1697.jpg?w=2000)"}}>

                </div>
                <div className="Home-content">
                    <div className="Home-row">
                        {
                            cartItems.map((product, i)=>(
                                <Product
                                    name={product.name}
                                    key={product.id}
                                    price={product.price}
                                    available={product.available}
                                    vendor={product.vendor}
                                    category={product.category}
                                    image={product.image}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>

            
        </div>
    )
}

export default Home
