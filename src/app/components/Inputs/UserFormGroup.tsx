import DefaultInput from "./DefaultInput";
import { UserInputs } from "@/types/userType";
import { formatCPF } from "@/utils/formatCpf";
import { formatPhone } from "@/utils/formatPhone";
import { formatDate } from "@/utils/formatDate";

type UserFormGroupProps = {
  formData: UserInputs;
  handleChange: (field: string, value: string | number) => void;
};

const UserFormGroup = ({ formData, handleChange }: UserFormGroupProps) => {
  return (
    <>
      <div className="grid gap-5 grid-cols-[repeat(auto-fill,minmax(360px,1fr))] justify-center">
        <DefaultInput
          label="Nome"
          placeholder="Nome"
          value={formData.name}
          onChange={(e) => handleChange("name", e.target.value)}
        />
        <DefaultInput
          label="E-mail"
          placeholder="e-mail"
          inputType="email"
          value={formData.email}
          onChange={(e) => handleChange("email", e.target.value)}
        />
        <DefaultInput
          label="CPF"
          placeholder="000.000.000-00"
          max={14}
          value={formatCPF(formData.cpf)}
          onChange={(e) => handleChange("cpf", e.target.value)}
        />
      </div>
      <div className="grid gap-5 grid-cols-[repeat(auto-fill,minmax(360px,1fr))] justify-center">
        <DefaultInput
          label="Celular"
          placeholder="Celular"
          max={15}
          value={formatPhone(formData.phone)}
          onChange={(e) => handleChange("phone", e.target.value)}
        />
        <DefaultInput
          label="Data de Nascimento"
          placeholder="00/00/0000"
          max={10}
          value={formatDate(formData.birthDate)}
          onChange={(e) => handleChange("birthDate", e.target.value)}
        />
        <DefaultInput
          label="Tipo de Contratação"
          type="select"
          options={[
            { value: 1, option: "CLT" },
            { value: 2, option: "PJ" },
          ]}
          value={formData.employmentType}
          onChange={(e) => handleChange("employmentType", +e.target.value)}
        />
      </div>
      <div className="grid gap-5 grid-cols-[repeat(auto-fill,minmax(360px,1fr))] justify-center">
        <DefaultInput
          label="Status"
          type="select"
          options={[
            { value: 1, option: "Ativo" },
            { value: 2, option: "Inativo" },
          ]}
          value={formData.status}
          onChange={(e) => handleChange("status", +e.target.value)}
        />
      </div>
    </>
  );
};

export default UserFormGroup;
