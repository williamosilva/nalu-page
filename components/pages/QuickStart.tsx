export default function QuickStart() {
  return (
    <div className="bg-[#F7F7F7] p-4 rounded-lg text-black text-sm flex flex-col gap-2 w-full ">
      <span className="flex gap-1">
        <span className="text-[#d53042] flex gap-1">
          import <p className="text-[#e36209]">NaluTable</p> from
        </span>
        <p className="text-[#032f62]">&quot;nalu-table&quot;</p>;
      </span>
      <span className="flex gap-1">
        <span className="text-[#d53042] flex gap-1">
          import{" "}
          <p className="text-[#032f62]">
            &quot;nalu-table/dist/style.css&quot;
          </p>
        </span>
        ;
      </span>
      <span className="flex gap-1 mt-4">
        <span className="text-[#d53042] flex gap-1">
          function <p className="text-[#e36209]">App</p>
        </span>
        ( ) {"{"}
      </span>
      <span className="flex gap-1 pl-2">
        <span className="text-[#d53042] flex gap-1">
          const <p className="text-[#000000]  ">tableData</p>
        </span>
        <p className="text-[#032f62]  "> = </p>
        {"{"}
      </span>
      <pre className="text-black whitespace-pre-wrap break-words pl-8">
        <span className="inline-flex flex-wrap items-center gap-1 text-[#005cc5]">
          tabs:<p className="text-black">{"["} </p>
        </span>
        <div className="flex flex-col gap-2 pl-4">
          <span className="inline-flex flex-wrap items-center gap-1">
            {"{"}
            <span className="text-[#005cc5]">title</span>:
            <span className="text-[#032f62]">&apos;Tab&apos;</span>,
            <span className="text-[#005cc5]">quantity</span>:
            <span className="text-[#032f62]">10</span>,
            <span className="text-[#005cc5]">checked</span>:
            <span className="text-[#032f62]">true</span>,
            <span className="text-[#005cc5]">special</span>:
            <span className="text-[#032f62]">true</span>
            {"}"},
          </span>
          <span className="inline-flex flex-wrap items-center gap-1">
            {"{"}
            <span className="text-[#005cc5]">title</span>:
            <span className="text-[#032f62]">&apos;Tab 2&apos;</span>,
            <span className="text-[#005cc5]">quantity</span>:
            <span className="text-[#032f62]">20</span>,
            <span className="text-[#005cc5]">checked</span>:
            <span className="text-[#032f62]">false</span>,
            <span className="text-[#005cc5]">special</span>:
            <span className="text-[#032f62]">false</span>
            {"}"}
          </span>
        </div>
        {"]"},
        <span className="text-[#005cc5] inline-flex flex-wrap items-center gap-1">
          tableInfo:<p className="text-black">{"{"} </p>
        </span>
        <div className="flex flex-col gap-2 pl-4">
          <span className="text-[#005cc5] inline-flex flex-wrap items-center gap-1">
            columns:<p className="text-black">{"["}</p>
          </span>
          <div className="flex flex-col gap-2 pl-4">
            <span className="inline-flex flex-wrap items-center gap-1">
              {"{"}
              <span className="text-[#005cc5]">header</span>:
              <span className="text-[#032f62]">&apos;Name&apos;</span>,
              <span className="text-[#005cc5]">ref</span>:
              <span className="text-[#032f62]">&apos;name&apos;</span>,
              <span className="text-[#005cc5]">alignment</span>:
              <span className="text-[#032f62]">&apos;left&apos;</span>,
              <span className="text-[#005cc5]">ordering</span>:
              <span className="text-[#032f62]">true</span>
              {"}"},
            </span>
            <span className="inline-flex flex-wrap items-center gap-1">
              {"{"}
              <span className="text-[#005cc5]">header</span>:
              <span className="text-[#032f62]">&apos;Price&apos;</span>,
              <span className="text-[#005cc5]">ref</span>:
              <span className="text-[#032f62]">&apos;price&apos;</span>,
              <span className="text-[#005cc5]">alignment</span>:
              <span className="text-[#032f62]">&apos;right&apos;</span>,
              <span className="text-[#005cc5]">ordering</span>:
              <span className="text-[#032f62]">true</span>
              {"}"}
            </span>
          </div>
          {"]"},
          <span className="text-[#005cc5] inline-flex flex-wrap items-center gap-1">
            items: <p className="text-black">{"["}</p>
          </span>
          <div className="flex flex-col gap-2 pl-4">
            <span className="inline-flex flex-wrap items-center gap-1">
              {"{"}
              <span className="text-[#005cc5]">id</span>:
              <span className="text-[#032f62]">1</span>,
              <span className="text-[#005cc5]">name</span>:
              <span className="text-[#032f62]">&apos;Item 1&apos;</span>,
              <span className="text-[#005cc5]">price</span>:
              <span className="text-[#032f62]">10.99</span>
              {"}"},
            </span>
            <span className="inline-flex flex-wrap items-center gap-1">
              {"{"}
              <span className="text-[#005cc5]">id</span>:
              <span className="text-[#032f62]">2</span>,
              <span className="text-[#005cc5]">name</span>:
              <span className="text-[#032f62]">&apos;Item 2&apos;</span>,
              <span className="text-[#005cc5]">price</span>:
              <span className="text-[#032f62]">20.99</span>
              {"}"}
            </span>
          </div>
          {"],"}
        </div>
        {"},"}
      </pre>{" "}
      <p className="ml-5">{"};"}</p>
      <span className="ml-5 text-[#e36209] flex gap-1">
        return<p className="text-black"> {"("}</p>
      </span>
      <span className="ml-7 text-[#005cc5] flex ">
        {"<"}
        <p className="text-[#22863a]">NaluTable</p>
      </span>
      <span className="ml-12 -mt-1 text-[#005cc5] flex ">
        tableData=
        <p className="text-black">{"{tableData}"}</p>
      </span>
      <span className="ml-12 -mt-1 text-[#005cc5] flex ">
        header=
        <p className="text-[#005cc5]">{"true"}</p>
      </span>
      <span className="ml-12 -mt-1 text-[#005cc5] flex ">
        tableData=
        <p className="text-[#032f62]">&quot;sapphire&quot;</p>
      </span>
      <span className="ml-12 -mt-1 text-[#005cc5] flex ">
        theme=
        <p className="text-[#032f62]">&quot;light&quot;</p>
      </span>
      <span className="ml-7 text-[#005cc5] flex ">{"/>"}</span>
      <span className="ml-3 text-black flex ">{");"}</span>
      <span className="ml-0 text-black flex ">{"}"}</span>
    </div>
  );
}
