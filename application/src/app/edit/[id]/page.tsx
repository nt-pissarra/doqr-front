"use client";

import Title from "../../components/Title/Title";
import Button from "../../components/Button/Button";
import { useEffect, useState } from "react";
import { UserPayload } from "@/types/userType";
import { useRouter, usePathname } from "next/navigation";
import UserFormGroup from "../../components/Inputs/UserFormGroup";

export default function Edit() {
  const router = useRouter();
  const pathname = usePathname();
  const id = pathname?.split("/").pop();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    cpf: "",
    phone: "",
    birthDate: "",
    employmentType: "",
    status: "",
  });

  const deleteUser = (userId: number) => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/${userId}`, {
      method: "DELETE",
    }).then(() => router.push("/"));
  };

  const handleChange = (field: string, value: string | number) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const payload = formData as UserPayload;

    if (typeof payload.birthDate === "string" && payload.birthDate) {
      const [day, month, year] = payload.birthDate.split("/");
      payload.birthDate = new Date(`${year}-${month}-${day}`);
    }

    fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then(() => router.push("/"));
  };

  useEffect(() => {
    if (id) {
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/${id}`)
        .then((response) => response.json())
        .then((json) => {
          const date = new Date(json.birthDate).toLocaleDateString("pt-BR");
          setFormData({
            name: json.name || "",
            email: json.email || "",
            cpf: json.cpf || "",
            phone: json.phone || "",
            birthDate: date || "",
            employmentType: json.employmentType || "",
            status: json.status || "",
          });
        });
    }
  }, []);

  return (
    <>
      <Title title="Editar Funcionário" />

      <div className="form-container mt-8">
        <form onSubmit={handleSubmit} className="p-5 flex flex-col gap-8">
          <UserFormGroup formData={formData} handleChange={handleChange} />

          <div className="flex gap-3">
            <div className="w-20 h-[35px]">
              <Button
                type="button"
                text="Excluir"
                variant="secondary"
                onClick={() => {
                  deleteUser(+id!);
                }}
              />
            </div>

            <div className="w-20 h-[35px]">
              <Button type="submit" text="Salvar" />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
