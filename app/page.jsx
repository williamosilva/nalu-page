"use client";
import NaluTable from "nalu-table";
import "nalu-table/dist/style.css";
import Sidebar from "../components/ui/Sidebar";

export default function Main() {
  return (
    <div className="">
      <Sidebar variant="sapphire" theme="light">
        {" "}
        <NaluTable />
      </Sidebar>
    </div>
  );
}
