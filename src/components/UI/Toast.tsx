import "./Toast.scss";

interface ToastProps {
  label: string;
  type?: "info" | "warning";
}

const Toast: React.FC<ToastProps> = ({ label, type = "info" }) => {
  return (
    <div className={`toast-ui toast__${type}`}>
      {label} 
    </div>
  );
};

export default Toast;
