import Link from "next/link";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

interface IButtonLink {
  label: string;
  linkTo: string;
}

export const ButtonLinkPhone = ({ label, linkTo }: IButtonLink) => {
  return (
    <>
      <div className="flex items-center py-[8px] px-[15px] bg-white rounded-l-3xl rounded-tr-3xl hover:bg-black hover:text-[#FFBC01] transition ease delay-350">
        <span className="mr-2 text-[#FFBC01]">
          <FaPhoneAlt />
        </span>
        <Link href={linkTo}>{label}</Link>
      </div>
    </>
  );
};

export const ButtonLinkEmail = ({ label, linkTo }: IButtonLink) => {
  return (
    <>
      <div className="flex items-center py-[4px] px-[15px] bg-white rounded-l-3xl rounded-tr-3xl hover:bg-black hover:text-[#FFBC01] transition ease delay-350">
        <span className="mr-2 text-[#FFBC01]">
          <FaEnvelope />
        </span>
        <Link href={linkTo}>{label}</Link>
      </div>
    </>
  );
};
