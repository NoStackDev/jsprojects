import React, { useState } from "react";
import Header from "./components/header";
import Toolbar from "./components/toolbar";
import NotesList from "./components/notesList";
import NewNote from "./components/newNote";
import CreateANoteBtn from "./components/createNoteBtn";

function App() {
  const [showNewNote, setShowNewNote] = useState(false);

  const handleChange = () => {
    setShowNewNote(!showNewNote);
  };

  if (showNewNote) {
    return (
      <div>
        <Header />
        <NewNote handleChange={handleChange} />
      </div>
    );
  } else {
    return (
      <div>
        <Header />
        <Toolbar />
        <NotesList />
        <CreateANoteBtn handleChange={handleChange} />
      </div>
    );
  }
}

export default App;
