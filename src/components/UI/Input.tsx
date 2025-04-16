import "./Input.scss";

interface InputProps {
  label: string;
  type?: string;
}

const Input: React.FC<InputProps> = ({ label, type = "text" }) => {
  return (
    <>
      {type !== "checkbox" && <input placeholder={label} type={type} />}
      {type === "checkbox" && (
        <div>
          <input type={type} />
          <label>{label}</label>
        </div>
      )}
    </>
  );
};

export default Input;
