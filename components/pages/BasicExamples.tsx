export default function BasicExamples() {
  return (
    <div className="flex flex-col gap-4 w-full overflow-hidden  ">
      <div className="flex flex-col gap-1 w-full">
        <h2 className="text-[#320E48] font-semibold">Basic Table</h2>
        {/* Div que terá o scroll */}
        <div className="bg-[#F7F7F7] p-4 rounded-lg text-black text-sm overflow-x-auto">
          {/* Div com o conteúdo - apenas com whitespace-nowrap */}
          <div className="flex flex-col gap-2 whitespace-nowrap">
            <span className="ml-0 text-[#005cc5] flex">
              {"<"}
              <p className="text-[#22863a]">NaluTable</p>
            </span>
            <span className="ml-5 -mt-1 text-[#005cc5] flex">
              tableData=
              <p className="text-black">{"{tableData}"}</p>
            </span>
            <span className="ml-5 -mt-1 text-[#005cc5] flex">
              header=
              <p className="text-[#005cc5]">{"true"}</p>
            </span>
            <span className="ml-5 -mt-1 text-[#005cc5] flex">
              tableData=
              <p className="text-[#032f62]">&quot;crimson&quot;</p>
            </span>
            <span className="ml-5 -mt-1 text-[#005cc5] flex">
              theme=
              <p className="text-[#032f62]">&quot;light&quot;</p>
            </span>
            <span className="ml-0 text-[#005cc5] flex">{"/>"}</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-1 w-full">
        <h2 className="text-[#320E48] font-semibold">
          Table with Custom Actions
        </h2>
        {/* Div que terá o scroll */}
        <div className="bg-[#F7F7F7] p-4 rounded-lg text-black text-sm overflow-x-auto">
          {/* Div com o conteúdo - agora apenas com whitespace-nowrap */}
          <div className="flex flex-col gap-2 whitespace-nowrap">
            <span className="ml-0 text-[#005cc5] flex">
              {"<"}
              <p className="text-[#22863a]">NaluTable</p>
            </span>
            <span className="ml-5 -mt-1 text-[#005cc5] flex">
              tableData=
              <p className="text-black">{"{tableData}"}</p>
            </span>
            <span className="ml-5 -mt-1 text-[#005cc5] flex">
              plusButton=
              <p className="text-black">
                {"{() => console.log('Do something')}"}
              </p>
            </span>
            <span className="ml-5 -mt-1 text-[#005cc5] flex">
              addItemFunction=
              <p className="text-black">{"{() => console.log('Add:', id)}"}</p>
            </span>
            <span className="ml-5 -mt-1 text-[#005cc5] flex">
              editItemFunction=
              <p className="text-black">
                {"{(id) => console.log('Edit:', id)}"}
              </p>
            </span>
            <span className="ml-5 -mt-1 text-[#005cc5] flex">
              removeItemFunction=
              <p className="text-black">
                {"{(id) => console.log('Remove:', id)}"}
              </p>
            </span>
            <span className="ml-0 text-[#005cc5] flex">{"/>"}</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <h2 className="text-[#320E48] font-semibold">
          Paginated Table with Selection
        </h2>
        {/* Div que terá o scroll */}
        <div className="bg-[#F7F7F7] p-4 rounded-lg text-black text-sm overflow-x-auto">
          {/* Div interna com conteúdo que não deve quebrar */}
          <div className="flex flex-col gap-2 whitespace-nowrap">
            <span className="ml-0 text-[#005cc5] flex">
              {"<"}
              <p className="text-[#22863a]">NaluTable</p>
            </span>
            <span className="ml-5 -mt-1 text-[#005cc5] flex">
              tableData=
              <p className="text-black">{"{tableData}"}</p>
            </span>
            <span className="ml-5 -mt-1 text-[#005cc5] flex">
              header=
              <p className="text-[#005cc5]">{"true"}</p>
            </span>
            <span className="ml-5 -mt-1 text-[#005cc5] flex">
              totalItems=
              <p className="text-black">{"{100}"}</p>
            </span>
            <span className="ml-5 -mt-1 text-[#005cc5] flex">
              itemsPerPage=
              <p className="text-black">{"{20}"}</p>
            </span>
            <span className="ml-5 -mt-1 text-[#005cc5] flex">
              handlePageChange=
              <p className="text-black">
                {"{(page) => console.log('Page:', page)}"}
              </p>
            </span>
            <span className="ml-5 -mt-1 text-[#005cc5] flex">
              handleSelectionChange=
              <p className="text-black">
                {"{(selected) => console.log('Selected:', selected)}"}
              </p>
              <p className="text-black opacity-50 ml-3">
                {"// returns an array of items selected in the checkbox"}
              </p>
            </span>
            <span className="ml-0 text-[#005cc5] flex">{"/>"}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
