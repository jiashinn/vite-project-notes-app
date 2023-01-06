import { useState } from "react";
import NoteCard from "./NoteCard";

const NoteList = ({ notes, handleDelete, refreshPage }) => {
  return (
    <>
      {notes.map((note) => {
        return (
          <NoteCard
            data={note}
            key={note.id}
            title={note.title}
            id={note.id}
            text={note.text}
            onDelete={() => {
              handleDelete && handleDelete(note.id);
            }}
            refreshPage={() => {
              refreshPage && refreshPage();
            }}
          />
        );
      })}
    </>
  );
};

export default NoteList;
