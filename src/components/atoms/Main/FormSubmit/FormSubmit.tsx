import { FaArrowRight } from "react-icons/fa";

interface IFormSubmit {
  label: string;
}

export const FormSubmit = ({
  label = "Submit",
}: IFormSubmit) => {
  return (
    <>
      <button
        type="submit"
        className="font-allroundgothic flex items-center bg-black text-white px-[25px] py-[10px] rounded-l-3xl rounded-tr-3xl border-[2px] transition-all duration-350 ease border-black hover:bg-white hover:text-black"
      >
        <span>{label}</span>
        <span className="ml-3">
          <FaArrowRight />
        </span>
      </button>
    </>
  );
};
