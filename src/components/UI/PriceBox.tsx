import { Features } from "../pages/Pricing";
import Button from "./Button";
import Feature from "./Feature";
import "./PriceBox.scss";

interface PriceBoxProps {
  planName: string;
  price: string;
  description: string;
  features: Features;
  special?: boolean;
}

const PriceBox: React.FC<PriceBoxProps> = ({
  planName,
  price,
  description,
  features,
  special = false,
}) => {
  return (
    <div className="price-box__container">
      <div className="price-box__card">
        <p>{planName}</p>
        <div className="price-box__card__price">
          <span>$</span>
          <h2>{price}</h2>
          <span>per user</span>
          <span>per month</span>
        </div>
        <p>{description}</p>
      </div>

      <div className="price-box__features">
        {features.map((feature) => (
          <div key={feature.id} className="price-box__features__item">
            <Feature />
          </div>
        ))}

        <Button label="Start Free Trial" />
      </div>
    </div>
  );
};

export default PriceBox;
