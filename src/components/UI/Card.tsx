import "./Card.scss";

interface CardProps {
  children: string | React.ReactNode | React.ReactNode[];
}

const Card: React.FC<CardProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default Card;
