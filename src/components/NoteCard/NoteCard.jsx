import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapPin } from "@fortawesome/free-solid-svg-icons";
import { forwardRef, useState } from "react";
import style from "./NoteCard.module.css";
import TextareaAutosize from "react-textarea-autosize";
import useOutsideAlerter from "../useOutsideAlerter";

const NoteCard = forwardRef(
  (
    { note, height, onDelete, onHandlePinned, onHandleUnpinned, pinIcon },
    ref
  ) => {
    const savedData = JSON.parse(localStorage.getItem("notes-app-data")) || [];
    const [editData, setEditData] = useState(note);
    const [pinned, setPinned] = useState(note.pin);
    const { visible, setVisible, clickOutsideRef } = useOutsideAlerter(false);

    const handleChange = (event) => {
      const { name, value } = event.target;
      setEditData((prev) => ({ ...prev, [name]: value }));
      const idx = savedData.findIndex((item) => item.id === note.id);
      // use if else condition to solve 'title','text' undefined error
      if (savedData[idx]) {
        savedData[idx][name] = value;
      } else {
        savedData[idx] = {
          ...savedData[idx], //remember to use spread operator to keep the original data
          [name]: value,
        };
      }

      localStorage.setItem("notes-app-data", JSON.stringify(savedData));
    };

    const onPinned = () => {
      setPinned((prev) => !prev);
      onHandlePinned && onHandlePinned();
    };

    const onUnpinned = () => {
      setPinned((prev) => !prev);
      onHandleUnpinned && onHandleUnpinned();
    };

    return (
      <>
        <div
          ref={ref}
          className={`${style.card} dark:bg-transparent dark:border-gray-500 dark:border-2`}
        >
          {pinIcon && (
            <FontAwesomeIcon icon={faMapPin} className={style.pinIcon} />
          )}
          <div className="relative flex">
            {/* <!-- Dropdown toggle button --> */}

            <button
              className={`${style.dropdownButton}dark:focus:ring-opacity-40 dark:focus:ring-blue-400 dark:text-white`}
              onClick={() => {
                setVisible((prev) => !prev);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
              </svg>
            </button>

            {/* <!-- Dropdown menu --> */}
            {visible && (
              <div
                className={`${style.dropdownMenu} dark:bg-gray-400`}
                ref={clickOutsideRef}
              >
                <a
                  href="#"
                  className={`rounded-t-lg dark:text-gray-300 dark:hover:bg-gray-300 dark:hover:text-white ${style.dropdownLink}`}
                  onClick={() => {
                    pinned
                      ? onUnpinned && onUnpinned()
                      : onPinned && onPinned();
                    setVisible((prev) => !prev);
                  }}
                >
                  {pinned ? "Unpin" : "Pin"}
                </a>
                {/* 
                <a
                  href="#"
                  className={`dark:text-gray-300 dark:hover:bg-gray-300 dark:hover:text-white ${style.dropdownLink}`}
                  onClick={() => {
                    setVisible((prev) => !prev);
                  }}
                >
                  Add Color
                </a> */}

                <hr className="border-gray-200 dark:border-gray-700 " />

                <a
                  href="#"
                  className={`rounded-b-lg dark:text-gray-300 dark:hover:bg-gray-300 dark:hover:text-white ${style.dropdownLink}`}
                  onClick={() => {
                    setVisible((prev) => !prev);
                    onDelete && onDelete();
                  }}
                >
                  Delete
                </a>
              </div>
            )}
          </div>

          <input
            type="text"
            className={`${style.input} dark:bg-transparent dark:border-0 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:text-white`}
            name="title"
            value={editData.title}
            onChange={handleChange}
          />

          <TextareaAutosize
            style={{ height: `${height}px` }}
            className={`${style.textarea} dark:bg-transparent dark:border-0 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:text-white dark:resize-none`}
            name="text"
            value={editData.text}
            onChange={handleChange}
          />
        </div>
      </>
    );
  }
);

export default NoteCard;
