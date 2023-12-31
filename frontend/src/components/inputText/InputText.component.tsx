import { InputProps } from "./InputText.types";

import "./InputText.css";

export const InputTextComponent: React.FC<InputProps> = ({
  type,
  value,
  label,
  handleChange,
  placeholder,
  name,
  maxLength,
}) => {
  return (
    <div className={"inputText"}>
      <p>{label && label}</p>
      <input
        type={type ? type : "text"}
        value={value}
        name={name}
        onChange={handleChange}
        placeholder={placeholder}
        maxLength={maxLength}
      />
    </div>
  );
};
