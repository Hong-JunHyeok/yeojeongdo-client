import { InputHTMLAttributes } from "react";
import { InputContainer } from "./inputStyles";

const Input: React.VFC<InputHTMLAttributes<any>> = ({
  type,
  placeholder,
  value,
  onChange,
  name,
  id,

  ...props
}) => {
  return (
    <InputContainer
      id={id}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
      {...props}
    />
  );
};

export default Input;
