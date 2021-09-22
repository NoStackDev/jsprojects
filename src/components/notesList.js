import React from "react";

import Note from "./note";
import { getNotes } from "../noteController.";

const NotesList = (props) => {
  const data = getNotes();
  if (data) {
    return (
      <div>
        {data.map((note, index) => {
          return (
            <Note
              key={index}
              index={index}
              subject={note.subject}
              body={note.body}
              elapsedTime={note.timeCreated}
            />
          );
        })}
      </div>
    );
  }

  return <div></div>;
};

export default NotesList;
