'use client'

import { FaAngleUp } from "react-icons/fa6";

export const ButtonScrollTop = () => {
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Untuk efek scroll yang halus
    });
  };

  return (
    <>
      <button
        onClick={scrollToTop}
        type="button"
        className="bg-[#FFBC01] p-3 rounded-l-3xl rounded-tr-3xl"
      >
        <FaAngleUp />
      </button>
    </>
  );
};
