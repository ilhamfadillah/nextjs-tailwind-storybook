import ContactDescription from "@/components/atoms/Main/ContactDescription";
import ContactInformation from "@/components/atoms/Main/ContactInformation";
import ContactTitle from "@/components/atoms/Main/ContactTItle";
import { FaLinkedinIn } from "react-icons/fa";

export const MainGridLeft = () => {
  return (
    <>
      <div className="sm:w-[410px] md:w-full lg:w-1/2 xl:w-1/2 p-2">
        <div className="pl-[50px] xs:pl-[10px] sm:pl-[20px] md:pl-[30px] sm:mr-[50px] mr-[100px]">
          <ContactTitle lineOne="Contact" lineTwo="with uxbee" />
          <ContactDescription paragraph="Are you eager to find out how our ecommerce and marketing technology can benefit your organization? Engaging in a conversation with uxbee is cost-free and can provide valuable insights." />
          
          <h4 className="text-[30px] mb-[10px] text-white">
            Contact Information
          </h4>
          
          <ContactInformation logoSrc="https://uxbee.eu/assets/images/contact/icon-02.svg" logoAlt="office_address" linkTo="https://goo.gl/maps/g5aY4qdzbpABG5D98" label="Elektronicaweg 37, 2628 XG Delft" />
          <ContactInformation logoSrc="https://uxbee.eu/assets/images/contact/icon-03.svg" logoAlt="office_phone" linkTo="tel://+31157900100" label="00 31 (0) 15 - 79 00 100" />
          <ContactInformation logoSrc="https://uxbee.eu/assets/images/contact/icon-01.svg" logoAlt="office_email" linkTo="mailto:hello@uxbee.nl" label="hello@uxbee.nl" />
          
          <div className="flex text-black mt-[45px] text-[23px]">
            <a
              href="https://www.linkedin.com/company/uxbee-experience/"
              target="_blank"
              rel="noopener"
            >
              <div className="bg-[#FFBC01] px-[9px] py-[9px] rounded-3xl transition ease delay-350 border-[1px] border-[#FFBC01] hover:bg-transparent hover:text-[#FFBC01]">
                <FaLinkedinIn />
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
