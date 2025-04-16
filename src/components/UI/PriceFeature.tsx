import "./PriceFeature.scss";

interface PriceFeatureProps {
  name: string;
  active: boolean;
}

const activeIcon = (
  <svg
    width="14"
    height="10"
    viewBox="0 0 14 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 5.1001L4.97059 8.6001L13 1.6001"
      stroke="#25DAC5"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

const PriceFeature: React.FC<PriceFeatureProps> = ({ name, active }) => {
  return (
    <li className="price-feature-ui">
      {active ? activeIcon : <div className="active-icon__empty"></div>}
      <span className={`paragraph ${!active && "no-active"}`}>{name}</span>
    </li>
  );
};

export default PriceFeature;
