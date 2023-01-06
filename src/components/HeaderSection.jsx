import style from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
const HeaderSection = ({ onSearch }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const handleDarkMode = () => {
    setIsDarkMode((prevState) => !prevState);
  };

  return (
    <header className={style.header}>
      <h1 className={style.dynamicText}>Note Apps</h1>

      <div className="relative">
        <input
          type="search"
          id="search-dropdown"
          className="indent-5 rounded-l-lg block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
          placeholder="Search"
          onChange={(event) => {
            onSearch && onSearch(event.target.value);
          }}
        />
        <span
          className="absolute top-3 left-2
        "
        >
          <svg
            aria-hidden="true"
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </span>
      </div>

      <FontAwesomeIcon
        icon={isDarkMode ? faSun : faMoon}
        className={` ${isDarkMode ? "" : "text-slate-400"}`}
        onClick={handleDarkMode}
        fixedWidth
        size="lg"
        shake
      />
    </header>
  );
};

export default HeaderSection;
