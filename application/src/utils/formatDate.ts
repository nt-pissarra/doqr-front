export const formatDate = (value: string) => {
  const numericValue = value.replace(/\D/g, "");

  return numericValue
    .replace(/(\d{2})(\d)/, "$1/$2")
    .replace(/(\d{2})(\d)/, "$1/$2");
};
