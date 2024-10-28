"use client";
import NaluTable from "nalu-table";
import "nalu-table/dist/style.css";
import Sidebar from "../components/ui/Sidebar";

export default function Main() {
  return (
    <Sidebar variant="sapphire" theme="light" size="">
      {" "}
      <NaluTable />
    </Sidebar>
  );
}
