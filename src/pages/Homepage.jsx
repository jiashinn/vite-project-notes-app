import { useEffect, useRef, useState } from "react";
import { nanoid } from "nanoid";
import HeaderSection from "../components/HeaderSection";
import NoteForm from "../components/NoteForm";
import NoteFormSection from "../components/NoteFormSection";
import NoteList from "../components/NoteList";
import { ThemeProvider } from "flowbite-react/lib/esm/components/Flowbite/ThemeContext";

const Homepage = () => {
  const [notes, setNotes] = useState(() => {
    const saved = localStorage.getItem("notes-app-data");
    const initialValue = JSON.parse(saved);
    return initialValue || [];
  });

  useEffect(() => {
    localStorage.setItem("notes-app-data", JSON.stringify(notes));
  }, [notes]);

  //search related
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (value) => {
    const lowerCaseValue = value.toLowerCase();
    setSearchValue(lowerCaseValue);
  };

  const addNotes = (note) => {
    setNotes([...notes, { id: nanoid(), ...note }]);
  };

  const handleDelete = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
    localStorage.setItem("notes-app-data", JSON.stringify(notes));
  };
  // const handlePinned = () => {
  //   setNotes(JSON.parse(localStorage.getItem("notes-app-data")));
  // };

  const refreshPage = () => {
    setNotes(JSON.parse(localStorage.getItem("notes-app-data")));
  };

  return (
    <>
      <HeaderSection onSearch={handleSearch} />
      {/* <NoteFormSection /> */}
      <NoteForm onCreate={addNotes} />

      {/* NoteListSection */}
      {notes.length === 0 ? (
        "No notes yet"
      ) : searchValue === "" ? (
        <NoteList
          notes={notes}
          handleDelete={handleDelete}
          refreshPage={refreshPage}
        />
      ) : (
        <NoteList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchValue)
          )}
          handleDelete={handleDelete}
        />
      )}
    </>
  );
};

export default Homepage;
