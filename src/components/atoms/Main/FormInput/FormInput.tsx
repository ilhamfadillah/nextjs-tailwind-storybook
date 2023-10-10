import { ForwardRefRenderFunction, forwardRef } from "react";

interface IFormInput {
  type: "text" | "password" | "email";
  placeholder: string;
  showMessage: boolean;
  errorMessage: string;
}

const FormInput: ForwardRefRenderFunction<HTMLInputElement, IFormInput & Record<string, unknown>> = ({
  type,
  placeholder,
  showMessage,
  errorMessage,
}, ref) => {
  return (
    <>
      <input
        className="p-[15px] text-[15px] w-full transition-all duration-350 ease focus:border-black border-2 border-[#FFBC01] focus:rounded-none focus:outline-none"
        type={type}
        placeholder={placeholder}
        ref={ref}
      />
      <label className={showMessage ? "block" : "hidden"}>{errorMessage}</label>
    </>
  );
};

export default forwardRef(FormInput);