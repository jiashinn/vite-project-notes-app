import { text } from "@fortawesome/fontawesome-svg-core";
import { Card, Dropdown } from "flowbite-react";
import { useState } from "react";

const NoteCard = ({ tag, onDelete, data, refreshPage }) => {
  const savedData = JSON.parse(localStorage.getItem("notes-app-data")) || [];
  const [editData, setEditData] = useState(data);
  const [pinned, setPinned] = useState(false);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setEditData((prev) => ({ ...prev, [name]: value }));

    const idx = savedData.findIndex((item) => item.id === data.id);
    // use if else condition to solve 'title','text' undefined error
    if (savedData[idx]) {
      savedData[idx][name] = value;
    } else {
      savedData[idx] = {
        ...savedData[idx], //remember to use spread operator to keep the original data
        [name]: value,
      };
    }

    savedData[idx][name] = value;

    localStorage.setItem("notes-app-data", JSON.stringify(savedData));
  };
  const handlePinned = () => {
    setPinned((prev) => !prev);
    const idx = savedData.findIndex((item) => item.id === data.id);
    const newData = [
      savedData[idx],
      ...savedData.slice(0, idx),
      ...savedData.slice(idx + 1),
    ];
    localStorage.setItem("notes-app-data", JSON.stringify(newData));
    refreshPage && refreshPage();
  };

  return (
    <>
      <Card className="max-w-sm">
        <div className="flex justify-end px-4 pt-4">
          <Dropdown inline={true} label="">
            <Dropdown.Item>
              <a
                href="#"
                onClick={handlePinned}
                className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                {pinned ? "Unpin" : "Pin"}
              </a>
            </Dropdown.Item>
            <Dropdown.Item>
              <a
                href="#"
                className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Add color
              </a>
            </Dropdown.Item>
            <Dropdown.Item>
              <a
                href="#"
                className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Add label
              </a>
            </Dropdown.Item>
            <Dropdown.Item>
              <a
                className="block py-2 px-4 text-sm text-red-600 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={() => {
                  onDelete && onDelete();
                }}
              >
                Delete
              </a>
            </Dropdown.Item>
          </Dropdown>
        </div>

        <input
          type="text"
          className="border-none focus:border-2 focus:border-slate-500"
          name="title"
          value={editData.title}
          onChange={handleChange}
        />
        <input
          type="text"
          className="border-none focus:border-2 focus:border-slate-500"
          name="text"
          value={editData.text}
          onChange={handleChange}
        />

        {/* <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {tag}
        </span>
      </div> */}
      </Card>
    </>
  );
};

export default NoteCard;
