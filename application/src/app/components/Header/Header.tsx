import HeaderTitle from "./HeaderTitle";
import Logo from "./Logo";
import UserInfo from "./UserInfo";

const Header = () => {
  return (
    <div className="border-b border-[#E5E3E9]">
      <header className="container mx-auto flex justify-between h-16 items-center">
        <HeaderTitle />
        <UserInfo />
      </header>
    </div>
  );
};

export default Header;
