import PriceBox from "../UI/PriceBox";
import "./Pricing.scss";

export type Feature = {
  id: number;
  name: string;
  active: boolean;
};

export type Features = Feature[];

const featuresNames = [
  "2 GB of hosting space",
  "14 days of free backups",
  "Social integrations",
  "Advanced client billing",
];

const Pricing: React.FC = () => {
  return (
    <div className="pricing-page">
      <h3>Simple & flexible pricing built for everyone</h3>
      <p className="paragraph">
        Start with 14-day free trial. No credit card needed. Cancel at anytime.
      </p>
      <div className="price-boxes__container">
        <PriceBox
          planName="START"
          price="19"
          description="All the features you need to keep your personal files safe, accessible, and easy to share."
          features={[
            { id: 1, name: featuresNames[0], active: true },
            { id: 2, name: featuresNames[1], active: true },
            { id: 3, name: featuresNames[2], active: false },
            { id: 4, name: featuresNames[3], active: false },
          ]}
        />
        <PriceBox
          planName="ENTERPRISE"
          price="49"
          description="All the features you need to keep your personal files safe, accessible, and easy to share."
          features={[
            { id: 1, name: featuresNames[0], active: true },
            { id: 2, name: featuresNames[1], active: true },
            { id: 3, name: featuresNames[2], active: true },
            { id: 4, name: featuresNames[3], active: false },
          ]}
          special
        />
        <PriceBox
          planName="ENTERPRISE"
          price="99"
          description="All the features you need to keep your personal files safe, accessible, and easy to share."
          features={[
            { id: 1, name: featuresNames[0], active: true },
            { id: 2, name: featuresNames[1], active: true },
            { id: 3, name: featuresNames[2], active: true },
            { id: 4, name: featuresNames[3], active: true },
          ]}
        />
      </div>
    </div>
  );
};

export default Pricing;
