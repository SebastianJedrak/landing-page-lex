import "./Button.scss";

interface ButtonProps {
  label: string;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "tertiary" | "white" | "twitter";
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  label,
  type = "button",
  variant = "primary",
  fullWidth = false,
}) => {
  return (
    <button className={`button-ui ${variant} ${fullWidth && "full-width"}`} type={type}>
      {label}
    </button>
  );
};

export default Button;
