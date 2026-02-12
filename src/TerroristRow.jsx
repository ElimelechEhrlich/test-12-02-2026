import React from "react";

export default function TerroristRow({ terrorist }) {
  const {
    name,
    organization,
    attacksCount,
    status,
    relationToIsraelSummary,
    imageUrl,
  } = terrorist;
  return (
    <div className="flex flex-row border p-2 w-full justify-around h-20 items-center text-center bg-orange-100 hover:bg-orange-200"
    onClick={e => {}}>
      <div className="p-0 w-[11%]">
        <img className="h-16" src={imageUrl} alt="trrorist image"></img>
      </div>
      <p className="w-[17%]">{name}</p>
      <p className="w-[17%]">{organization}</p>
      <p className="w-[11%]">{attacksCount}</p>
      <p className="w-[10%]">{status}</p>
      <p className="w-[36%]">{relationToIsraelSummary}</p>
    </div>
  );
}
