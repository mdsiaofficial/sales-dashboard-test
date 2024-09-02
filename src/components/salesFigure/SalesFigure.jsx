import React from "react";
import "./SalesFigure.css";
import casesIcon from "../../assets/ellipse-153.svg";
import marketingIcon from "../../assets/ellipse-106.svg";

// Monthly sales bar images
import janBar from "../../assets/group-2256.svg";
import febBar from "../../assets/group-2257.svg";
import marBar from "../../assets/group-2258.svg";
import aprBar from "../../assets/group-2259.svg";
import mayBar from "../../assets/group-2260.svg";
import junBar from "../../assets/group-2261.svg";
import julBar from "../../assets/group-2262.svg";
import augBar from "../../assets/group-2263.svg";
import sepBar from "../../assets/group-2264.svg";
import octBar from "../../assets/group-2265.svg";
import novBar from "../../assets/group-2266.svg";
import decBar from "../../assets/group-2267.svg";

const SalesFigure = () => {
  const barImages = [
    janBar,
    febBar,
    marBar,
    aprBar,
    mayBar,
    junBar,
    julBar,
    augBar,
    sepBar,
    octBar,
    novBar,
    decBar,
  ];

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  return (
    <div className="sales-chart">
      {/* Uncomment and add your background image */}
      {/* <img src={chartBG} alt="Background" className="chart-bg" /> */}
      <div className="sales-chart-content">
        <header className="chart-nav">
          <h2 className="sales-title">Sales Figure</h2>
          <div className="legend">
            <div className="legend-item">
              <img src={marketingIcon} alt="Marketing Sales Icon" />
              <span className="legend-text">Marketing Sales</span>
            </div>
            <div className="legend-item">
              <img src={casesIcon} alt="Cases Sales Icon" />
              <span className="legend-text">Cases Sales</span>
            </div>
          </div>
          <button className="view-toggle">Monthly</button>
        </header>
        <div className="chart">
          <div className="labels">
            <span>100K</span>
            <span>80K</span>
            <span>60K</span>
            <span>40K</span>
            <span>0</span>
          </div>
          <div className="bars">
            {barImages.map((bar, index) => (
              <div className="bar-group" key={index}>
                <img src={bar} alt={`${months[index]} sales figure`} />
                <span className="month">{months[index]}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesFigure;
