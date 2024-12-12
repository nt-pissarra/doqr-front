type Button = {
  text: string;
  type: "button" | "submit" | "reset";
  icon?: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  variant?: "primary" | "secondary";
};

const Button = ({ text, type, icon, variant = "primary", onClick }: Button) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`w-full h-full py-2 px-2 flex gap-2 leading-3 ${
        variant === "primary" ? "bg-primary" : "bg-delete"
      } rounded-md justify-center items-center font-bold text-white`}
    >
      {icon}
      {text}
    </button>
  );
};
export default Button;
