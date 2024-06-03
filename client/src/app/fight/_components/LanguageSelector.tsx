"use client";

import { LANGUAGE_VERSIONS } from "./constants";
import { useState } from "react";
import { IoChevronDown } from "react-icons/io5";

interface LanguageSelectorProps {
  language: string;
  onSelect: (language: string) => void;
}

const LanguageSelector = ({ language, onSelect }: LanguageSelectorProps) => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleButtonClick = () => {
    setDropdownVisible((prev) => !prev);
  };

  const handleSelect = (lang: string) => {
    onSelect(lang);
    setDropdownVisible(false);
  };

  return (
    <div className="relative h-10 flex justify-between items-center px-4">
      <button
        className="flex items-center justify-between space-x-1"
        onClick={handleButtonClick}
      >
        <span className="text-sm">{language}</span>
        <IoChevronDown />
      </button>
      {isDropdownVisible && (
        <div
          className="absolute shadow-lg rounded-md z-10 top-10 py-1"
          style={{ backdropFilter: "blur(10px)" }}
        >
          {Object.keys(LANGUAGE_VERSIONS).map((lang) => (
            <button
              key={lang}
              className={`block w-full px-2 py-1 text-left text-sm hover:bg-gray-600 ${
                lang === language && "text-blue-400"
              }`}
              onClick={() => handleSelect(lang)}
            >
              {lang}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
