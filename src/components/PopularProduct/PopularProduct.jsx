import React from "react";
import "./PopularProduct.css";

import headphone from "../../assets/headphone.svg";
import cup from "../../assets/cup.svg";
import laptop from "../../assets/laptop.svg";

const PopularProduct = () => {
  const products = [
    {
      icon: headphone,
      name: "Headsheet",
      category: "Fashion",
      author: "Benjamin R",
      price: "$99,10",
      status: "Available",
    },
    {
      icon: cup,
      name: "Cup and top glass",
      category: "Home",
      author: "William K",
      price: "$70,20",
      status: "Available",
    },
  ];

  return (
    <div className="popular-products">
      <h2 className="popular-products__title">Popular Products</h2>
      <table className="popular-products__table">
        <thead>
          <tr className="popular-products__header">
            <th className="popular-products__header-item">Image</th>
            <th className="popular-products__header-item">Product Name</th>
            <th className="popular-products__header-item">Category</th>
            <th className="popular-products__header-item">Author</th>
            <th className="popular-products__header-item">Price</th>
            <th className="popular-products__header-item">Status</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index} className="popular-products__item">
              <td>
                <img
                  src={product.icon}
                  alt={product.name}
                  className="popular-products__icon"
                />
              </td>
              <td className="popular-products__name">{product.name}</td>
              <td className="popular-products__category">{product.category}</td>
              <td className="popular-products__author">{product.author}</td>
              <td className="popular-products__price">{product.price}</td>
              <td className="popular-products__status">{product.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PopularProduct;
