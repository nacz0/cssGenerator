import { useState } from "react";

export function Boxshadow() {
  const [boxSize, setBoxSize] = useState(200);
  const [right, setRight] = useState(0);
  const [left, setLeft] = useState(0);
  const [spread, setSpread] = useState(0);
  const [blur, setBlur] = useState(0);
  const [color, setColor] = useState("#000000");

  return (
    <div className="h-full w-full flex flex-row  items-center">
      <div className="h-full w-1/4 flex  justify-center items-center">
        <div className="bg-slate-50 p-5 rounded-xl flex-col flex items-center justify-center">
          <Slider
            setFn={setRight}
            value={right}
            min={-100}
            max={100}
            name="right"
          />
          <Slider
            setFn={setLeft}
            value={left}
            min={-100}
            max={100}
            name="left"
          />
          <Slider
            setFn={setSpread}
            value={spread}
            min={0}
            max={100}
            name="spread"
          />
          <Slider setFn={setBlur} value={blur} min={0} max={100} name="blur" />
          <Slider
            setFn={setBoxSize}
            value={boxSize}
            min={0}
            max={300}
            name="boxSize"
          />
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
        </div>
      </div>
      <div className=" flex h-full w-3/4 flex-col justify-center items-center gap-10">
        <div className="bg-slate-50 w-3/4 h-2/4 rounded-xl flex items-center justify-center overflow-hidden">
          <div
            className=" bg-blue-600"
            style={{
              boxShadow: `${right}px ${left}px ${spread}px ${blur}px ${color}`,
              width: boxSize,
              height: boxSize,
            }}
          ></div>
        </div>
        <div className="">
          <div className="flex flex-row justify-between items-center p-3">
            <div>Code:</div>
            <button
              className="bg-blue-400 py-2 px-3 font-semibold hover:bg-blue-500 rounded-lg"
              onClick={() =>
                navigator.clipboard.writeText(`box-shadow:
               ${right}px ${left}px ${spread}px ${blur}px ${color}`)
              }
            >
              Copy!
            </button>
          </div>
          <div className="font-mono bg-white p-3">
            <div>
              box-shadow:
              {` ${right}px ${left}px ${spread}px ${blur}px ${color}`}
            </div>
          </div>
          <div className=" text-sky-400 font-medium ">
            Tailwind CSS{" "}
            <div className="font-mono bg-white text-black p-3">
              shadow-[
              {`${right}px_${left}px_${spread}px_${blur}px_${color}`}]
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const Slider = (props: {
  setFn: (value: number) => void;
  value: number;
  min: number;
  max: number;
  name: string;
}) => {
  const { setFn, value, min, max, name } = props;
  return (
    <div className="flex flex-col gap-2">
      <div className="flex-row flex justify-between items-center  w-full">
        <label className="" htmlFor={name}>
          {name}
        </label>
        <input
          className="w-fit bg-slate-300 rounded-md p-1"
          min={min}
          max={max}
          value={value}
          onChange={(e) => setFn(e.target.valueAsNumber)}
          id={name}
          type="number"
        />
      </div>
      <div className="flex flex-col">
        <input
          className="w-40"
          min={min}
          max={max}
          value={value}
          onChange={(e) => setFn(e.target.valueAsNumber)}
          id={name}
          type="range"
        />
        <label
          className="flex flex-row justify-between pl-1 pr-2 w-44"
          htmlFor={name}
        >
          <div>{min}</div>
          <div className="ml-1">{max / 2}</div>
          <div className="">{max}</div>
        </label>
      </div>
    </div>
  );
};
