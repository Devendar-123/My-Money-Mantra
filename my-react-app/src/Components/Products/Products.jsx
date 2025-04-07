import React from "react";
import { Link } from "react-router-dom";
import "./Products.css";

const Products = () => {
  const loansData = [
    { id: 1, image: "/Images/p1.jpg", name: "Personal Loan" },
    { id: 2, image: "/Images/p2.jpg", name: "Credit Card" },
    { id: 3, image: "/Images/p3.jpg", name: "Loan against Mutual Fund" },
    { id: 4, image: "/Images/p4.jpg", name: "Business Loan" },
    { id: 5, image: "/Images/p5.jpg", name: "Home Loan" },
    { id: 6, image: "/Images/p6.jpg", name: "Short Term Personal Loan" },
    { id: 7, image: "/Images/p7.jpg", name: "Gold Loan" },
    { id: 8, image: "/Images/p8.jpg", name: "Loan Against Property" },
    { id: 9, image: "/Images/p9.jpg", name: "Home Loan Balance Transfer" },
    { id: 10, image: "/Images/p10.jpg", name: "Health Insurance" },
  ];

  // Function to generate a clean URL-friendly path
  const generatePath = (name) =>
    `/products/${name.toLowerCase().replace(/\s+/g, "-")}`;

  return (
    <div className="products">
      <div className="products-container">
        {/* Heading */}
        <div className="head-text">
          <h2>
            Bringing you the <span className="highlight">Best Products</span>
            <br />
            from Top Banks & Financial{" "}
            <span className="underline">Institutions</span>
          </h2>
        </div>

        {/* Products Grid */}
        <div className="products-grid">
          {loansData.map((loan) => (
            <Link key={loan.id} to={generatePath(loan.name)} className="product-card">
              <img src={loan.image} alt={loan.name} className="product-image" />
              <p className="product-name">{loan.name}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
