import { TableData } from "./TypeData";

// Itens para as abas de "Activated" e "Archived"
const ItemsForActiveTab = [
  {
    id: 2,
    code: "PRD002",
    name: "LG 27' Monitor",
    price: 2199.99,
    stock: 23,
  },
];

const ItemsForArchivedTab = [
  {
    id: 13,
    code: "PRD001",
    name: "XPS 13 Laptop",
    price: 8999.99,
    stock: 15,
    variations: [
      {
        id: 101,
        code: "PRD001-S",
        name: "XPS 13 - SSD 512GB",
        price: 9499.99,
        stock: 8,
      },
    ],
  },
];

// Função que ajusta a exibição dos dados conforme a aba ativa
export const getTableDataWithTabs = (
  data: TableData,
  showTabs: boolean,
  activeTab: string
): TableData => {
  if (!showTabs) {
    const { tableInfo } = data;
    return { tableInfo };
  }

  // Atualiza os itens da tabela conforme a aba ativa
  const updatedItems =
    activeTab === "Activated" ? ItemsForActiveTab : ItemsForArchivedTab;

  return {
    ...data,
    tableInfo: {
      ...data.tableInfo,
      items: updatedItems,
    },
  };
};
