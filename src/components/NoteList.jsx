import { useState } from "react";
import NoteCard from "./NoteCard";

const NoteList = ({ notes, handleDelete, handlePinned, handleUnpinned }) => {
  return (
    <>
      {notes.map((note) => {
        return (
          <NoteCard
            note={note}
            key={note.id}
            title={note.title}
            id={note.id}
            text={note.text}
            onDelete={() => {
              handleDelete && handleDelete(note.id);
            }}
            onHandlePinned={() => {
              handlePinned && handlePinned(note.id);
            }}
            onHandleUnpinned={() => {
              handleUnpinned && handleUnpinned(note.id);
            }}
            pinIcon={note.pin}
          />
        );
      })}
    </>
  );
};

export default NoteList;
