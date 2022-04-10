import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "6251bc154bacd3ff9647316d9",
      user: "6249ecf5e22a7ecb5e31eb03",
      title: "My Title",
      description: "Wake up early",
      tag: "personal",
      date: "2022-04-09T17:02:13.791Z",
      __v: 0,
    },
    {
      _id: "6251bc204bacdff9447316db",
      user: "6249ecf5e22a7ecb5e31eb03",
      title: "My Title2",
      description: "Wake up early again",
      tag: "personal",
      date: "2022-04-09T17:02:24.280Z",
      __v: 0,
    },

    {
      _id: "6251bc204bacdff96473516db",
      user: "6249ecf5e22a7ecb5e31eb03",
      title: "My Title2",
      description: "Wake up early again",
      tag: "personal",
      date: "2022-04-09T17:02:24.280Z",
      __v: 0,
    },
    {
      _id: "6251bc204bacdff96747316db",
      user: "6249ecf5e22a7ecb5e31eb03",
      title: "My Title2",
      description: "Wake up early again",
      tag: "personal",
      date: "2022-04-09T17:02:24.280Z",
      __v: 0,
    },
    {
      _id: "6251bc204bacdff96472316db",
      user: "6249ecf5e22a7ecb5e31eb03",
      title: "My Title2",
      description: "Wake up early again",
      tag: "personal",
      date: "2022-04-09T17:02:24.280Z",
      __v: 0,
    },
    {
      _id: "6251bc204bacdff96473416db",
      user: "6249ecf5e22a7ecb5e31eb03",
      title: "My Title2",
      description: "Wake up early again",
      tag: "personal",
      date: "2022-04-09T17:02:24.280Z",
      __v: 0,
    },
  ];
  const [notes, setNotes] = useState(notesInitial);

  //Add a note
  const addNote = (title, description, tag) => {
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
  const editNote = (id, title, description, tag) => {};

  return (
    <NoteContext.Provider
      value={{ notes, setNotes, addNote, deleteNote, editNote }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};
export default NoteState;
