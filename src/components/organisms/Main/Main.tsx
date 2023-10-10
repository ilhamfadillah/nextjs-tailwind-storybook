import MainGridLeft from "@/components/molecules/MainGridLeft";
import MainGridRight from "@/components/molecules/MainGridRight";

export const Main = () => {
  return (
    <>
      <main>
        <div className="pt-[130px] xs:pt-[100px] sm:pt-[100px] md:pt-[100px] pb-[160px] bg-black">
          <div className="grid grid-cols-2 xs:grid-cols-1 justify-center mx-auto max-w-[1210px]">
            <MainGridLeft />
            <MainGridRight />
          </div>
        </div>
      </main>
    </>
  );
};
