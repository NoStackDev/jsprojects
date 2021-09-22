export const createNote = (subject, body) => {
  const note = { subject, body };
  let notes = window.localStorage.getItem("Note App");

  if (notes !== null) {
    notes = JSON.parse(notes);
    console.log(notes);
    notes.unshift(note);
    notes = JSON.stringify(notes);
  } else {
    notes = JSON.stringify([note]);
  }

  window.localStorage.setItem("Note App", notes);
};

export const getNotes = () => {
  const notes = window.localStorage.getItem("Note App");
  return JSON.parse(notes);
};

export const deleteNote = (index) => {
  let notes = window.localStorage.getItem("Note App");
  notes = JSON.parse(notes);
  notes = notes.filter((data, ind) => {
    return ind !== index;
  });
  notes = JSON.stringify(notes);
  window.localStorage.setItem("Note App", notes);
};

export const clearNotes = () => {
  window.localStorage.remove("Note App");
};
