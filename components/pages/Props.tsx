import React from "react";

export default function Props() {
  const data = [
    {
      prop: "tableData",
      type: "array[]",
      default: "-",
      description: "Required. Array of data to display in the table",
    },
    {
      prop: "header",
      type: "boolean",
      default: "true",
      description: "Search header visibility",
    },
    {
      prop: "plusButton",
      type: "boolean",
      default: "true",
      description: "Custom add button component",
    },
    {
      prop: "totalItems",
      type: "number",
      default: "0",
      description: "Total number of items for pagination",
    },
    {
      prop: "itemsPerPage",
      type: "number",
      default: "10",
      description: "Number of items per page",
    },
    {
      prop: "currentPageProp",
      type: "number",
      default: "1",
      description: "Current page number",
    },
    {
      prop: "loading",
      type: "boolean",
      default: "false",
      description: "Loading state of the table",
    },
    {
      prop: "size",
      type: "string",
      default: '"default"',
      description: "Table size variant",
    },
    {
      prop: "variant",
      type: "string",
      default: '"sapphire"',
      description: "Visual variant of the table",
    },
    {
      prop: "theme",
      type: "string",
      default: '"light"',
      description: 'Color theme ("light" or "dark")',
    },
    {
      prop: "modalTitle",
      type: "string",
      default: '""',
      description: "Title for the modal",
    },
    {
      prop: "language",
      type: "string",
      default: '"en"',
      description: "Table language (Only 'en' and 'pt-br' are supported)",
    },
    {
      prop: "selectedTab",
      type: "string",
      default: '""',
      description: "Currently selected tab",
    },
    {
      prop: "activeTab",
      type: "string",
      default: '""',
      description: "Currently active tab",
    },
    {
      prop: "brandlogo",
      type: "string",
      default: '"https://placehold.co/400"',
      description: "URL for the logo image",
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
