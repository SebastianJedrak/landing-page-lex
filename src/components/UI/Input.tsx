import "./Input.scss";

interface InputProps {
  label: string;
  type?: string;
  autoFocus?: boolean;
  required?: boolean;
}

const Input: React.FC<InputProps> = ({
  label,
  type = "text",
  autoFocus = false,
  required = false,
}) => {
  return (
    <>
      {type !== "checkbox" && (
        <input
          className="input-ui input-ui__input button-middle"
          placeholder={label}
          type={type}
          autoFocus={autoFocus}
          required={required}
        />
      )}
      {type === "checkbox" && (
        <div className="input-ui input-ui__checkbox">
          <input type={type} autoFocus={autoFocus} required={required} />
          <label className="paragraph">{label}</label>
        </div>
      )}
    </>
  );
};

export default Input;
