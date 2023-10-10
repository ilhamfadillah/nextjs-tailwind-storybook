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
                  <Link className="block" href="/">
                    Content management
                  </Link>
                  <Link className="block" href="/">
                    Marketing automation
                  </Link>
                  <Link className="block" href="/">
                    Personalization
                  </Link>
                  <Link className="block" href="/">
                    E-commerce
                  </Link>
                  <Link className="block" href="/">
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
                  <Link className="block" href="/">
                    About uxbee
                  </Link>
                  <Link className="block" href="/">
                    Our way of working
                  </Link>
                  <Link className="block" href="/">
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
                  <Link className="block" href="/">
                    Elektronicaweg 37
                  </Link>
                  <Link className="block" href="/">
                    2628 XG Delft
                  </Link>
                  <Link className="block" href="/">
                    015 - 79 00 100
                  </Link>
                  <Link className="block" href="/">
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
            <div className="flex flex-inline space-x-5 xs:justify-center">
              <img
                src="https://uxbee.eu/-/media/project/uxbee/uxbee/logos/logo-sitecore-gold-implementation-partner.png?la=nl-nl&hash=F4644345E74A70637FA270662B97C8FC"
                alt="sitecore"
                className="h-[82px] w-auto"
              />
              <img
                src="https://uxbee.eu/-/media/project/uxbee/uxbee-new/partners-uxbee/partner-badge-leadinfo.png?la=nl-nl&h=69&w=150&hash=C96776083E42C596A0FD01A4E7DBE43A"
                alt="lead_info"
                className="h-[69px] w-auto"
              />
            </div>
            {/* END SITECORE */}
          </div>
        </div>
      </div>
    </>
  );
};
