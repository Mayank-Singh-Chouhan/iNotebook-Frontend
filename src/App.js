import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from "./components/About";
import NoteState from './context/notes/NoteState';
import Alert from './components/Alert';
import Login from './components/Login';
import Signup from './components/Signup';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {


  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          <Alert alert={alert} />
          <div className="container">
            <Routes>

              <Route path="/" exact element={<Home showAlert={showAlert} />} />
              <Route path="/about" exact element={<About />} />
              <Route path="/login" exact element={<Login showAlert={showAlert} />} />
              <Route path="/signup" exact element={<Signup showAlert={showAlert} />} />

            </Routes>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
