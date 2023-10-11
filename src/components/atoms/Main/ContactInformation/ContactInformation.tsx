import Link from "next/link";

interface IContactInformation {
  logoSrc: string;
  logoAlt: string;
  linkTo: string;
  label: string;
}

export const ContactInformation = ({
  logoSrc,
  logoAlt,
  linkTo,
  label,
}: IContactInformation) => {
  return (
    <>
      <div className="flex items-center py-2">
        <span>
          <img src={logoSrc} alt={logoAlt} className="w-[30px] h-auto" />
        </span>
        <span className="ml-4 text-[23px] text-white transition ease delay-350 hover:text-[#FFBC01]">
          <Link href={linkTo}>{label}</Link>
        </span>
      </div>
    </>
  );
};
