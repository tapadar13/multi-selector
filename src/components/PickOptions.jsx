import { useState, useEffect, useRef } from "react";
import { ChevronDown, X } from "lucide-react";
import OptionItem from "./OptionItem";
import { options } from "../constants/techOptions";

const PickOptions = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const dropdownRef = useRef(null);

  const toggleOption = (option) => {
    setSelectedOptions((prev) =>
      prev.some((item) => item.id === option.id)
        ? prev.filter((item) => item.id !== option.id)
        : [...prev, option]
    );
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <h1 className="mb-6 text-xl font-bold dark:text-white">
        Tech Stack Picker
      </h1>
      <div className="relative w-[30rem]" ref={dropdownRef}>
        <div className="mb-2 flex flex-wrap gap-2">
          {selectedOptions.map((option) => (
            <span
              key={option.id}
              className="inline-flex items-center px-2 py-1 rounded-full text-sm bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
            >
              <img
                src={option.icon}
                alt={option.name}
                className="w-4 h-4 mr-1"
              />
              {option.name}
              <X
                className="ml-1 h-4 w-4 cursor-pointer"
                onClick={() => toggleOption(option)}
              />
            </span>
          ))}
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full px-4 py-2 text-left bg-white border border-gray-300 dark:bg-gray-700 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-neutral-100 dark:focus:ring-gray-500 dark:focus:ring-opacity-50 flex items-center justify-between"
        >
          <span className="text-gray-700 dark:text-gray-300">
            Choose an option
          </span>
          <ChevronDown className="float-right opacity-50 dark:text-gray-300" />
        </button>
        <div
          className={`absolute top-full left-0 mt-1 w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md shadow-lg transition-transform duration-200 ${
            isOpen ? "max-h-[20rem] opacity-100" : "max-h-0 opacity-0"
          } overflow-y-auto max-h-[20rem]`}
        >
          <ul className="w-full">
            {options.map((option) => (
              <OptionItem
                key={option.id}
                option={option}
                isSelected={selectedOptions.some(
                  (item) => item.id === option.id
                )}
                onToggle={toggleOption}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PickOptions;
