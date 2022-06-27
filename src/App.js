import React from "react";
import Welcome from "./components/Welcome";
import Homepage from "./components/Homepage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
       <Router>
      <div>
        <Routes>
          <Route path="/" element= {<Welcome />} />
          <Route path="/Homepage" element= {<Homepage />} />
        </Routes>
      </div>
    </Router>
  );
    </div>
  );
}

export default App;
