import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import HeaderSection from "../components/HeaderSection";
import NoteForm from "../components/NoteForm";
import NoteList from "../components/NoteList";

const Homepage = () => {
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
  };

  const handleDelete = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
    localStorage.setItem("notes-app-data", JSON.stringify(notes));
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
    setNotes(finalNotes, "pin");
    localStorage.setItem("notes-app-data", JSON.stringify(notes));
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
    localStorage.setItem("notes-app-data", JSON.stringify(notes));
    console.log(finalNotes, "unpin");
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
          handlePinned={handlePinned}
          handleUnpinned={handleUnpinned}
        />
      ) : (
        <NoteList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchValue)
          )}
          handleDelete={handleDelete}
          handlePinned={handlePinned}
          handleUnpinned={handleUnpinned}
        />
      )}
    </>
  );
};

export default Homepage;
