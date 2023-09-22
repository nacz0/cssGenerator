export function Toggle(props: {
  setFn: React.Dispatch<React.SetStateAction<boolean>>;

  value: boolean;
}) {
  const { setFn, value } = props;
  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        value={value.toString()}
        onChange={() => setFn((prev) => !prev)}
        className=" peer w-0 h-0"
      />
      <div
        className="w-11 h-6 bg-gray-200  peer-focus:outline-black peer-focus:outline peer-focus:outline-2        rounded-full peer 
       peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] 
       after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-blue-600"
      ></div>
    </label>
  );
}
