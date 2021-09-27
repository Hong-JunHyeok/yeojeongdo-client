import { InputHTMLAttributes } from "react";
import { InputContainer } from "./inputStyles";

interface InputProps {}

const Input: React.VFC<InputHTMLAttributes<InputProps>> = ({
  type,
  placeholder,
  value,
  onChange,
  name,
}) => {
  return (
    <InputContainer
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
    />
  );
};

export default Input;
