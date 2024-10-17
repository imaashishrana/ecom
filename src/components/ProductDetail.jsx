import React, { useState } from 'react';
import { useParams } from 'react-router';
import DATA from '../Data';
import { useDispatch } from 'react-redux';
import { addItem, delItem } from '../redux/actions/index';

const ProductDetail = () => {
    const [cartBtn, setCartBtn] = useState("Add to Cart");
    const { id } = useParams(); // Destructure to get id directly
    const proDetail = DATA.find((x) => x.id === parseInt(id)); // Find the product by id
    const dispatch = useDispatch();

    if (!proDetail) {
        return <div className="text-center mt-5">Product not found!</div>; // Handle product not found
    }

    const handleCart = () => {
        if (cartBtn === "Add to Cart") {
            dispatch(addItem(proDetail));
            setCartBtn("Remove from Cart");
        } else {
            dispatch(delItem(proDetail));
            setCartBtn("Add to Cart");
        }
    };

    return (
        <div className="container my-5 py-3">
            <div className="row justify-content-center">
                <div className="col-md-6 d-flex justify-content-center mx-auto">
                    <img 
                        src={proDetail.img} 
                        alt={proDetail.title} 
                        className="img-fluid" 
                        style={{ height: "400px", objectFit: "cover" }} 
                    />
                </div>
                <div className="col-md-6 d-flex flex-column justify-content-center">
                    <h1 className="display-5 fw-bold text-center">{proDetail.title}</h1>
                    <hr />
                    <h2 className="my-4 text-primary text-center">${proDetail.price.toFixed(2)}</h2> {/* Format price */}
                    <p className="lead text-center">{proDetail.desc}</p>
                    <p className="text-muted text-center">Category: {proDetail.category}</p> {/* Display category */}
                   
                    <p className="text-yellow-500 text-center">{`⭐ ${proDetail.rating.rate} / 5`}</p> {/* Display rating */}
                   
                    <div className="d-flex justify-content-center">
                        <button onClick={handleCart} className="btn btn-outline-primary my-5">{cartBtn}</button>
                    </div>
                     <hr />
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
