import { ButtonScrollTop } from "@/components/atoms/Footer/ButtonScrollTop/ButtonScrollTop";
import Link from "next/link";

export const FooterBottom = () => {
  return (
    <>
      <div id="footer-bottom" className="border-t-[1px] border-[#979797]">
        <div className="flex flex-wrap justify-center mx-auto max-w-[1210px]">
          <div className="w-full py-[52px]">
            <div className="flex flex-row xs:grid xs:grid-cols-1 xs:text-center xs:space-y-3">
              <div className="flex justify-center mb-10">
                <img
                  src="https://uxbee.eu/assets/images/footer/footer-logo.svg"
                  alt=""
                />
              </div>
              <div className="ml-[295px] xs:ml-0">
                <p className="text-[13px]">Copyright 2023</p>
              </div>
              <div className="ml-[45px] xs:ml-0">
                <Link href="/" className="text-[13px]">Terms & Conditions </Link>
              </div>
              <div className="ml-[45px] xs:ml-0">
                <Link href="/" className="text-[13px]">Privacy statement </Link>
              </div>
            </div>
            <div className="flex justify-end mx-10">
              <ButtonScrollTop />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
