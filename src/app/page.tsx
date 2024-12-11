import SearchInput from "./components/SearchInput";

export default function Home() {
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-primary-text font-bold text-4xl">
        Controle de Funcionários
      </h1>
      <h2 className="font-bold text-xl">Empresa DoQR Tecnologia</h2>

      <div className="mt-8">
        <SearchInput />
      </div>
    </div>
  );
}
