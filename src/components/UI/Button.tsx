import "./Button.scss";
import { motion } from "framer-motion";

interface ButtonProps {
  label: string;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "tertiary" | "white" | "twitter";
  fullWidth?: boolean;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  label,
  type = "button",
  variant = "primary",
  fullWidth = false,
  disabled = false,
}) => {
  return (
    <motion.button
      className={`button-ui button-middle ${variant} ${
        fullWidth && "full-width"
      }`}
      type={type}
      disabled={disabled}
      whileHover={{ scale: 1.05, opacity: 0.8 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
    >
      {label}
    </motion.button>
  );
};

export default Button;
