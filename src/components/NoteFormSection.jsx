import { useState } from "react";
import ClickOutsideHandler from "./ClickOutsideHandler";
import Input from "./Input";

const NoteFormSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [notes, setNotes] = useState({
    title: "",
    text: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setNotes((prevState) => ({ ...prevState, [name]: value }));
  };

  const Button = ({ children, className, onClick, type, disabled }) => {
    return (
      <button
        type={type}
        className={className}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </button>
    );
  };
  const handleClose = () => {
    setIsVisible(false);
  };

  const onCreate = () => {};

  return (
    <ClickOutsideHandler setIsVisible={setIsVisible}>
      <form
        className="mb-6 grid gap-3 grid-cols-1 w-3/4 justify-center my-0 mx-auto max-w-3xl border-2 border-slate-500"
        onSubmit={(event) => {
          event.preventDefault();
          onCreate && onCreate();
        }}
      >
        <Input
          placeholder="title"
          className={isVisible ? "visible" : "invisible"}
          ariaLabel="title"
          name="title"
        />

        <Input
          placeholder="text"
          name="text"
          value={notes.text}
          handleChange={handleChange}
        />

        <div className="ml-auto">
          <Button
            disabled={notes.title === "" && notes.text === "" ? true : false}
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Submit
          </Button>
          <Button
            type="button"
            onClick={handleClose}
            className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Close
          </Button>
        </div>
      </form>
    </ClickOutsideHandler>
  );
};

export default NoteFormSection;
