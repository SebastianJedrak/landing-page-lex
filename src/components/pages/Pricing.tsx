import PriceBox from "../UI/PriceBox";
import "./Pricing.scss";

const Pricing: React.FC = () => {
  return (
    <div className="pricing-page">
      <h3>Simple & flexible pricing built for everyone</h3>
      <p className="paragraph">
        Start with 14-day free trial. No credit card needed. Cancel at anytime.
      </p>
      <div className="price-box__container">
        <PriceBox />
        <PriceBox />
        <PriceBox />
      </div>
    </div>
  );
};

export default Pricing;
