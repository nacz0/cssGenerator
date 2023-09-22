import { ResetIcon } from "../svgIcons/reset";

export const Slider = (props: {
  setFn: (value: number) => void;
  value: number;
  min: number;
  max: number;
  name: string;
  reset?: number;
  fraction?: number;
}) => {
  const { setFn, value, min, max, name, reset } = props;
  const fraction = props.fraction || 1;
  return (
    <div className="flex flex-col gap-2">
      <div className="flex-row flex justify-between items-center  w-full font-semibold">
        <label className="" htmlFor={name}>
          {name}
        </label>
        <div className="flex flex-row items-center gap-3">
          <input
            className="w-14 bg-slate-300 rounded-md p-1"
            min={min}
            max={max}
            value={value}
            onChange={(e) => setFn(e.target.valueAsNumber)}
            id={name}
            step={1 / fraction}
            type="number"
          />
          <button
            onClick={() => setFn(reset ? reset : 0)}
            className=" stroke-gray-600"
          >
            <ResetIcon size={20} />
          </button>
        </div>
      </div>
      <div className="flex flex-col">
        <input
          className="w-56"
          min={min}
          max={max}
          value={value}
          onChange={(e) => setFn(e.target.valueAsNumber)}
          id={name}
          step={1 / fraction}
          type="range"
        />
        <label
          className="grid grid-cols-5 justify-between   w-56"
          htmlFor={name}
        >
          <div className=" col-span-1 ">{min}</div>
          <div className="col-span-3 text-center">{max / 2}</div>
          <div className=" col-span-1 pl-6">{max}</div>
        </label>
      </div>
    </div>
  );
};
