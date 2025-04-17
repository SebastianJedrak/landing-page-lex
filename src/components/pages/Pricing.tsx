import { useNavigate } from "react-router";
import { useAuth } from "../store/AuthContext";
import PriceBox from "../UI/PriceBox";
import "./Pricing.scss";
import { useEffect } from "react";
import { motion } from "framer-motion";
import Button from "../UI/Button";

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
  const { isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();

  useEffect((): void => {
    if (!isLoggedIn) {
      navigate("/", { replace: true });
    }
  }, [isLoggedIn]);

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="pricing-page">
      <Button label="Logout" variant="tertiary" onClick={handleLogout} />
      <h3>Simple & flexible pricing built for everyone</h3>
      <p className="paragraph pricing-page__description">
        Start with 14-day free trial. No credit card needed. Cancel at anytime.
      </p>
      <motion.div
        className="price-boxes__container"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        transition={{ duration: 1 }}
      >
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
      </motion.div>
    </div>
  );
};

export default Pricing;
