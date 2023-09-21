export const Generator = {
  Options: function Options(props: { dd: string } & React.PropsWithChildren) {
    return (
      <div className="h-full w-1/4 flex  justify-center items-center">
        <div className="bg-slate-50 p-5 rounded-xl flex-col flex items-center justify-center">
          {props.children}
        </div>
      </div>
    );
  },
  Main: function Options(props: React.PropsWithChildren) {
    return (
      <div className="bg-slate-50 w-3/4 h-2/4 rounded-xl flex items-center justify-center overflow-hidden">
        {props.children}
      </div>
    );
  },
  Code: function Code(
    props: { cssCode: string; tailwindCode: string } & React.PropsWithChildren
  ) {
    const { cssCode, tailwindCode } = props;
    return (
      <div className="">
        <div className="flex flex-row justify-between items-center p-3">
          <div>Code:</div>
          <button
            className="bg-blue-400 py-2 px-3 font-semibold hover:bg-blue-500 rounded-lg"
            onClick={() => navigator.clipboard.writeText(cssCode)}
          >
            Copy!
          </button>
        </div>
        <div className="font-mono bg-white p-3">
          <div>{cssCode}</div>
        </div>
        <div className=" text-sky-400 font-medium ">
          Tailwind CSS Code:
          <div className="font-mono bg-white text-black p-3">
            {tailwindCode}
          </div>
        </div>
      </div>
    );
  },
};
