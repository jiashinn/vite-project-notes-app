import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import Header from "../components/Header/Header";

import NoteList from "../components/NoteList/NoteList";
import style from "./Homepage.module.css";
import NoteForm from "../components/NoteForm/NoteForm";
import { AnimatePresence } from "framer-motion";
import { useUserAuth } from "../context/UserAuthContext";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  let navigate = useNavigate();
  const { user, setProtect } = useUserAuth();

  const [notes, setNotes] = useState(() => {
    const saved = JSON.parse(localStorage.getItem("notes-app-data"));
    return saved || [];
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
    const newNote = {
      id: nanoid(),
      ...note,
      timestamp: Date.now(),
      pin: false,
    };

    setNotes([...notes, newNote]);

    if (user === null) {
      setTimeout(() => {
        //to save data to local storage then redirect to login page
        navigate("/login");
        setProtect(true);
      }, 100);
    }
  };

  const handleDelete = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  const handlePinned = (id) => {
    const idx = notes.findIndex((item) => item.id === id);
    const newNotes = [
      notes[idx],
      ...notes.slice(0, idx),
      ...notes.slice(idx + 1),
    ];

    // newNotes[idx]["pin"] = true;
    const finalNotes = newNotes.map((note) =>
      note.id === id ? { ...note, pin: true } : note
    );
    console.log(finalNotes);
    setNotes(finalNotes);
  };

  const handleUnpinned = (id) => {
    const newNotes = notes.map((note) =>
      note.id === id ? { ...note, pin: false } : note
    );
    const pinnedNotes = newNotes.filter((note) => note.pin === true);
    const unpinnedNotes = newNotes
      .filter((note) => note.pin === false)
      .sort((a, b) => a.timestamp - b.timestamp);
    const finalNotes = pinnedNotes.concat(unpinnedNotes);
    setNotes(finalNotes);
  };

  return (
    <div className={style.container}>
      <Header onSearch={handleSearch} />
      {/* <NoteFormSection /> */}
      <NoteForm onCreate={addNotes} />

      {/* NoteListSection */}
      {user != null && notes.length > 0 ? (
        <AnimatePresence>
          <NoteList
            height={notes.textAreaHeight}
            notes={notes.filter((note) =>
              note.text.toLowerCase().includes(searchValue)
            )}
            handleDelete={handleDelete}
            handlePinned={handlePinned}
            handleUnpinned={handleUnpinned}
          />
        </AnimatePresence>
      ) : (
        <div className="dark:text-slate-300">No notes yet</div>
      )}
    </div>
  );
};

export default Homepage;
