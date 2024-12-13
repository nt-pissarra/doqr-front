"use client";

import { ArrowLeft } from "@geist-ui/icons";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Title = ({ title = "Controle de Funcionários" }) => {
  const pathname = usePathname();

  return (
    <div className="mx-auto mt-8">
      {pathname !== "/" && (
        <Link href="/" className="flex gap-2 font-bold cursor-pointer">
          <ArrowLeft /> Voltar
        </Link>
      )}
      <h1 className="mt-4 text-primary-text font-bold text-4xl">{title}</h1>
      <h2 className="font-bold text-xl text-[#545355]">
        Empresa DoQR Tecnologia
      </h2>
    </div>
  );
};

export default Title;
