import { useState } from "react";

export default function Select({ options }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="text-white relative inline-block group">
      <select
        className="bg-gray-700 text-white rounded focus:outline-none appearance-none px-7 group-hover:text-orange-500"
        onClick={() => setIsOpen(!isOpen)}
        onBlur={() => setIsOpen(false)}
      >
        {options.map((option) => (
          <option className="text-white" key={option} value={option.toLowerCase()}>
            {option}
          </option>
        ))}
      </select>
      {/* custom arrow */}
      <div className="pointer-events-none absolute inset-y-0 right-0 group-hover:text-orange-400">
        {!isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
          </svg>
        )}
      </div>
    </div>
  );
}
