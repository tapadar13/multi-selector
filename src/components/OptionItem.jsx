import { Check } from "lucide-react";

const OptionItem = ({ option, isSelected, onToggle }) => (
  <li
    className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer flex items-center"
    onClick={() => onToggle(option)}
  >
    <img src={option.icon} alt={option.name} className="w-5 h-5 mr-2" />
    <span className="flex-grow dark:text-gray-200">{option.name}</span>
    {isSelected && <Check className="h-4 w-4 text-green-500" />}
  </li>
);

export default OptionItem;
