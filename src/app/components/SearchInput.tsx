import React from "react";

const SearchInput = () => {
  return (
    <input
      className="h-[35px] w-[383px] pl-3 py-2 border border-[#CDCAD2] rounded-md focus:outline-none focus:border-[#bfbbc5]"
      type="text"
      placeholder="Buscar Funcionário..."
    />
  );
};

export default SearchInput;
