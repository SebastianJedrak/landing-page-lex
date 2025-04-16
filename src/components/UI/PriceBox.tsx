import { Features } from "../pages/Pricing";
import Button from "./Button";
import PriceFeature from "./PriceFeature";
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
    <div className="price-box-ui">
      <div
        className={`price-box__card ${
          special ? "price-box__card-special" : "price-box__card-normal"
        }`}
      >
        <p className="label">{planName}</p>
        <div className="price-box__card__price">
          <span>$</span>
          <div className="price__value">
            <h2>{price}</h2>
            <div className="price__value__sub">
              <span>per user</span>
              <span>per month</span>
            </div>
          </div>
        </div>
        <p className="paragraph price-box__card__description">{description}</p>
      </div>

      <ul className="price-box__features__items">
        {features.map((feature) => (
          <PriceFeature
            key={feature.id}
            name={feature.name}
            active={feature.active}
          />
        ))}
      </ul>

      <Button
        label="Start Free Trial"
        variant={special ? "primary" : "white"}
      />
    </div>
  );
};

export default PriceBox;
