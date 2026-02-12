import React from "react";

export default function Input({ width, type, name, setDisplay }) {
  return (
    <label className={`${width} text-center`} htmlFor="attacksCount">
      <input
        onChange={(e) => setDisplay(e.target.value)}
        type={type}
        placeholder={name}
        className="w-[80%] placeholder-black placeholder:text-center font-bold "
      />
    </label>
  );
}
