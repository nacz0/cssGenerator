import { useState } from "react";
import { Slider } from "./Slider";

import { Generator } from "./Generator";
export function Boxshadow() {
  const [boxSize, setBoxSize] = useState(200);
  const [right, setRight] = useState(0);
  const [left, setLeft] = useState(0);
  const [spread, setSpread] = useState(0);
  const [blur, setBlur] = useState(0);
  const [color, setColor] = useState("#000000");

  return (
    <div className="h-full w-full flex flex-row  items-center">
      <Generator.Options>
        <Slider
          setFn={setRight}
          value={right}
          min={-100}
          max={100}
          name="right"
        />
        <Slider setFn={setLeft} value={left} min={-100} max={100} name="left" />
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
      </Generator.Options>
      <div className=" flex h-full w-3/4 flex-col justify-center items-center gap-10">
        <Generator.Main>
          <div
            className=" bg-blue-600"
            style={{
              boxShadow: `${right}px ${left}px ${spread}px ${blur}px ${color}`,
              width: boxSize,
              height: boxSize,
            }}
          ></div>
        </Generator.Main>

        <Generator.Code
          cssCode={`box-shadow: ${right}px ${left}px ${spread}px ${blur}px ${color};`}
          tailwindCode={`shadow-[${right}px_${left}px_${spread}px_${blur}px_${color}]`}
        />
      </div>
    </div>
  );
}
