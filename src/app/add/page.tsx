"use client";

import Title from "../components/Title/Title";
import Button from "../components/Button/Button";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { UserPayload } from "@/types/userType";
import UserFormGroup from "../components/Inputs/UserFormGroup";

export default function Add() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    cpf: "",
    phone: "",
    birthDate: "",
    employmentType: "",
    status: "",
  });

  const handleChange = (field: string, value: string | number) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const payload = formData as UserPayload;

    if (typeof payload.birthDate === "string" && payload.birthDate) {
      const [day, month, year] = payload.birthDate.split("/");
      payload.birthDate = new Date(`${year}-${month}-${day}`);
    }

    fetch(`${process.env.NEXT_PUBLIC_API_URL}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then(() => router.push("/"));
  };

  return (
    <>
      <Title title="Criar Funcionário" />

      <div className="form-container mt-8">
        <form onSubmit={handleSubmit} className="p-5 flex flex-col gap-8">
          <UserFormGroup formData={formData} handleChange={handleChange} />
          <div className="w-[111px] h-[35px]">
            <Button type="submit" text="Cadastrar" />
          </div>
        </form>
      </div>
    </>
  );
}
