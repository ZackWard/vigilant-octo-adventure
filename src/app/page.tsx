"use client";

import { useState } from "react";
import { Slider } from "./wrapper";

const max = 200;

export default function Home() {
  const [value, setValue] = useState(90);
  const valueAsPercentage = ((value / max) * 100).toFixed(0);

  return (
    <div className="flex w-screen h-screen justify-center items-center">
      <div className="w-72 flex flex-col gap-12 text-center">
        <Slider
          min={1}
          step={1}
          max={max}
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
        />
        <span>
          Value: {value} / {max} ({valueAsPercentage}%)
        </span>
      </div>
    </div>
  );
}
