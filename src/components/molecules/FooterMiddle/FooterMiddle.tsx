"use client";

import Link from "next/link";
import { MouseEventHandler, useState } from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";

export const FooterMiddle = () => {
  const [uxbeeIsShow, setUxbeeIsShow] = useState(false);
  const [solutionIsShow, setSolutionIsShow] = useState(false);
  const [aboutUsIsShow, setAboutUsIsShow] = useState(false);

  return (
    <>
      <div id="footer-middle">
        <div className="flex flex-wrap justify-center w-full mx-auto max-w-[1210px] sm:max-w-[80%] md:max-w-[80%]">
          <div className="w-full pt-[65px] pb-[20px]">
            <div className="grid grid-cols-4 mx-auto">
              {/* COLS-1 */}
              <div
                className="xs:col-span-4 sm:col-span-4 md:col-span-4 mb-[25px] xs:mb-[5px]"
                onClick={() => setUxbeeIsShow(!uxbeeIsShow)}
              >
                <h4 className="xs:flex xs:items-center xs:justify-center text-[20px] mb-[23px] xs:mb-[5px]">
                  Uxbee
                  <span
                    className={`hidden xs:block ${
                      uxbeeIsShow ? "xs:-rotate-180" : "xs:rotate-0"
                    } xs:transition xs:ease xs:delay-350`}
                  >
                    <FaAngleDown />
                  </span>
                </h4>
                <p
                  className={`xs:text-center xs:w-[90%] xs:mx-auto text-[13px] leading-[30px] ${
                    uxbeeIsShow
                      ? "xs:block xs:opacity-100"
                      : "xs:hidden xs:opacity-0"
                  }`}
                >
                  The road of uxbee leads through magic in e-commerce and
                  marketing technology, always to happy customers. Along the
                  way, you benefit from qualified leads, more sales, higher
                  customer satisfaction, positive reviews, and repeat purchases.
                  This is how win-win works.
                </p>
              </div>
              {/* END COLS-1 */}

              {/* COLS-2 */}
              <div
                className="xs:col-span-4 sm:col-span-1 mb-[25px] xs:mb-[5px]"
                onClick={() => setSolutionIsShow(!solutionIsShow)}
              >
                <h4 className="xs:flex xs:items-center xs:justify-center xs:text-center text-[20px] mb-[23px] xs:mb-[5px]">
                  Solutions
                  <span
                    className={`hidden xs:block ${
                      solutionIsShow ? "xs:-rotate-180" : "xs:rotate-0"
                    } xs:transition xs:ease xs:delay-350`}
                  >
                    <FaAngleDown />
                  </span>
                </h4>
                <div
                  className={`xs:text-center xs:w-[90%] xs:mx-auto text-[13px] leading-[30px] ${
                    solutionIsShow
                      ? "xs:block xs:opacity-100"
                      : "xs:hidden xs:opacity-0"
                  } xs:transition-opacity xs:delay-350`}
                >
                  <Link className="block hover:text-[#FFBC01] transition-all duration-350 ease" href="https://uxbee.eu/solutions/content-management">
                    Content management
                  </Link>
                  <Link className="block hover:text-[#FFBC01] transition-all duration-350 ease" href="https://uxbee.eu/solutions/marketing-automation">
                    Marketing automation
                  </Link>
                  <Link className="block hover:text-[#FFBC01] transition-all duration-350 ease" href="https://uxbee.eu/solutions/personalization-and-testing">
                    Personalization
                  </Link>
                  <Link className="block hover:text-[#FFBC01] transition-all duration-350 ease" href="https://uxbee.eu/solutions/e-commerce">
                    E-commerce
                  </Link>
                  <Link className="block hover:text-[#FFBC01] transition-all duration-350 ease" href="https://uxbee.eu/implementation">
                    Successful implementation
                  </Link>
                </div>
              </div>
              {/* END COLS-2 */}

              {/* COLS-3 */}
              <div
                className="xs:col-span-4 sm:col-span-1 mb-[25px] xs:mb-[5px]"
                onClick={() => setAboutUsIsShow(!aboutUsIsShow)}
              >
                <h4 className="xs:flex xs:items-center xs:justify-center xs:text-center text-[20px] mb-[23px] xs:mb-[5px]">
                  About us
                  <span
                    className={`hidden xs:block ${
                      aboutUsIsShow ? "xs:-rotate-180" : "xs:rotate-0"
                    } xs:transition xs:ease xs:delay-350`}
                  >
                    <FaAngleDown />
                  </span>
                </h4>
                <div
                  className={`xs:text-center xs:w-[90%] xs:mx-auto text-[13px] leading-[30px] ${
                    aboutUsIsShow
                      ? "xs:block xs:opacity-100"
                      : "xs:hidden xs:opacity-0"
                  } xs:transition-opacity xs:delay-350`}
                >
                  <Link className="block hover:text-[#FFBC01] transition-all duration-350 ease" href="https://uxbee.eu/about-uxbee">
                    About uxbee
                  </Link>
                  <Link className="block hover:text-[#FFBC01] transition-all duration-350 ease" href="https://uxbee.eu/our-approach">
                    Our way of working
                  </Link>
                  <Link className="block hover:text-[#FFBC01] transition-all duration-350 ease" href="https://uxbee.eu/team-uxbee">
                    Team uxbee
                  </Link>
                </div>
              </div>
              {/* END COLS-3 */}

              {/* COLS-4 */}
              <div className="xs:col-span-4 sm:col-span-1 mb-[25px] xs:mb-[5px]">
                <h4 className="xs:flex xs:items-center xs:justify-center text-[20px] mb-[23px] xs:mb-[5px]">
                  Contact
                </h4>
                <div className="xs:text-center xs:w-[90%] xs:mx-auto text-[13px] leading-[30px]">
                  <Link className="block hover:text-[#FFBC01] transition-all duration-350 ease" href="https://goo.gl/maps/g5aY4qdzbpABG5D98">
                    Elektronicaweg 37
                  </Link>
                  <Link className="block hover:text-[#FFBC01] transition-all duration-350 ease" href="https://goo.gl/maps/g5aY4qdzbpABG5D98">
                    2628 XG Delft
                  </Link>
                  <Link className="block hover:text-[#FFBC01] transition-all duration-350 ease" href="tel://+31157900100">
                    015 - 79 00 100
                  </Link>
                  <Link className="block hover:text-[#FFBC01] transition-all duration-350 ease" href="mailto:hello@uxbee.nl">
                    hello@uxbee.nl
                  </Link>
                </div>
                <div className="mt-[28px] xs:flex xs:justify-center">
                  <div className="bg-[#FFBC01] text-white px-[9px] py-[9px] w-fit rounded-3xl transition ease delay-350 border-[1px] border-[#FFBC01] hover:bg-black hover:border-black">
                    <FaLinkedinIn />
                  </div>
                </div>
              </div>
              {/* END COLS-4 */}
            </div>

            {/* SITECORE */}
            <div className="w-1/3 xs:w-[100%] sm:w-1/2 md:w-1/2 grid grid-cols-2 xs:grid-cols-1 sm:grid-cols-2 space-x-2">
              <div>
                <img
                  src="https://uxbee.eu/-/media/project/uxbee/uxbee/logos/logo-sitecore-gold-implementation-partner.png?la=nl-nl&hash=F4644345E74A70637FA270662B97C8FC"
                  alt="sitecore"
                  className="h-[82px] w-auto"
                />
              </div>
              <div>
                <img
                  src="https://uxbee.eu/-/media/project/uxbee/uxbee-new/partners-uxbee/partner-badge-leadinfo.png?la=nl-nl&h=69&w=150&hash=C96776083E42C596A0FD01A4E7DBE43A"
                  alt="lead_info"
                  className="h-[69px] w-auto"
                />
              </div>
            </div>
            {/* END SITECORE */}
          </div>
        </div>
      </div>
    </>
  );
};
