"use client";

import { useState, useEffect } from "react";
import { User } from "../types/userType";

import Button from "./components/Button/Button";
import SearchInput from "./components/Inputs/SearchInput";
import TableHeader from "./components/Table/TableHeader";
import TableRow from "./components/Table/TableRow";
import Title from "./components/Title/Title";
import Plus from "@geist-ui/icons/plus";

export default function Home() {
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState<User[]>([]);

  const deleteUser = (userId: number) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/${userId}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => {});
  };

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/users`)
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  useEffect(() => {
    if (search.length >= 3) {
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/users?name=${search}`)
        .then((response) => response.json())
        .then((data) => setUsers(data));
    } else if (search.length === 0) {
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/users`)
        .then((response) => response.json())
        .then((data) => setUsers(data));
    }
  }, [search]);

  return (
    <>
      <Title />
      <div className="mt-8 flex justify-between items-center">
        <SearchInput
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="w-[200px]">
          <a
            href="/add"
            className="w-full py-2 px-2 flex gap-2 leading-3 bg-primary rounded-md justify-center items-center font-bold text-white"
          >
            <Plus />
            Novo Funcionário
          </a>
        </div>
      </div>

      <div className="mt-3">
        <div className="border border-borders rounded-lg overflow-hidden">
          <TableHeader />
          {users.length ? (
            <>
              {users.map((data, index) => (
                <TableRow key={index} data={data} deleteUser={deleteUser} />
              ))}
            </>
          ) : (
            <p className="text-center border-t font-bold py-3">
              Nenhum usuário encontrado
            </p>
          )}
        </div>
      </div>
    </>
  );
}
