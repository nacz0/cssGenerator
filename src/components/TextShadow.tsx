import { useState } from "react";
import { Slider } from "./Slider";

import { ColorPicker } from "./ColorPicker";
import { Generator } from "./Generator";

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
          min={0}
          max={100}
          name="Offset Y"
        />
        <Slider setFn={setBlur} value={blur} min={0} max={100} name="blur" />

        <ColorPicker
          color={shadowColor}
          setFn={setShadowColor}
          text="Text shadow color"
        />
        <div className="flex flex-row justify-between w-full">
          <label htmlFor="textOptions" className="font-semibold">
            Text Options
          </label>
          <input
            type="checkbox"
            onChange={() => setOpenTextOptions((prev) => !prev)}
            id="textOptions"
          />
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
      <div className=" flex h-full w-3/4 flex-col justify-center items-center gap-10">
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
        />
      </div>
    </div>
  );
}
