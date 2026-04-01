import React from 'react'
import products from '../data/products.js'
import './ShowProducts.css'
const ShowProducts = () => {
    return (
        <>
        <div className="parent-container">
            {
                products.map(
                    (prod) => {
                        return <div className="card" style={{'width': '18rem'}}>
                            <img className="card-img-top" src={prod.image} alt="Card image cap"/>
                                <div className="card-body">
                                    <h5 className="card-title">{prod.title}</h5>
                                    <p className="card-text">{prod.description}</p>
                                    <a href="#" className="btn btn-primary">ADD TO CART</a>
                                </div>
                        </div>
                    }
                )
            }
        </div>
        </>
    )
}

export default ShowProducts