import style from "./Header.module.css";
import MobileNav from "./Nav/MobileNav.jsx";
import WebNav from "./Nav/WebNav";
import { Link } from "react-router-dom";
import { useUserAuth } from "../../context/UserAuthContext";
const Header = ({ onSearch }) => {
  const { user, logOut } = useUserAuth();

  const handleLogOut = async (e) => {
    e.preventDefault();
    console.log(user);
    try {
      await logOut();
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <>
      <header className={style.header}>
        <h1 className={`${style.dynamicText} dark:before:bg-gray-700`}>
          <Link to="/">Note App</Link>
        </h1>
        <WebNav onSearch={onSearch} onLogOut={handleLogOut} user={user} />

        <MobileNav onSearch={onSearch} onLogOut={handleLogOut} user={user} />
      </header>
    </>
  );
};

export default Header;
