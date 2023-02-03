import SearchBar from "./SearchBar";
import ThemeToggleIcon from "./ThemeToggleIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPen } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const WebNav = ({ onSearch, user, onLogOut }) => {
  return (
    <nav className="hidden md:flex relative">
      <ul className="flex justify-center items-center  bg-transparent gap-3">
        <li className="py-3 px-5 relative">
          <SearchBar onSearch={onSearch} web />
        </li>
        <li className="py-3 cursor-pointer">
          <ThemeToggleIcon />
        </li>
        <li className="py-3 px-5">
          {user === null ? (
            <Link to="/login">
              <FontAwesomeIcon
                icon={faUserPen}
                fixedWidth
                size="lg"
                className="text-slate-600 dark:text-white"
                title="login/register"
              />
            </Link>
          ) : (
            <Link to="/login">
              <div
                title={user.email}
                onClick={onLogOut}
                className="text-slate-600 dark:text-white"
              >
                Logout
              </div>
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default WebNav;
