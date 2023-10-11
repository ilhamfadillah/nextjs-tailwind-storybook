import { ForwardRefRenderFunction, forwardRef } from "react";

interface IFormTextarea {
  placeholder: string;
  showMessage: boolean;
  errorMessage: string;
}

const FormTextarea: ForwardRefRenderFunction<
  HTMLTextAreaElement,
  IFormTextarea & Record<string, unknown>
> = ({ placeholder, showMessage, errorMessage, ...restProps }, ref) => {
  return (
    <>
      <textarea
        className="h-[113px] text-[15px] p-[15px] w-full transition-all duration-350 ease focus:border-black border-2 border-[#FFBC01] focus:rounded-none focus:outline-none resize-none"
        placeholder={placeholder}
        ref={ref}
        {...restProps}
      ></textarea>
      <label className={showMessage ? "block" : "hidden"}>{errorMessage}</label>
    </>
  );
};

export default forwardRef(FormTextarea);
