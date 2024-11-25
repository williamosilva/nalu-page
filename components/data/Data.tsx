import { TableData } from "./TypeData";

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

export const mockTableData: TableData = {
  tabs: [
    { title: "Activated", quantity: 2, checked: true, special: true },
    { title: "Archived", quantity: 1, checked: true, special: false },
  ],
  tableInfo: {
    columns: [
      { header: "Code", ref: "code", alignment: "center", ordering: true },
      { header: "Product", ref: "name", alignment: "left", ordering: true },
      { header: "Price", ref: "price", alignment: "center", ordering: true },
      { header: "Stock", ref: "stock", alignment: "center", ordering: true },
    ],
    items: ItemsForActiveTab,
  },
};

/**
 * Function that controls the display of tabs and selected items in the table
 * @param data Table data
 * @param showTabs Boolean that controls whether tabs should be displayed
 * @param activeTab Title of the active tab
 * @returns TableData with the updated items and tabs
 */
export const getTableDataWithTabs = (
  data: TableData,
  showTabs: boolean,
  activeTab: string
): TableData => {
  if (!showTabs) {
    // Retorna uma cópia do objeto sem as tabs
    const { tableInfo } = data;
    return { tableInfo };
  }

  // Determina os itens com base na aba ativa
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
