import NoteContext from "./noteContext"
import { useState } from 'react';

const NoteState=(props)=>{
    const notesInitial=[
        {
          "_id": "6251bc154bacdff9647316d9",
          "user": "6249ecf5e22a7ecb5e31eb03",
          "title": "My Title",
          "description": "Wake up early",
          "tag": "personal",
          "date": "2022-04-09T17:02:13.791Z",
          "__v": 0
        },
        {
          "_id": "6251bc204bacdff9647316db",
          "user": "6249ecf5e22a7ecb5e31eb03",
          "title": "My Title2",
          "description": "Wake up early again",
          "tag": "personal",
          "date": "2022-04-09T17:02:24.280Z",
          "__v": 0
        }
      ]
      const [notes,setNotes]=useState(notesInitial)
    return(
        <NoteContext.Provider value={{notes,setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}
export default NoteState;