import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);

  //Get all notes
  const getNotes = async () => {
    //API call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI0OWVjZjVlMjJhN2VjYjVlMzFlYjAzIn0sImlhdCI6MTY0OTM1MjY3MX0.sLCvUT86CiY6_NOh0FwbMU5dOW0jxLKY5Op-6MEdynQ",
      },
    });
    const json = await response.json();
    setNotes(json);
  };
  //Add a note
  const addNote = async (title, description, tag) => {
    //API call
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI0OWVjZjVlMjJhN2VjYjVlMzFlYjAzIn0sImlhdCI6MTY0OTM1MjY3MX0.sLCvUT86CiY6_NOh0FwbMU5dOW0jxLKY5Op-6MEdynQ",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = response.json();

    //Todo API call
    const note = {
      _id: "6251bc204bacdff96473416db",
      user: "6249ecf5e22a7ecb5e31eb03",
      title: title,
      description: description,
      tag: tag,
      date: "2022-04-09T17:02:24.280Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
  };

  //Delete a note
  const deleteNote = (id) => {
    //Todo API call
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };

  //Edit a note
  const editNote = async (id, title, description, tag) => {
    //API call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI0OWVjZjVlMjJhN2VjYjVlMzFlYjAzIn0sImlhdCI6MTY0OTM1MjY3MX0.sLCvUT86CiY6_NOh0FwbMU5dOW0jxLKY5Op-6MEdynQ",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = response.json();

    //Logic to edit in client
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  };

  return (
    <NoteContext.Provider
      value={{ notes, setNotes, addNote, deleteNote, editNote, getNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};
export default NoteState;
