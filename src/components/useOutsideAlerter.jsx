import { useState, useEffect, useRef } from "react";

const useOutsideAlerter = (initialIsVisible) => {
  const [visible, setVisible] = useState(initialIsVisible);
  const clickOutsideRef = useRef(null);

  const handleClickOutside = (event) => {
    if (
      clickOutsideRef.current &&
      !clickOutsideRef.current.contains(event.target)
    ) {
      setVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [clickOutsideRef]);

  return { clickOutsideRef, visible, setVisible };
};

export default useOutsideAlerter;
// import { useEffect, useRef, useState } from "react";

// const ClickOutsideHandler = ({ children }) => {
//   const wrapperRef = useRef();
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (wrapperRef && !wrapperRef.current.contains(event.target)) {
//         setIsVisible(false);
//       } else {
//         setIsVisible(true);
//       }
//     };
//     document.addEventListener("click", handleClickOutside);
//     return () => document.removeEventListener("click", handleClickOutside);
//   }, []);

//   return <div ref={wrapperRef}>{children}</div>;
// };

// export default ClickOutsideHandler;
