import Button from "./components/Button/Button";
import SearchInput from "./components/Inputs/SearchInput";
import TableHeader from "./components/Table/TableHeader";
import TableRow from "./components/Table/TableRow";
import Title from "./components/Title/Title";
import Plus from "@geist-ui/icons/plus";

export default function Home() {
  const fakeDataList = [
    {
      name: "John Doe",
      email: "johndoe@example.com",
      cpf: "123.456.789-00",
      phone: "(11) 91234-5678",
      birthDate: "1990-05-15",
      employmentType: "CLT",
      status: true,
    },
    {
      name: "Jane Smith",
      email: "janesmith@example.com",
      cpf: "987.654.321-00",
      phone: "(21) 92345-6789",
      birthDate: "1985-10-25",
      employmentType: "PJ",
      status: false,
    },
    {
      name: "Lucas Silva",
      email: "lucas.silva@example.com",
      cpf: "321.654.987-00",
      phone: "(31) 93456-7890",
      birthDate: "1995-08-12",
      employmentType: "CLT",
      status: true,
    },
    {
      name: "Ana Oliveira",
      email: "ana.oliveira@example.com",
      cpf: "456.789.123-00",
      phone: "(41) 94567-8901",
      birthDate: "1988-03-22",
      employmentType: "Freelancer",
      status: false,
    },
    {
      name: "John Doe",
      email: "johndoe@example.com",
      cpf: "123.456.789-00",
      phone: "(11) 91234-5678",
      birthDate: "1990-05-15",
      employmentType: "CLT",
      status: true,
    },
    {
      name: "Jane Smith",
      email: "janesmith@example.com",
      cpf: "987.654.321-00",
      phone: "(21) 92345-6789",
      birthDate: "1985-10-25",
      employmentType: "PJ",
      status: false,
    },
    {
      name: "Lucas Silva",
      email: "lucas.silva@example.com",
      cpf: "321.654.987-00",
      phone: "(31) 93456-7890",
      birthDate: "1995-08-12",
      employmentType: "CLT",
      status: true,
    },
    {
      name: "Ana Oliveira",
      email: "ana.oliveira@example.com",
      cpf: "456.789.123-00",
      phone: "(41) 94567-8901",
      birthDate: "1988-03-22",
      employmentType: "Freelancer",
      status: false,
    },
  ];

  return (
    <>
      <Title />
      <div className="mt-8 flex justify-between items-center">
        <SearchInput />
        <div className="w-[200px]">
          <Button text="Novo Funcionário" icon={<Plus />} />
        </div>
      </div>

      <div className="mt-3">
        <div className="border border-borders rounded-lg overflow-hidden">
          <TableHeader />
          {fakeDataList.map((data, index) => (
            <TableRow key={index} data={data} />
          ))}
        </div>
      </div>
    </>
  );
}
