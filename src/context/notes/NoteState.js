import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = []
  const [notes, setNotes] = useState(notesInitial)

  // Get all Notes
  const getNotes = async () => {
    // API Call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJlZjNiZjE3Yzg2YTk4Y2IwNmFiM2FjIn0sImlhdCI6MTY1OTg2NzIwNX0.dZuQnQPaEZvdtlApo3X6-w3DjVPQPdbY80471KTJ5o0'
      }
    });
    const json = await response.json();
    console.log(json);
    setNotes(json);
  }

  // Add a Note
  const addNote = async (title, description, tag) => {

    // API Call
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJlZjNiZjE3Yzg2YTk4Y2IwNmFiM2FjIn0sImlhdCI6MTY1OTg2NzIwNX0.dZuQnQPaEZvdtlApo3X6-w3DjVPQPdbY80471KTJ5o0'
      },
      body: JSON.stringify({ title, description, tag })
    });

    const json = await response.json();
    console.log(json)

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

  const deleteNote = async (id) => {
    // TODO: API Call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJlZjNiZjE3Yzg2YTk4Y2IwNmFiM2FjIn0sImlhdCI6MTY1OTg2NzIwNX0.dZuQnQPaEZvdtlApo3X6-w3DjVPQPdbY80471KTJ5o0'
      }
    });
    const json = response.json();
    console.log(json);

    console.log("Deleting note with id " + id);
    const newNotes = notes.filter((note) => { return note._id !== id });
    setNotes(newNotes);
  }

  // Edit a Note

  const editNote = async (id, title, description, tag) => {

    // API Call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJlZjNiZjE3Yzg2YTk4Y2IwNmFiM2FjIn0sImlhdCI6MTY1OTg2NzIwNX0.dZuQnQPaEZvdtlApo3X6-w3DjVPQPdbY80471KTJ5o0'
      },
      body: JSON.stringify({ title, description, tag })
    });
    const json = await response.json();
    console.log(json);

    let newNotes = JSON.parse(JSON.stringify(notes))
    // Logic to edit in client
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;

        break;
      }
    }
    setNotes(newNotes);

  }

  return (
    <NoteContext.Provider value={{ notes, setNotes, addNote, deleteNote, editNote, getNotes }}>
      {props.children}
    </NoteContext.Provider>
  )
}
export default NoteState;