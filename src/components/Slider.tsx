export const Slider = (props: {
  setFn: (value: number) => void;
  value: number;
  min: number;
  max: number;
  name: string;
  fraction?: number;
}) => {
  const { setFn, value, min, max, name } = props;
  const fraction = props.fraction || 1;
  return (
    <div className="flex flex-col gap-2">
      <div className="flex-row flex justify-between items-center  w-full font-semibold">
        <label className="" htmlFor={name}>
          {name}
        </label>
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
