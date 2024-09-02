import React from "react";
import "./RecentOrder.css";
import fan from "../../assets/fan.svg";
import headphone from "../../assets/headphone.svg";
import cup from "../../assets/cup.svg";
import laptop from "../../assets/laptop.svg";
import radio from "../../assets/radio.svg";
import tshirt from "../../assets/tshirt.svg";
import more from "../../assets/more.svg";

// Order item component for better reusability
const OrderItem = ({ icon, name, price }) => (
  <li className="order-item">
    <img src={icon} alt={name} className="order-icon" />
    <span className="order-name">{name}</span>
    <span className="order-price">{price}</span>
  </li>
);

const RecentOrder = () => {
  const orders = [
    { icon: fan, name: "Fan Supertop Wings", price: "$60.00" },
    { icon: headphone, name: "Headset Asyiek", price: "$40.10" },
    { icon: cup, name: "Cup And Glass", price: "$52.10" },
    { icon: laptop, name: "Lepi oh Lepi", price: "$90.00" },
    { icon: radio, name: "Radio Active", price: "$85.00" },
  ];

  return (
    <div className="recent-orders">
      <div className="header">
        <h2 className="title">Recent Orders</h2>
        <img src={more} alt="More options" className="more-icon" />
      </div>
      <ul className="orders-list">
        {orders.map((order, index) => (
          <OrderItem
            key={index}
            icon={order.icon}
            name={order.name}
            price={order.price}
          />
        ))}
      </ul>
    </div>
  );
};

export default RecentOrder;
