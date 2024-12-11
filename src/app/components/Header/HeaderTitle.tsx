import Logo from "./Logo";

const HeaderTitle = () => {
  return (
    <div className="flex gap-2 items-center">
      <Logo />
      <span className="font-bold">Teste Doqr</span>
    </div>
  );
};

export default HeaderTitle;
