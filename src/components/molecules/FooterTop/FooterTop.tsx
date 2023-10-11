import { ButtonLinkEmail, ButtonLinkPhone } from "@/components/atoms/Footer/ButtonLink/ButtonLink";
import Link from "next/link";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

export const FooterTop = () => {
  return (
    <>
      <div id="footer-top">
        <div className="bg-gradient-to-b from-black from-50% to-white to-50%">
          <div className="flex flex-wrap mx-auto w-fit xs:max-w-[95%] sm:max-w-[700px] md:max-w-[760px]">
            <div className="flex w-full p-2 bg-[#FFBC01] rounded-3xl justify-center">
              <div className="pt-[35px] xs:px-[20px] mx-[40px] pb-[25px]">
                <div className="flex flex-wrap">
                  <div className="max-w-[400px] xs:max-w-fit sm:max-w-fit md:max-w-fit w-full inline">
                    <h4 className="text-[24px] font-semibold leading-[28px]">
                      Uxbee creates a successful e-commerce & marketing platform
                      together with you.
                    </h4>
                    <p className="mt-[25px] md:mt-[5px] sm:mt-[5px] xs:mt-[5px] xs:mb-[20px] sm:mb-[20px] md:mb-[20px] text-[17px] leading-[30px]">
                      Let technology work in your favor from now on and bring
                      magic to your e-commerce & marketing activities.
                    </p>
                  </div>
                  <div className="max-w-[315px] w-full inline">
                    <h4 className="text-[24px] font-semibold leading-[28px] mb-[16px]">
                      Do you have a question? Or would you like to know more
                      about uxbee?
                    </h4>
                    <div className="flex items-center">
                      <div className="pr-[20px]">
                        <img
                          src="https://uxbee.eu/-/media/project/uxbee/uxbee-new/team/yellow-background/theo-contact.png?h=78&iar=0&w=78&hash=ABC132BA690D40E8787560D116DDEDE4"
                          alt=""
                          className="w-[78px] h-auto"
                        />
                      </div>
                      <div className="flex flex-col space-y-[10px] text-[16px]">
                        <ButtonLinkPhone linkTo="tel://+31157900100" label="015 - 79 00 100" />
                        <ButtonLinkEmail linkTo="mailto:hello@uxbee.nl" label="hello@uxbee.nl" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
