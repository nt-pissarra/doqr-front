export type User = {
  id: number;
  name: string;
  email: string;
  cpf: string;
  phone: string;
  birthDate: Date;
  // 0 -> CLT / 1 -> PJ
  employmentType: number;
  // 0 -> Inativo / 1 -> Ativo
  status: number;
};
