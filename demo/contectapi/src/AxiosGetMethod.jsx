import React, { useEffect, useState } from 'react';
import axios from 'axios'

function AxiosGetMethod() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetchDate("https://dummyjson.com/products")
    }, [])
    const fetchDate = async (url) => {
        let result = await axios.get(url)
        console.log(result);
        setProducts(result.data.products)
    }
    return (
        <>
            <h1 style={{ backgroundColor: "black", color: "white", textAlign: "center" }}>This is our Shopping Website</h1>
            <div className='row'>
                {
                    products.map(e => {
                        return <>
                            <div className="col-12 col-md-3 col-sm-6 card d-flex justify-centent-center align-items-center">
                                <img className="card-img-top" src={e.images[0]} style={{height:"200px",width:"200px"}}/>

                                <div className="card-body">
                                    <h2 className="card-title">{e.brand}</h2>
                                    <h3 className="card-title">{e.title}</h3>
                                    <p className="card-text">{e.description}</p>
                                </div>
                                <div className="card-footer  ">
                                    <button className="btn btn-primary me-5">ADD TO Card</button>
                                    <button className="btn btn-danger ms-5">Buy Now</button>
                                </div>

                            </div>
                        </>

                    })
                }
            </div>
        </>
    )
}

export default AxiosGetMethod