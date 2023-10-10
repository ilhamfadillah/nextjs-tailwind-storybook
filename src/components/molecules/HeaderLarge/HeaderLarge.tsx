import Link from "next/link";
import { FaCaretDown, FaCaretRight } from "react-icons/fa";
import HeaderResponsive from "../HeaderResponsive";

export const HeaderLarge = () => {
  return (
    <div id="large-navbar" className="block xs:hidden sm:hidden md:hidden lg:block xl:block">
      <div className="bg-black w-screen text-[16px] items-center text-white pt-[5px] pb-[20px] font-allroundgothic font-thin">
        <div className="max-w-[1210px] w-[100%] mx-auto">
          <div className="mr-[60px] py-[7px] flex justify-between items-center">
            {/* LOGO */}
            <div className="inline xs:ml-[20px] sm:ml-[20px] md:ml-[20px]">
              <a href="">
                <img
                  src="https://uxbee.eu/assets/images/header/logo.svg"
                  alt="logo_uxbee"
                />
              </a>
            </div>
            {/* END LOGO */}

            {/* NORMAL MENU */}
            <div className="block xs:hidden sm:hidden md:hidden lg:block xl:block">
              <span className="ml-[29px] font-semibold hover:text-[#FFBC01] hover:underline hover:decoration-solid transition ease delay-350">
                <a href="">About us</a>
              </span>
              <span className="ml-[29px] font-semibold inline-block group">
                <span className="flex items-center hover:text-[#FFBC01] hover:underline hover:decoration-solid transition ease delay-350">
                  <a href="">Solutions</a>
                  <span className="ml-1">
                    <FaCaretDown />
                  </span>
                </span>
                <span className="absolute bg-black p-[20px] max-w-[730px] min-w-[160px] w-[100%] hidden group-hover:block">
                  <div className="mt-[10px] text-[17px] text-[#FFBC01] hover:text-white transition ease delay-350">
                    <a href="">Marketing technology</a>
                  </div>
                  <div className="mt-[10px] text-[15px]">
                    <span className="flex items-center hover:text-[#FFBC01] transition ease delay-350">
                      <span className="mr-1">
                        <FaCaretRight />
                      </span>
                      <a href="">Content management</a>
                    </span>
                    <span className="flex items-center hover:text-[#FFBC01] transition ease delay-350">
                      <span className="mr-1">
                        <FaCaretRight />
                      </span>
                      <a href="">Marketing automation</a>
                    </span>
                    <span className="flex items-center hover:text-[#FFBC01] transition ease delay-350">
                      <span className="mr-1">
                        <FaCaretRight />
                      </span>
                      <a href="">Personalization</a>
                    </span>
                  </div>
                  <div className="mt-[20px] text-[17px] text-[#FFBC01] hover:text-white">
                    <a href="">E-commerce</a>
                  </div>
                </span>
              </span>
              <span className="ml-[29px] font-semibold hover:text-[#FFBC01] hover:underline hover:decoration-solid transition ease delay-350">
                <a href="">Our way of working</a>
              </span>
              <span className="ml-[29px] font-semibold hover:text-[#FFBC01] hover:underline hover:decoration-solid transition ease delay-350">
                <a href="">Implementation</a>
              </span>
              <span className="ml-[29px] font-semibold hover:text-[#FFBC01] hover:underline hover:decoration-solid transition ease delay-350">
                <a href="">Customer cases</a>
              </span>
            </div>
            {/* END NORMAL MENU */}

          </div>
        </div>
      </div>
    </div>
  );
};
