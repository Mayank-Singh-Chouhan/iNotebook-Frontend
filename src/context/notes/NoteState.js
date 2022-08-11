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

  // Add a Note

  const addNote = (title, description, tag) => {
    // TODO: API Call
    console.log("Adding a new note")
    const note = {
      "_id": "62efehhjjjjjjhhh1ac4e62a8a8ac1cke1e",
      "user": "62ef3bf17c86a98cb06ab3ac",
      "title": title,
      "description": description,
      "tag": tag,
      "date": "2022-08-07T16:36:42.174Z",
      "__v": 0
    };
    setNotes(notes.concat(note));

  }

  // Delete a Note

  const deleteNote = (id) => {
    // TODO: API Call
    console.log("Deleting note with id " + id);
    const newNotes = notes.filter((note) => { return note._id !== id });
    setNotes(newNotes);
  }

  // Edit a Note

  const editNote = (id, title, description, tag) => {


  }

  return (
    <NoteContext.Provider value={{ notes, setNotes, addNote, deleteNote, editNote }}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState;