import { FormEmail } from "../FormEmail/FormEmail";

export const MainGridRight = () => {
  return (
    <>
      <div className="xs:flex xs:mx-auto xs:w-full md:w-full lg:w-1/2 xl:w-1/2 p-2 xs:p-[20px]">
        <div className="bg-[#FFBC01] w-full h-full rounded-l-3xl rounded-tr-3xl">
          <div className="py-[60px] px-[55px] xs:py-[10px] xs:px-[20px] sm:py-[20px] sm:px-[20px]">
              <h3 className="text-[30px] font-semibold mb-[25px]">
                How can we help you?
              </h3>
              <p className="text-[17px] mb-[25px] font-semibold">
                Are you ready to truly make a difference for your customers? Do
                you have any questions about us, our ecommerce platform, or our
                marketing technology? Let us know, and we'll be happy to tell
                you all about it!
              </p>
              
              <FormEmail />
          </div>
        </div>
      </div>
    </>
  );
};
