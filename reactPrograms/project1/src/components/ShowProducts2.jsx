import React from 'react'
//import products from '../data/products.js'
import './ShowProducts1.css'
import { useEffect } from 'react';
import axios from 'axios'
import { useState } from 'react';
const ShowProducts2 = () => {
    const [products, setProducts] = useState([])
    useEffect(
        () => {
            loadData()
        }, []
    )

    async function loadData() {
        try {
            const apiproducts = await axios.get("http://localhost:8087/products/getAllProducts")
            console.log(apiproducts)
            setProducts(apiproducts.data)
        }
        catch (error) {
            console.log(error)
        }
    }

    const productCategories=products.map(
        (prod)=>prod.category
    )
    console.log(productCategories)

    const uniqueCategories=new Set(productCategories)
    console.log(uniqueCategories)

    const allCategoreis=[...uniqueCategories,'All']
    console.log(allCategoreis)

    return (
        <div className="container my-5">
            <h2 className="text-center mb-5 fw-bold">Our Collection</h2>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
                {products.map((prod) => (
                    <div className="col" key={prod.id}>
                        <div className="card h-100 border-0 shadow-sm product-card">
                            <div className="img-container">
                                <img
                                    className="card-img-top p-3"
                                    src={prod.image}
                                    alt={prod.title}
                                    style={{ objectFit: 'contain', height: '250px' }}
                                />
                            </div>
                            <div className="card-body d-flex flex-column">
                                <h6 className="card-subtitle mb-2 text-muted text-uppercase small">Category</h6>
                                <h5 className="card-title fw-bold text-truncate">{prod.title}</h5>
                                <p className="card-text text-muted small flex-grow-1">
                                    {prod.description.substring(0, 100)}...
                                </p>
                                <div className="d-grid mt-3">
                                    <button className="btn btn-dark rounded-pill py-2 fw-semibold">
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ShowProducts2