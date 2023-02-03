import { useState } from "react";
import Button from "../Button";
import style from "./NoteForm.module.css";
import TextareaAutosize from "react-textarea-autosize";
import useOutsideAlerter from "../useOutsideAlerter";

const NoteForm = ({ onCreate }) => {
  const { visible, setVisible, clickOutsideRef } = useOutsideAlerter(false);
  const [note, setNote] = useState({
    title: "",
    text: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNote((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleCloseBtn = (event) => {
    setVisible(false);
  };

  return (
    <form
      ref={clickOutsideRef}
      className={style.form}
      onSubmit={(event) => {
        event.preventDefault();
        onCreate && onCreate(note);
        setNote({
          title: "",
          text: "",
        });
      }}
    >
      {visible && (
        <input
          name="title"
          value={note.title}
          onChange={handleChange}
          placeholder="Title"
          className={`dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${style.input}`}
        />
      )}
      <TextareaAutosize
        placeholder="Text"
        name="text"
        className={`dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500  ${style.textarea}`}
        maxRows={10}
        value={note.text}
        onChange={handleChange}
        onHeightChange={(height) => {
          setNote((prevState) => ({ ...prevState, textAreaHeight: height }));
        }}
        onFocus={() => {
          setVisible(true);
        }}
      />
      {visible && (
        <div className="ml-auto">
          <Button
            disabled={note.text === "" && note.title === "" ? true : false}
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Submit
          </Button>
          <Button
            disabled={visible ? false : true}
            type="button"
            onClick={handleCloseBtn}
            className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Close
          </Button>
        </div>
      )}
    </form>
  );
};

export default NoteForm;
