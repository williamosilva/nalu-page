import React from "react";

export default function EventHandlers() {
  const data = [
    {
      prop: "addItemFunction",
      type: "function",
      default: "() => {}",
      description: "Handler for adding new items",
    },
    {
      prop: "viewItemFunction",
      type: "function",
      default: "() => {}",
      description: "Handler for viewing items",
    },
    {
      prop: "editItemFunction",
      type: "function",
      default: "() => {}",
      description: "Handler for editing items",
    },
    {
      prop: "removeItemFunction",
      type: "function",
      default: "() => {}",
      description: "Handler for removing items",
    },
    {
      prop: "handlePageChange",
      type: "function",
      default: "() => {}",
      description: "Handler for page changes",
    },
    {
      prop: "handleTabChange",
      type: "function",
      default: "() => {}",
      description: "Handler for tab changes",
    },
    {
      prop: "handleSelectionChange",
      type: "function",
      default: "null",
      description: "Handler for row selection changes",
    },
    {
      prop: "handleSaveTabs",
      type: "function",
      default: "() => {}",
      description: "Handler for saving tab changes",
    },
  ];

  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-white">
            <th className="p-4 text-left font-bold border border-gray-200">
              Prop
            </th>
            <th className="p-4 text-left font-bold border border-gray-200">
              Type
            </th>
            <th className="p-4 text-left font-bold border border-gray-200">
              Default
            </th>
            <th className="p-4 text-left font-bold border border-gray-200">
              Description
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr
              key={row.prop}
              className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
            >
              <td className="p-4 border border-gray-200 font-mono text-sm">
                {row.prop}
              </td>
              <td className="p-4 border border-gray-200 font-mono text-sm">
                {row.type}
              </td>
              <td className="p-4 border border-gray-200 font-mono text-sm">
                {row.default}
              </td>
              <td className="p-4 border border-gray-200 text-sm">
                {row.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
