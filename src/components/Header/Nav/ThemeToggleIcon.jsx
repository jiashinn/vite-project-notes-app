import { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

const ThemeToggleIcon = ({ mobile }) => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div
      onClick={() => {
        setTheme(theme === "dark" ? "light" : "dark");
      }}
    >
      <FontAwesomeIcon
        icon={theme === "dark" ? faSun : faMoon}
        className={` ${theme === "dark" ? "text-white" : "text-slate-600"}`}
        fixedWidth
        size="lg"
        shake
      />{" "}
      {mobile && (
        <span className="text-slate-600 dark:text-white">
          {theme === "dark" ? "Light Mode" : "Dark Mode"}
        </span>
      )}
    </div>
  );
};
export default ThemeToggleIcon;
