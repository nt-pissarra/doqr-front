type Button = {
  text: string;
  icon?: React.ReactNode;
};

const Button = ({ text, icon }: Button) => {
  return (
    <button className="w-full py-2 px-2 flex gap-2 bg-primary rounded-md justify-center items-center font-bold text-white">
      {icon}
      {text}
    </button>
  );
};

export default Button;
