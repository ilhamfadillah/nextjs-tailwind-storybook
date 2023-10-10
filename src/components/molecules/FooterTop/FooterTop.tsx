import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

export const FooterTop = () => {
  return (
    <>
      <div id="footer-top">
        <div className="bg-gradient-to-b from-black from-50% to-white to-50%">
          <div className="flex flex-wrap mx-auto w-fit xs:max-w-[95%] sm:max-w-[700px] md:max-w-[760px]">
            <div className="flex w-full p-2 bg-[#FFBC01] rounded-3xl justify-center">
              <div className="pt-[35px] xs:px-[20px] sm:px-[20px] md:px-[20px] lg:px-[49px] xl:px-[49px] 2xl:px-[49px] 3xl:px-[49px] pb-[25px]">
                <div className="flex flex-wrap">
                  <div className="max-w-[400px] xs:max-w-fit sm:max-w-fit md:max-w-fit w-full inline xs:mr-[40px] sm:mr-[40px] md:mr-[40px] lg:mr-[98px] xl:mr-[98px] 2xl:mr-[98px] 3xl:mr-[98px]">
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
                        />
                      </div>
                      <div className="flex flex-col space-y-[10px] text-[16px]">
                        <div className="flex items-center py-[8px] px-[15px] bg-white rounded-l-3xl rounded-tr-3xl hover:bg-black hover:text-[#FFBC01] transition ease delay-350">
                          <span className="mr-2 text-[#FFBC01]">
                            <FaPhoneAlt />
                          </span>
                          <a href="tel://+31157900100">015 - 79 00 100</a>
                        </div>
                        <div className="flex items-center py-[4px] px-[15px] bg-white rounded-l-3xl rounded-tr-3xl hover:bg-black hover:text-[#FFBC01] transition ease delay-350">
                          <span className="mr-2 text-[#FFBC01]">
                            <FaEnvelope />
                          </span>
                          <a href="mailto:hello@uxbee.nl">hello@uxbee.nl</a>
                        </div>
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
