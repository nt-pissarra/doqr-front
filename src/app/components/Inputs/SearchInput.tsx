type SearchInputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const SearchInput = ({ value, onChange }: SearchInputProps) => {
  return (
    <input
      className="h-[35px] w-[383px] pl-3 py-2 border border-borders rounded-md focus:outline-none focus:border-[#bfbbc5]"
      type="text"
      placeholder="Buscar Funcionário..."
      value={value}
      onChange={onChange}
    />
  );
};

export default SearchInput;
