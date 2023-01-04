import { useEffect, useRef, useState } from "react";
import ClickOutsideHandler from "../components/ClickOutsideHandler";
import HeaderSection from "../components/HeaderSection";
import NoteFormSection from "../components/NoteFormSection";
import NoteListSection from "../components/NoteListSection";

const Homepage = () => {
  const [notes, setNotes] = useState([]);

  const handleSearch = () => {
    console.log("search");
  };

  return (
    <>
      <HeaderSection onSearch={handleSearch} />

      <NoteFormSection />

      <NoteListSection />
    </>
  );
};

export default Homepage;
