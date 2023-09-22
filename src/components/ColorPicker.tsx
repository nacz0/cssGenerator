export function ColorPicker(props: {
  color: string;
  setFn: (value: string) => void;
  text: string;
}) {
  const { color, setFn, text } = props;
  return (
    <div className="flex flex-row justify-between w-full items-center font-semibold ">
      <label className="text-xs" htmlFor="color">
        {text}
      </label>
      <input
        type="color"
        value={color}
        onChange={(e) => setFn(e.target.value)}
        id="color"
        className="  bg-gray-50 rounded-md w-8 h-8 "
      />
    </div>
  );
}
