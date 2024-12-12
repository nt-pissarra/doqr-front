const tableTitles = [
  "Nome",
  "E-mail",
  "CPF",
  "Celular",
  "Data de Nascimento",
  "Tipo de Contratação",
  "Status",
  "Ação",
];

const titles = tableTitles.map((title: string, i) => (
  <span className="table-header__title" key={i}>
    {title}
  </span>
));

const TableHeader = () => {
  return <header className="table-header">{titles}</header>;
};

export default TableHeader;
