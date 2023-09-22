import { useState } from "react";
import { Slider } from "./Slider";

import { ColorPicker } from "./ColorPicker";
import { Generator } from "./Generator";
import { Toggle } from "./Toggle";

export function TextStroke() {
  const [fontSize, setFontSize] = useState(64);
  const [strokeWidth, setStrokeWidth] = useState(0.5);
  const [strokeColor, setStrokeColor] = useState("#000000");
  const [textColor, setTextColor] = useState("#000000");
  const [text, setText] = useState("Hello World!");
  const [openTextOptions, setOpenTextOptions] = useState(false);

  return (
    <div className="h-full w-full flex flex-row  items-center">
      <Generator.Options>
        <Slider
          setFn={setStrokeWidth}
          value={strokeWidth}
          min={0}
          max={50}
          name="Stroke Width"
          fraction={10}
        />
        <ColorPicker
          color={strokeColor}
          setFn={setStrokeColor}
          text="Stroke color"
        />
        <div className="flex flex-row justify-between w-full">
          <label htmlFor="textOptions" className="font-semibold">
            Text Options
          </label>
          <Toggle setFn={setOpenTextOptions} value={openTextOptions} />
        </div>

        {openTextOptions && (
          <>
            <ColorPicker
              color={textColor}
              setFn={setTextColor}
              text="Text color"
            />
            <Slider
              setFn={setFontSize}
              value={fontSize}
              min={0}
              max={150}
              name="Text Size"
            />

            <div className="flex flex-col font-semibold">
              <label className="text-sm" htmlFor="text">
                Text:
              </label>
              <input
                type="text"
                className="w-40"
                value={text}
                onChange={(e) => setText(e.target.value)}
                id="text"
              />
            </div>
          </>
        )}
      </Generator.Options>
      <div className=" flex h-full w-3/4 flex-col mt-10 items-center gap-10">
        <Generator.Main>
          <div
            className=" "
            style={{
              WebkitTextStroke: `${strokeWidth}px  ${strokeColor}`,
              fontSize: fontSize,
              color: textColor,
            }}
          >
            {text}
          </div>
        </Generator.Main>

        <Generator.Code
          cssCode={`-webkit-text-stroke: ${strokeWidth}px ${strokeColor};`}
          tailwindCode={`[-webkit-text-stroke:_${strokeWidth}px_${strokeColor}]`}
          AddIsOpen={openTextOptions}
          AddCssCode={`color: ${textColor}; font-size: ${fontSize}px;`}
          AddTailwindCode={`text-[${textColor}] text-[${fontSize}px]`}
          btnText="stroke"
        />
      </div>
    </div>
  );
}
