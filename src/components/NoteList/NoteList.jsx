import NoteCard from "../NoteCard/NoteCard";
import style from "./NoteList.module.css";
import { motion } from "framer-motion";

const MotionNoteCard = motion(NoteCard);

const NoteList = ({
  notes,
  height,
  handleDelete,
  handlePinned,
  handleUnpinned,
}) => {
  return (
    <div className={style.noteList}>
      {notes.map((note) => {
        return (
          <MotionNoteCard
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            height={height}
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
    </div>
  );
};

export default NoteList;
