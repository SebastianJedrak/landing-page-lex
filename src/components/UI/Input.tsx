import "./Input.scss";

interface InputProps {
  label: string;
  type?: string;
}

const Input: React.FC<InputProps> = ({ label, type = "text" }) => {
  return (
    <>
      {type !== "checkbox" && (
        <input className="input-ui input-ui__input" placeholder={label} type={type} />
      )}
      {type === "checkbox" && (
        <div className="input-ui input-ui__checkbox">
          <input type={type} />
          <label>{label}</label>
        </div>
      )}
    </>
  );
};

export default Input;
