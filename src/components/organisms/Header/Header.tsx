import HeaderLarge from "../../molecules/HeaderLarge";
import HeaderResponsive from "../../molecules/HeaderResponsive";
import { HeaderSmall } from "../../molecules/HeaderSmall/HeaderSmall";

export const Header = () => {
  return (
    <>
    <header className="fixed">
      <HeaderSmall />
      <HeaderLarge />
      <HeaderResponsive />
    </header>
    </>
  );
}