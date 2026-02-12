import React, { useState } from "react";
import data from "./data.json";
import TerroristRow from "./TerroristRow";
import Input from "./Input";
import OptionInSelect from "./OptionInSelect";

export default function App() {
  const [CurrentDisplay, setDisplay] = useState("All");
  const options = ["status", "active", "quiet", "dead", "israeli agent"];
  return (
    <div className="flex flex-col items-center">
      <button
        onClick={(e) => {setDisplay("the_dangerous");}}
        className="w-[40%] text-white bg-red-700 rounded-2xl m-2 hover:bg-red-900"
      >
        The Most Dangerous Terrorist
      </button>
      <div className="flex flex-row w-full border p-2 justify-around items-center text-center bg-orange-400">
        <p className="font-bold w-[11%]">image</p>
        <Input
          width="w-[17%]"
          type="text"
          name="name"
          setDisplay={setDisplay}
        />
        <p className="font-bold w-[17%]">organization</p>
        <Input
          width="w-[11%]"
          type="number"
          name="attacksCount"
          setDisplay={setDisplay}
        />
        <label className="w-[10%]" htmlFor="status">
          <select
            onChange={(e) => setDisplay(e.target.value)}
            name="status"
            id="status"
            className="w-18 font-bold "
          >
            {options.map((option, i) => (
              <OptionInSelect key={i} value={option} />
            ))}
          </select>
        </label>
        <p className="font-bold w-[36%]">relationToIsraelSummary</p>
      </div>
      {CurrentDisplay === "All" || CurrentDisplay === "status"
        ? data.map((terrorist) => <TerroristRow terrorist={terrorist} />)
        : CurrentDisplay === "the_dangerous"
          ? data
              .filter((terrorist) => terrorist.status === "active")
              .toSorted((a, b) => b.attacksCount - a.attacksCount)
              .map(
                (terrorist, i) =>
                  i === 0 && <TerroristRow terrorist={terrorist} />,
              )
          : data
              .filter(
                (terrorist) =>
                  terrorist.name.includes(CurrentDisplay) ||
                  terrorist.attacksCount === Number(CurrentDisplay) ||
                  terrorist.status === CurrentDisplay,
              )
              .map((terrorist) => <TerroristRow terrorist={terrorist} />)}
    </div>
  );
}
