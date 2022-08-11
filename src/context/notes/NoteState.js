import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
    const notesInitial = [
        {
          "_id": "62efeahhhh19c4e62a8a8ac1ce1c",
          "user": "62ef3bf17c86a98cb06ab3ac",
          "title": "My Title",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2022-08-07T16:36:41.332Z",
          "__v": 0
        },
        {
          "_id": "62efea1ahhhhhhc4e62a8a8ac1ce1e",
          "user": "62ef3bf17c86a98cb06ab3ac",
          "title": "My Title",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2022-08-07T16:36:42.174Z",
          "__v": 0
        },
        {
          "_id": "62efea19c4e62ag8a8ahhh1ce1c",
          "user": "62ef3bf17c86a98cb06ab3ac",
          "title": "My Title",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2022-08-07T16:36:41.332Z",
          "__v": 0
        },
        {
          "_id": "62hhhhefea1akc4e62a8a8ac1ce1e",
          "user": "62ef3bf17c86a98cb06ab3ac",
          "title": "My Title",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2022-08-07T16:36:42.174Z",
          "__v": 0
        },
        {
          "_id": "62efega19c4e62a8hhhha8ac1ce1c",
          "user": "62ef3bf17c86a98cb06ab3ac",
          "title": "My Title",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2022-08-07T16:36:41.332Z",
          "__v": 0
        },
        {
          "_id": "62efhhhhea1ac4e62a8a8gac1ce1e",
          "user": "62ef3bf17c86a98cb06ab3ac",
          "title": "My Title",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2022-08-07T16:36:42.174Z",
          "__v": 0
        },
        {
          "_id": "62efeka19chhh4e62a8a8ac1ce1c",
          "user": "62ef3bf17c86a98cb06ab3ac",
          "title": "My Title",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2022-08-07T16:36:41.332Z",
          "__v": 0
        },
        {
          "_id": "62efehhhhh1ac4e62a8a8ac1cke1e",
          "user": "62ef3bf17c86a98cb06ab3ac",
          "title": "My Title",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2022-08-07T16:36:42.174Z",
          "__v": 0
        }
      ]
      const [notes, setNotes] = useState(notesInitial)

    return (
        <NoteContext.Provider value={{notes, setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;