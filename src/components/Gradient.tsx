import { useState } from "react";
import { ColorPicker } from "./ColorPicker";
import { Generator } from "./Generator";
import { Slider } from "./Slider";
type gradient = "linear" | "radial";
export function Gradient() {
  const [angle, setAngle] = useState(90);
  const [colors, setColors] = useState(["#ff0000", "#0000ff"]);
  const [percentages, setPercentages] = useState([0, 50]);
  const [type, setType] = useState<gradient>("linear");

  const code = `${type === "linear" ? "linear-gradient" : "radial-gradient"}(${
    type === "linear" ? `${angle}deg` : "circle"
  }, ${colors
    .map((color, i) => color + " " + percentages[i] + "%")
    .join(", ")})`;

  const tailwindCode = `[${
    type === "linear" ? "linear-gradient" : "radial-gradient"
  }(${type === "linear" ? `${angle}deg` : "circle"},_${colors
    .map((color, i) => color + "_" + percentages[i] + "%")
    .join(",_")})]`;

  return (
    <div className="h-full w-full flex flex-row  items-center">
      <Generator.Options>
        <div className="flex flex-row">
          <button
            onClick={() => setType("linear")}
            className={`${
              type === "linear" ? "bg-blue-600" : "bg-blue-300"
            }  p-1 w-16 text-center transition-all duration-300  `}
          >
            Linear
          </button>
          <button
            onClick={() => setType("radial")}
            className={`${
              type !== "linear" ? "bg-blue-600" : "bg-blue-300"
            } bg-blue-400  p-1  w-16 text-center transition-all duration-300`}
          >
            Radial
          </button>
        </div>
        <Slider setFn={setAngle} value={angle} min={0} max={360} name="angle" />
        {colors.map((color, i) => (
          <SingleColor
            key={i}
            color={color}
            percentage={percentages[i]}
            setColors={(value) => {
              const newColors = [...colors];
              newColors[i] = value;
              setColors(newColors);
            }}
            setPercentages={(value) => {
              const newPercentages = [...percentages];
              newPercentages[i] = value;
              setPercentages(newPercentages);
            }}
            index={i}
          />
        ))}
        <div className="text-lg font-semibold flex flex-col gap-2">
          <button
            disabled={colors.length <= 1}
            className="bg-red-400 hover:bg-red-500 rounded-lg p-2 font-semibold
            disabled:bg-red-300"
            onClick={() => {
              const newColors = [...colors];
              newColors.pop();
              setColors(newColors);
              const newPercentages = [...percentages];
              newPercentages.pop();
              setPercentages(newPercentages);
            }}
          >
            Usuń kolor
          </button>
          <button
            disabled={colors.length >= 6}
            className="bg-blue-400 hover:bg-blue-500 rounded-lg p-2 font-semibold
            disabled:bg-blue-300 
            "
            onClick={() => {
              const newColors = [...colors];
              newColors.push(
                "#" + Math.floor(Math.random() * 16777215).toString(16)
              );
              setColors(newColors);
              const newPercentages = [...percentages];
              newPercentages.push(50 + colors.length * 10);
              setPercentages(newPercentages);
            }}
          >
            Dodaj kolor
          </button>
        </div>
      </Generator.Options>
      <div className=" flex h-full mt-10 w-3/4 flex-col  items-center gap-10 overflow-hidden">
        <Generator.Main>
          <div
            className="w-full h-full bg-blue-600"
            style={{
              background: code,
            }}
          ></div>
        </Generator.Main>

        <Generator.Code cssCode={code} tailwindCode={tailwindCode} />
      </div>
    </div>
  );
}

function SingleColor(props: {
  color: string;
  percentage: number;
  setColors: (value: string) => void;
  setPercentages: (value: number) => void;
  index: number;
}) {
  const { index, setColors, color, percentage, setPercentages } = props;
  function SetValue(e: React.ChangeEvent<HTMLInputElement>) {
    setPercentages(e.target.valueAsNumber);
  }
  return (
    <div>
      <div className="flex flex-col gap-2">
        <div className="flex-row flex justify-between items-center  w-full font-semibold">
          <div className="w-full">Kolor {index + 1}</div>
          <ColorPicker color={color} setFn={setColors} text="" />

          <input
            className="w-14 bg-slate-300 rounded-md p-1 ml-4"
            min={0}
            max={100}
            value={percentage}
            onChange={SetValue}
            id={index.toString()}
            type="number"
          />
        </div>
        <div className="flex flex-col">
          <input
            className="w-56"
            min={0}
            max={100}
            value={percentage}
            onChange={SetValue}
            id={index.toString()}
            type="range"
          />
          <label
            className="grid grid-cols-5 justify-between   w-56"
            htmlFor={index.toString()}
          >
            <div className=" col-span-1 ">{0}</div>
            <div className="col-span-3 text-center">{100 / 2}</div>
            <div className=" col-span-1 pl-6">{100}</div>
          </label>
        </div>
      </div>
    </div>
  );
}
