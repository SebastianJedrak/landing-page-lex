import "./Toast.scss";

interface ToastProps {
  label: string;
  type?: "info" | "warning";
}

const Toast: React.FC<ToastProps> = ({ label, type = "info" }) => {
  return (
    <div>
      {label} {type}
    </div>
  );
};

export default Toast;
