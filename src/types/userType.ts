export type User = {
  id: number;
  name: string;
  email: string;
  cpf: string;
  phone: string;
  birthDate: Date;
  employmentType: number;
  status: number;
};

export type UserPayload = {
  name: string;
  email: string;
  cpf: string;
  phone: string;
  birthDate: Date | string;
  employmentType: number | string;
  status: number | string;
};

export type UserInputs = {
  name: string;
  email: string;
  cpf: string;
  phone: string;
  birthDate: string;
  employmentType: string;
  status: string;
};
