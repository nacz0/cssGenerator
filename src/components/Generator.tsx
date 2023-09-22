type props = {
  AddIsOpen?: undefined;
};

type addProps = {
  AddCssCode: string;
  AddTailwindCode: string;
  AddIsOpen: boolean;
};

type OptionsProps = {
  cssCode: string;
  tailwindCode: string;
} & (addProps | props);

export const Generator = {
  Options: function Options(props: React.PropsWithChildren) {
    return (
      <div className="h-full w-1/4 flex  justify-center pt-48">
        <div className="bg-slate-50 h-fit p-5 rounded-xl flex-col flex items-center justify-center gap-1">
          {props.children}
        </div>
      </div>
    );
  },
  Main: function Main(props: React.PropsWithChildren) {
    return (
      <div className="bg-slate-50 w-3/4 h-2/4 rounded-xl flex items-center justify-center overflow-hidden">
        {props.children}
      </div>
    );
  },
  Code: function Code(props: OptionsProps) {
    const { cssCode, tailwindCode, AddIsOpen } = props;
    return (
      <div className="flex flex-row gap-8 h-1/5 justify-start w-full pl-96">
        <div className="w-3/5 flex flex-col gap-3">
          <div>
            <div className="flex flex-row justify-between items-center p-3">
              <div className="font-bold text-lg">Code:</div>
              <div className="flex flex-row gap-8">
                {props.AddIsOpen && (
                  <button
                    className="bg-blue-400 py-2 px-3 font-semibold hover:bg-blue-500 rounded-lg text-sm"
                    onClick={() => navigator.clipboard.writeText(cssCode)}
                  >
                    Copy only the shadow
                  </button>
                )}
                <button
                  className="bg-blue-400 py-2 px-3 font-semibold hover:bg-blue-500 rounded-lg"
                  onClick={() =>
                    navigator.clipboard.writeText(
                      cssCode + (AddIsOpen ? ` ${props.AddCssCode}` : "")
                    )
                  }
                >
                  Copy!
                </button>
              </div>
            </div>
            <div className="font-mono bg-white p-3">
              <div>
                {cssCode} {AddIsOpen && props.AddCssCode}
              </div>
            </div>
          </div>
          <div>
            <div>
              <div className="flex flex-row justify-between items-center p-3">
                <div className=" text-sky-400 font-bold text-lg">
                  Tailwind CSS Code:
                </div>
                <div className="flex flex-row gap-8">
                  {props.AddIsOpen && (
                    <button
                      className="bg-sky-400 py-2 px-3 font-semibold hover:bg-sky-500 rounded-lg text-sm"
                      onClick={() =>
                        navigator.clipboard.writeText(tailwindCode)
                      }
                    >
                      Copy only the shadow
                    </button>
                  )}
                  <button
                    className="bg-sky-400 py-2 px-3 font-semibold hover:bg-sky-500 rounded-lg"
                    onClick={() =>
                      navigator.clipboard.writeText(
                        tailwindCode +
                          (AddIsOpen ? ` ${props.AddTailwindCode}` : "")
                      )
                    }
                  >
                    Copy!
                  </button>
                </div>
              </div>
              <div className="font-mono bg-white p-3">
                <div>
                  {tailwindCode} {AddIsOpen && props.AddTailwindCode}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  },
};
