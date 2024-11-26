import { TableData } from "./TypeData";

// Itens para as abas de "Activated" e "Archived"
const ItemsForActiveTab = [
  {
    id: 1,
    code: "ACT001",
    name: "Samsung Galaxy S23",
    price: 3999.99,
    stock: 10,
  },
  {
    id: 2,
    code: "ACT002",
    name: "Dell Ultrasharp 27' Monitor",
    price: 2999.99,
    stock: 5,
    variations: [
      {
        id: 201,
        code: "ACT002-HDR",
        name: "HDR Edition",
        price: 3499.99,
        stock: 3,
      },
      {
        id: 202,
        code: "ACT002-FHD",
        name: "Full HD Edition",
        price: 2799.99,
        stock: 2,
      },
    ],
  },
  {
    id: 3,
    code: "ACT003",
    name: "Apple Watch Series 9",
    price: 2199.99,
    stock: 25,
  },
  {
    id: 4,
    code: "ACT004",
    name: "Sony PS5 Console",
    price: 4999.99,
    stock: 0,
  },
  {
    id: 5,
    code: "ACT005",
    name: "Google Pixel 7 Pro",
    price: 4399.99,
    stock: 12,
  },
  {
    id: 6,
    code: "ACT006",
    name: "Bose SoundLink Revolve+",
    price: 1699.99,
    stock: 7,
  },
  {
    id: 7,
    code: "ACT007",
    name: "ASUS ROG Zephyrus G14",
    price: 7999.99,
    stock: 6,
    variations: [
      {
        id: 701,
        code: "ACT007-Ryzen7",
        name: "Ryzen 7 Edition",
        price: 7499.99,
        stock: 4,
      },
      {
        id: 702,
        code: "ACT007-Ryzen9",
        name: "Ryzen 9 Edition",
        price: 8499.99,
        stock: 2,
      },
    ],
  },
];

const ItemsForArchivedTab = [
  {
    id: 1,
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
      {
        id: 102,
        code: "PRD001-M",
        name: "XPS 13 - SSD 1TB",
        price: 10499.99,
        stock: 7,
      },
    ],
  },
  {
    id: 2,
    code: "PRD002",
    name: "LG 27' Monitor",
    price: 2199.99,
    stock: 23,
  },
  {
    id: 3,
    code: "PRD003",
    name: "Logitech Mechanical Keyboard",
    price: 899.99,
    stock: 45,
    variations: [
      {
        id: 301,
        code: "PRD003-BR",
        name: "ABNT2 Layout",
        price: 899.99,
        stock: 30,
      },
      {
        id: 302,
        code: "PRD003-US",
        name: "US Layout",
        price: 879.99,
        stock: 15,
      },
    ],
  },
  {
    id: 4,
    code: "PRD004",
    name: "Microsoft Wireless Mouse",
    price: 299.99,
    stock: 0,
  },
  {
    id: 5,
    code: "PRD005",
    name: "iPad Pro 12.9",
    price: 9899.99,
    stock: 8,
    variations: [
      {
        id: 501,
        code: "PRD005-64",
        name: "64GB - WiFi",
        price: 9899.99,
        stock: 3,
      },
      {
        id: 502,
        code: "PRD005-256",
        name: "256GB - WiFi + 5G",
        price: 11899.99,
        stock: 5,
      },
    ],
  },
  {
    id: 6,
    code: "PRD006",
    name: "Logitech C920 Webcam",
    price: 599.99,
    stock: 5,
  },
  {
    id: 7,
    code: "PRD007",
    name: "Sony WH-1000XM4 Headphones",
    price: 2499.99,
    stock: 12,
  },
  {
    id: 8,
    code: "PRD008",
    name: "MacBook Pro M2",
    price: 14999.99,
    stock: 0,
  },
];

// Função que ajusta a exibição dos dados conforme a aba ativa
export const getTableDataWithTabs = (
  data: TableData,
  hideItems: boolean, // Nova prop para esconder os itens
  activeTab: string,
  showTabs: boolean
): TableData => {
  // Se hideItems for true, não exibe nenhum item
  if (hideItems) {
    return {
      ...data,
      tableInfo: {
        columns: [], // Remove todas as colunas
        items: [], // Remove todos os itens
      },
    };
  }
  if (showTabs) {
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
