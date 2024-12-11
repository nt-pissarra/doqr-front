import React from "react";

const Title = ({ title = "Controle de Funcionários" }) => {
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-primary-text font-bold text-4xl">{title}</h1>
      <h2 className="font-bold text-xl">Empresa DoQR Tecnologia</h2>
    </div>
  );
};

export default Title;
