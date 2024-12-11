const Header = () => {
  return (
    <div className="border-b border-[#E5E3E9]">
      <header className="container mx-auto flex justify-between h-16 items-center">
        <div className="flex gap-2 items-center">
          <div className="bg-primary text-white w-8 h-8 rounded">
            <span className="inline-block pl-1 pt-1 font-bold">TD</span>
          </div>
          <span className="font-bold">Teste Doqr</span>
        </div>
        <div className="flex gap-2">
          <span className="w-6 h-6 bg-[#D0C1F4] rounded-full"></span>
          <span className="font-bold">Nathanael</span>
        </div>
      </header>
    </div>
  );
};

export default Header;
