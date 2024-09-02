import Header from "../components/Header/Header";
import Navigation from "../components/Navigation/Navigation";
import OdeonMart from "../components/Profile/Profile";
import OverviewShortCard from "../components/OverviewShortCard/OverviewShortCard";
import PopularProduct from "../components/PopularProduct/PopularProduct";
import RecentOrder from "../components/RecentOrder/RecentOrder";
import SalesFigure from "../components/salesFigure/SalesFigure";
import "./Dashboard.css";

export default function Dashboard() {
  return (
    <div id="parent-cantainer">
      <section className="box">
        <Navigation />
      </section>
      <section className="box">
        <Header />
      </section>
      <section className="box">
        <div className="overview">
          <OverviewShortCard />
        </div>
        <div className="overview">
          <SalesFigure />
        </div>
        <div className="overview">
          <PopularProduct />
        </div>
      </section>
      <section className="box">
        <div className="recent">
          <OdeonMart />
        </div>
        <div className="recent">
          <RecentOrder />
        </div>
      </section>
    </div>
  );
}
