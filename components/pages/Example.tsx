"use client";
import NaluTable from "nalu-table";
import "nalu-table/dist/style.css";
import Sidebar from "../../components/ui/Sidebar";
import Topbar from "../../components/ui/Topbar";
import colorTheme from "@/components/constants/colorTheme";
import Toast from "../ui/Toast";
import { useState } from "react";

interface ColumnInfo {
  header: string;
  ref: string;
  alignment: "center" | "left" | "right";
  ordering: boolean;
}

interface Variation {
  id: number;
  code: string;
  name: string;
  price: number;
  stock: number;
}

interface Item {
  id: number;
  code: string;
  name: string;
  price: number;
  stock: number;
  variations?: Variation[];
}

interface TableInfo {
  columns: ColumnInfo[];
  items: Item[];
}

interface Data {
  tableInfo: TableInfo;
}

interface ExampleProps {
  variant?: "sapphire" | "crimson";
  theme?: "light" | "dark";
  id?: string;
  header?: boolean;
  tabButton?: React.ReactNode;
  plusButton?: React.ReactNode;
  language: string;
  activeTab: string;
  checkboxButtons?: boolean;
  data: Data;
  loading: boolean;
  onTabChange: (tab: string) => void;
  onTabsSave: (
    tabs: {
      title: string;
      quantity: number;
      checked: boolean;
      special: boolean;
    }[]
  ) => void;
}

export default function Example({
  variant = "sapphire",
  theme = "light",
  id,
  header,

  plusButton,
  language,
  data,
  activeTab,
  onTabChange,
  onTabsSave,
  checkboxButtons,
  loading,
}: ExampleProps) {
  const { backgroundGradient } = colorTheme[variant];
  const [counter, setCounter] = useState(0);
  const [toastMessage, setToastMessage] = useState<string>("");

  console.log("objeto data", data);

  const handleShowToastForIDs = (ids: string[]) => {
    setCounter((prev) => prev + 1);

    if (ids.length === 1) {
      setToastMessage(`A selected item. ID: ${ids[0]}`);
    } else if (ids.length > 1) {
      setToastMessage(`Selected IDs: ${ids.join(", ")}`);
    } else {
      setToastMessage("No ID selected.");
    }
  };

  const handleShowToast = (id: string, actionType: string) => {
    setCounter((prev) => prev + 1);
    setToastMessage(`${getActionMessage(actionType)} for ID: ${id}`);
  };

  const getActionMessage = (actionType: string) => {
    const actionMessages = {
      add: "Add function clicked",
      edit: "Edit item function clicked",
      view: "View item function clicked",
      remove: "Remove item function clicked",
      plusButton: "Plus button clicked",
    };

    return (
      actionMessages[actionType as keyof typeof actionMessages] ||
      "Operação realizada"
    );
  };

  const handleShowToastPlus = () => {
    setCounter((prev) => prev + 1);

    setToastMessage("Plus button clicked");
  };

  return (
    <Sidebar variant={variant} theme={theme} id={id}>
      <div
        className="flex flex-col w-full h-full transition-all duration-300 ease-in-out"
        style={{
          background: `${backgroundGradient.firstColor[theme]}`,
        }}
      >
        <Topbar variant={variant} theme={theme} />
        <div className="px-8 pt-4 pb-6 h-[1000px] flex flex-col overflow-y-auto">
          <div className="h-auto mt-11 ">
            <NaluTable
              itemsPerPage={10}
              totalItems={30}
              language={language}
              variant={variant}
              theme={theme}
              tableData={data}
              handlePageChange={(page) => console.log(page)}
              size="small"
              header={header}
              hasTabs={true}
              activeTab={activeTab}
              loading={loading}
              handleSelectionChange={
                checkboxButtons ? (ids) => handleShowToastForIDs(ids) : null
              }
              handleSaveTabs={(tabs) => {
                onTabsSave(tabs);
              }}
              handleTabChange={(tab) => {
                onTabChange(tab);
              }}
              plusButton={plusButton ? () => handleShowToastPlus() : null}
              addItemFunction={(id) => handleShowToast(id, "add")}
              editItemFunction={(id) => handleShowToast(id, "edit")}
              viewItemFunction={(id) => handleShowToast(id, "view")}
              removeItemFunction={(id) => handleShowToast(id, "remove")}
            />
          </div>
        </div>
      </div>
      <Toast message={toastMessage} counter={counter} duration={2000} />
    </Sidebar>
  );
}
