type Button = {
  text: string;
  type: "button" | "submit" | "reset";
  icon?: React.ReactNode;
  onClick?: () => void;
};

const Button = ({ text, type, icon }: Button) => {
  return (
    <button
      type={type}
      className="w-full h-full py-2 px-2 flex gap-2 leading-3 bg-primary rounded-md justify-center items-center font-bold text-white"
    >
      {icon}
      {text}
    </button>
  );
};
export default Button;
