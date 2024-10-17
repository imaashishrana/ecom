import React from "react"; 
import { NavLink } from "react-router-dom"; 
import DATA from "../Data"; // Make sure this file contains the product data

const Product = () => {
  // Group products by category
  const groupedProducts = DATA.reduce((acc, item) => {
    // Check if the category already exists in the accumulator
    if (!acc[item.category]) {
      acc[item.category] = []; // Initialize the category array if it doesn't exist
    }
    acc[item.category].push(item); // Push the item into the respective category
    return acc; // Return the accumulator for the next iteration
  }, {});

  const cardItem = (item) => {
     // Set a maximum length for the description


    return (
      <div className="row-md-4 col-sm-6 col-md-3 col-lg-3 my-4" key={item.id}>
        <div className="card h-100 " style={{ maxWidth: '200px' }}>
          <img 
            src={item.img} 
            className="card-img-top mt-2" 
            alt={item.title} 
            style={{ height: '150px', objectFit: 'contain' }} // Set image height and fit
          />
          <div className="card-body text-center">
            <h5 className="card-title text-sm">{item.title}</h5>
            
            <p className="lead">${item.price.toFixed(2)}</p> {/* Format price */}
            <p className="text-sm text-gray-500 uppercase">Category: {item.category}</p> {/* Display category in uppercase */}
            <p className="text-yellow-500">{`⭐ ${item.rating.rate} / 5`}</p> {/* Display rating */}
            <NavLink to={`/products/${item.id}`} className="btn btn-outline-primary mt-2">
              Buy Now
            </NavLink>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="container px-5 py-24 mx-auto">
        <div className="row">
          <div className="col-12 text-center">
            <h1 className="text-3xl font-bold">Products</h1>
            <hr className="my-4 border-t-2 border-gray-300" />
          </div>
        </div>
      </div>
      <div className="container">
        {Object.keys(groupedProducts).map((category) => (
          <div key={category}>
            <h2 className="text-2xl text-center font-semibold mb-4 uppercase">{category}</h2> {/* Category Title in uppercase */}
            <div className="row justify-content-center">
              {groupedProducts[category].map(cardItem)} {/* Render all cards for the category */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
