import { useState } from "react";
import ClickOutsideHandler from "./ClickOutsideHandler";

const NoteFormSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const Input = ({ placeholder, className }) => {
    return (
      <input
        type="text"
        id="default-input"
        className={`w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${className}`}
        placeholder={placeholder}
      />
    );
  };

  const Button = ({ children, className, onClick }) => {
    return (
      <button type="button" className={className} onClick={onClick}>
        {children}
      </button>
    );
  };
  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <form
      className="mb-6 grid gap-3 grid-cols-1 w-3/4 justify-center my-0 mx-auto max-w-3xl border-2 border-slate-500"
      onSubmit={(event) => {
        event.preventDefault();
        onCreate && onCreate;
      }}
    >
      <Input
        placeholder="title"
        className={isVisible ? "visible" : "invisible"}
      />

      <ClickOutsideHandler setIsVisible={setIsVisible}>
        <Input placeholder="text" />
      </ClickOutsideHandler>

      <div className="ml-auto">
        <Button
          onClick={() => {
            onCreate && onCreate();
          }}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Submit
        </Button>
        <Button
          onClick={handleClose}
          className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          Close
        </Button>
      </div>
    </form>
  );
};

export default NoteFormSection;
