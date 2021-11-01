import React, { useCallback } from "react";
import { FormEvent } from "react";
import Button from "../Button/Button";
import { FormContainer } from "./formStyles";

interface FormPropsType {
  onSubmit?: () => void;
  hasSubmit?: boolean;
  submitText?: string;
  className?: string;
}

const Form: React.FC<FormPropsType> = ({ children, ...props }) => {
  const handleSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault();
      props.onSubmit
        ? props.onSubmit()
        : console.error("Unhandled submit function");
    },
    [props]
  );

  return (
    <FormContainer {...props} onSubmit={handleSubmit}>
      {children}
      {props.hasSubmit && <Button>{props.submitText}</Button>}
    </FormContainer>
  );
};

export default Form;
