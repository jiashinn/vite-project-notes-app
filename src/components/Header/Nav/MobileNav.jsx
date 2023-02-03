import ThemeToggleIcon from "./ThemeToggleIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPen, faBars } from "@fortawesome/free-solid-svg-icons";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import useOutsideAlerter from "../../useOutsideAlerter";
import { useUserAuth } from "../../../context/UserAuthContext";

const MobileNav = ({ onSearch, onLogOut, user }) => {
  const { visible, setVisible, clickOutsideRef } = useOutsideAlerter(false);

  return (
    <nav className="md:hidden z-40">
      {visible && (
        <ul
          className="flex flex-col justify-start items-center absolute top-20 w-full left-0   bg-gray-300 dark:bg-gray-500 "
          ref={clickOutsideRef}
        >
          <li className="py-3 px-5 w-full">
            <SearchBar onSearch={onSearch} />
          </li>
          <li className="py-3 px-5  w-full cursor-pointer">
            <ThemeToggleIcon mobile />
          </li>
          <li className="py-3 px-5  w-full">
            <FontAwesomeIcon
              icon={faUserPen}
              fixedWidth
              size="lg"
              className="text-slate-600 dark:text-white"
            />
            {user === null ? (
              <>
                <Link
                  to="/register"
                  className="mx-2 text-slate-600 dark:text-white"
                >
                  Register
                </Link>
                <span className="text-slate-600dark:text-white">/</span>
                <Link
                  to="/login"
                  className="ml-2 text-slate-600 dark:text-white"
                >
                  Login
                </Link>
              </>
            ) : (
              <>
                <span>{user.email}</span>
                <Link
                  to="/"
                  className="mx-2 text-slate-600 dark:text-white"
                  onClick={onLogOut}
                >
                  Logout
                </Link>
              </>
            )}
          </li>
        </ul>
      )}

      <FontAwesomeIcon
        icon={faBars}
        fixedWidth
        size="lg"
        className="w-full text-slate-500"
        onClick={() => {
          setVisible(true);
        }}
      />
    </nav>
  );
};

export default MobileNav;
