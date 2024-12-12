type DefaultInputProps = {
  value: string;
  label: string;
  placeholder?: string;
  type?: "text" | "select";
  options?: { value: number; option: string }[];
  max?: number;
  onChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => void;
};

const DefaultInput = ({
  value,
  label,
  options,
  placeholder,
  type = "text",
  onChange,
  max,
}: DefaultInputProps) => {
  return (
    <div>
      <label className="block font-medium">{label}</label>
      {type === "select" ? (
        <select
          defaultValue=""
          className="invalid:text-gray-400 w-full pl-3 py-2 border border-borders rounded-md focus:outline-none focus:border-[#bfbbc5]"
          required
          onChange={onChange}
        >
          <option disabled hidden value="">
            Selecione uma opção...
          </option>
          {options &&
            options.map((option) => (
              <option
                className="text-black"
                key={option.value}
                value={option.value}
              >
                {option.option}
              </option>
            ))}
        </select>
      ) : (
        <input
          className="w-full pl-3 py-2 border border-borders rounded-md focus:outline-none focus:border-[#bfbbc5]"
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          maxLength={max}
          minLength={max}
          required
        />
      )}
    </div>
  );
};

export default DefaultInput;
