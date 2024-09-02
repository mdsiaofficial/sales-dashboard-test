import React from "react";
import "./Profile.css";
import companyLogo from "../../assets/companyLogo.svg";

export default function Profile() {
  return (
    <main className="odeon-mart-card">
      <section className="brand">
        <img className="logo" src={companyLogo} alt="Odeon Mart Logo" />
        <h3 className="company-name">Odeon Mart</h3>
      </section>
      <hr className="divider" />
      <section className="details">
        <div className="detail-item">
          <h4>400</h4>
          <p>Product</p>
        </div>
        <div className="detail-item">
          <h4>12 year</h4>
          <p>Experience</p>
        </div>
        <div className="detail-item">
          <h4>4.8</h4>
          <p>Rating</p>
        </div>
      </section>
    </main>
  );
}
