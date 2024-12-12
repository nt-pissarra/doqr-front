type Button = {
  text: string;
  icon?: React.ReactNode;
  onClick?: () => void;
};

const Button = ({ text, icon }: Button) => {
  return (
    <a
      href="/add"
      className="w-full py-2 px-2 flex gap-2 bg-primary rounded-md justify-center items-center font-bold text-white"
    >
      {icon}
      {text}
    </a>
  );
};
export default Button;
