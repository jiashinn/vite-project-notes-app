import { useState } from "react";
import Input from "./Input";
import Button from "./Button";

const NoteForm = ({ onCreate }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [note, setNote] = useState({
    title: "",
    text: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNote((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleCloseBtn = (event) => {
    setIsVisible(false);
  };

  return (
    <form
      className="grid gap-4 mb-9"
      onSubmit={(event) => {
        event.preventDefault();
        onCreate && onCreate(note);
        setNote({
          title: "",
          text: "",
        });
      }}
    >
      <Input
        name="title"
        value={note.title}
        handleChange={handleChange}
        className={isVisible ? "visible" : "invisible"}
        placeholder="Title"
      />
      <Input
        name="text"
        value={note.text}
        handleChange={handleChange}
        placeholder="Text"
      />
      <div className="ml-auto">
        <Button
          disabled={note.text === "" && note.title === "" ? true : false}
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Submit
        </Button>
        <Button
          disabled={isVisible ? false : true}
          type="button"
          onClick={handleCloseBtn}
          className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          Close
        </Button>
      </div>
    </form>
  );
};

export default NoteForm;
