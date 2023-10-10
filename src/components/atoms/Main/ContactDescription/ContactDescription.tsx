interface IContactDescription {
  paragraph: string;
}

export const ContactDescription = ({ paragraph }: IContactDescription) => {
  return (
    <>
      <p className="text-white text-[17px] leading-[30px] mb-[35px]">
        {paragraph}
      </p>
    </>
  );
};
