"use client";

import { editIcon, deleteIcon } from "@/assets/icons";

type TableRowProps = {
  data: {
    name: string;
    email: string;
    cpf: string;
    phone: string;
    birthDate: string;
    employmentType: string;
    status: boolean;
  };
};

const TableRow = ({ data }: TableRowProps) => {
  return (
    <div className="table-row">
      <span className="font-bold">{data.name}</span>
      <span>{data.email}</span>
      <span>{data.cpf}</span>
      <span>{data.phone}</span>
      <span>{data.birthDate}</span>
      <span>{data.employmentType}</span>
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
        <button onClick={() => console.log("clicked d")}>
          <img src={deleteIcon.src} alt="" />
        </button>
      </span>
    </div>
  );
};

export default TableRow;
