"use client";

import { editIcon, deleteIcon } from "@/assets/icons";
import { User } from "@/types/userType";

type TableRowProps = {
  data: User;
  deleteUser: (id: number) => void;
};

const mapEmploymentType = (employmentType: number): string => {
  switch (employmentType) {
    case 1:
      return "CLT";
    case 2:
      return "PJ";
    default:
      return "Unknown";
  }
};

const TableRow = ({ data, deleteUser }: TableRowProps) => {
  return (
    <div className="table-row">
      <span className="font-bold">{data.name}</span>
      <span>{data.email}</span>
      <span>{data.cpf}</span>
      <span>{data.phone}</span>
      <span>{new Date(data.birthDate).toLocaleDateString("pt-BR")}</span>
      <span>{mapEmploymentType(data.employmentType)}</span>
      <div>
        <span
          className={`h-[25px] py-1 px-[8px] rounded-[12.5px] font-medium inline-flex items-center justify-center ${
            data.status
              ? "text-[#034906] bg-[#B5F8B7]"
              : "text-[#300404] bg-[#FBC9C9]"
          } font-bold`}
        >
          {data.status ? "Ativo" : "Inativo"}
        </span>
      </div>
      <span className="flex items-center gap-3 last:col-span-1">
        <button onClick={() => console.log("clicked e")}>
          <img src={editIcon.src} alt="" />
        </button>
        <button onClick={() => deleteUser(data.id)}>
          <img src={deleteIcon.src} alt="" />
        </button>
      </span>
    </div>
  );
};

export default TableRow;
