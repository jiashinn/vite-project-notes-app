import { useEffect, useRef } from "react";

const ClickOutsideHandler = ({ children, setIsVisible }) => {
  const wrapperRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef && !wrapperRef.current.contains(event.target)) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return <div ref={wrapperRef}>{children}</div>;
};

export default ClickOutsideHandler;
