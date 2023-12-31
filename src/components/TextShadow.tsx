import { useState } from "react";
import { Slider } from "./Slider";

import { ColorPicker } from "./ColorPicker";
import { Generator } from "./Generator";
import { Toggle } from "./Toggle";

export function TextShadow() {
  const [fontSize, setFontSize] = useState(64);
  const [offsetX, setoffsetX] = useState(0);
  const [offsetY, setoffsetY] = useState(0);
  const [blur, setBlur] = useState(0);
  const [shadowColor, setShadowColor] = useState("#000000");
  const [textColor, setTextColor] = useState("#000000");
  const [text, setText] = useState("Hello World!");
  const [openTextOptions, setOpenTextOptions] = useState(false);

  return (
    <div className="h-full w-full flex flex-row  items-center">
      <Generator.Options>
        <Slider
          setFn={setoffsetX}
          value={offsetX}
          min={-100}
          max={100}
          name="Offset X"
        />
        <Slider
          setFn={setoffsetY}
          value={offsetY}
          min={-100}
          max={100}
          name="Offset Y"
        />
        <Slider setFn={setBlur} value={blur} min={0} max={100} name="blur" />

        <ColorPicker
          color={shadowColor}
          setFn={setShadowColor}
          text="Text shadow color"
        />

        <div className="flex flex-row justify-between w-full my-3">
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
              reset={64}
            />

            <div className="flex flex-col font-semibold w-full">
              <label className="" htmlFor="text">
                Text:
              </label>
              <input
                type="text"
                className="w-52 border-2 border-gray-200 rounded-md p-1 mt-1"
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
              textShadow: `${offsetX}px ${offsetY}px ${blur}px ${shadowColor}`,
              fontSize: fontSize,
              color: textColor,
            }}
          >
            {text}
          </div>
        </Generator.Main>

        <Generator.Code
          cssCode={`text-shadow: ${offsetX}px ${offsetY}px ${blur}px ${shadowColor};`}
          tailwindCode={`[text-shadow:_${offsetX}px_${offsetY}px_${blur}px_${shadowColor}]`}
          AddIsOpen={openTextOptions}
          AddCssCode={`color: ${textColor}; font-size: ${fontSize}px;`}
          AddTailwindCode={`text-[${textColor}] text-[${fontSize}px]`}
          btnText="shadow"
        />
      </div>
    </div>
  );
}
