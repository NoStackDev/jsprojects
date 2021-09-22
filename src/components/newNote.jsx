import Input from "./input";
import { createNote } from "../noteController.";

const NewNote = (props) => {
  const handleInput = () => {
    const subject = document.getElementById("subject").value;
    const body = document.getElementById("body").value;
    createNote(subject, body);
    props.handleChange();
  };

  return (
    <div>
      <Input placeholder="Subject" id="subject" />
      <Input type="textarea" placeholder="note" id="body" />
      <button onClick={handleInput}>Create</button>
    </div>
  );
};

export default NewNote;
