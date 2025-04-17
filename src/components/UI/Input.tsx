import "./Input.scss";

interface InputProps {
  value: string | boolean;
  label: string;
  type?: string;
  autoFocus?: boolean;
  required?: boolean;
  onChange: (value: string | boolean, type: string) => void;
}

const Input: React.FC<InputProps> = ({
  value,
  label,
  type = "text",
  autoFocus = false,
  required = false,
  onChange,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (type === "checkbox") {
      onChange(event.target.checked, type);
      return;
    } else {
      onChange(event.target.value, type);
    }
  };

  return (
    <>
      {type !== "checkbox" && (
        <input
          id={label}
          value={value as string}
          className="input-ui input-ui__input button-middle"
          placeholder={label}
          type={type}
          autoFocus={autoFocus}
          required={required}
          onChange={handleChange}
          autoComplete="off"
        />
      )}
      {type === "checkbox" && (
        <div className="input-ui input-ui__checkbox">
          <input
            id={label}
            checked={value as boolean}
            type={type}
            autoFocus={autoFocus}
            required={required}
            onChange={handleChange}
            autoComplete="off"
          />
          <label className="paragraph" htmlFor={label}>
            {label}
          </label>
        </div>
      )}
    </>
  );
};

export default Input;
