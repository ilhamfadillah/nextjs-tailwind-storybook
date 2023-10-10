interface IContactTitle {
  lineOne: string;
  lineTwo: string;
}

export const ContactTitle = ({ lineOne, lineTwo }: IContactTitle) => {
  return (
    <>
      <div className="text-[60px] font-semibold mb-[45px] font-allroundgothic">
        <p className="text-[#FFBC01]">{lineOne}</p>
        <p className="text-white">{lineTwo}</p>
      </div>
    </>
  );
};
