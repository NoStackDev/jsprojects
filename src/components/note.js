import React from "react";
import { deleteNote } from "../noteController.";

const Note = (props) => {
  const selectNote = () => {
    deleteNote(props.index);
  };
  return (
    <div onClick={selectNote}>
      <div></div>
      <h3>{props.subject}</h3>
      <em>{props.elapsedTime}</em>
      <p>{props.body}</p>
    </div>
  );
};

export default Note;
