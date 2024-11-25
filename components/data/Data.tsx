import { TableData } from "./TypeData";

export const mockTableData: TableData = {
  tabs: [
    { title: "Ativos", quantity: 45, checked: true },
    { title: "Pendentes", quantity: 8, checked: false },
    { title: "Arquivados", quantity: 23, checked: true },
  ],
  tableInfo: {
    columns: [
      { header: "Código", ref: "code", alignment: "center", ordering: true },
      { header: "Produto", ref: "name", alignment: "left", ordering: true },
      //   {
      //     header: "Categoria",
      //     ref: "category",
      //     alignment: "left",
      //     ordering: true,
      //   },
      { header: "Preço", ref: "price", alignment: "right", ordering: true },
      { header: "Estoque", ref: "stock", alignment: "center", ordering: true },
      //   { header: "Status", ref: "status", alignment: "center", ordering: false },
    ],
    items: [
      {
        id: 1,
        code: "PRD001",
        name: "Notebook Dell XPS 13",
        category: "Eletrônicos",
        price: 8999.99,
        stock: 15,
        status: "Ativo",
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
        name: "Monitor LG 27'",
        category: "Periféricos",
        price: 2199.99,
        stock: 23,
        status: "Ativo",
      },
      {
        id: 3,
        code: "PRD003",
        name: "Teclado Mecânico Logitech",
        category: "Periféricos",
        price: 899.99,
        stock: 45,
        status: "Ativo",
        variations: [
          {
            id: 301,
            code: "PRD003-BR",
            name: "Layout ABNT2",
            price: 899.99,
            stock: 30,
          },
          {
            id: 302,
            code: "PRD003-US",
            name: "Layout US",
            price: 879.99,
            stock: 15,
          },
        ],
      },
      {
        id: 4,
        code: "PRD004",
        name: "Mouse Wireless Microsoft",
        category: "Periféricos",
        price: 299.99,
        stock: 0,
        status: "Inativo",
      },
      {
        id: 5,
        code: "PRD005",
        name: "iPad Pro 12.9",
        category: "Tablets",
        price: 9899.99,
        stock: 8,
        status: "Ativo",
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
        name: "Webcam Logitech C920",
        category: "Periféricos",
        price: 599.99,
        stock: 5,
        status: "Pendente",
      },
      {
        id: 7,
        code: "PRD007",
        name: "Fone de Ouvido Sony WH-1000XM4",
        category: "Áudio",
        price: 2499.99,
        stock: 12,
        status: "Ativo",
      },
      {
        id: 8,
        code: "PRD008",
        name: "MacBook Pro M2",
        category: "Eletrônicos",
        price: 14999.99,
        stock: 0,
        status: "Arquivado",
      },
    ],
  },
};

/**
 * Função que controla a exibição das tabs na tabela
 * @param data Dados da tabela
 * @param showTabs Boolean que controla se as tabs devem ser exibidas
 * @returns TableData com ou sem tabs
 */
export const getTableDataWithTabs = (
  data: TableData,
  showTabs: boolean
): TableData => {
  if (!showTabs) {
    // Retorna uma nova cópia do objeto sem as tabs
    const { tableInfo } = data;
    return { tableInfo };
  }

  // Retorna uma cópia completa do objeto com as tabs
  return { ...data };
};
