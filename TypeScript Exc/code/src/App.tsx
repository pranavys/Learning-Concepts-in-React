import React from "react";
import "./App.css";
import { Person } from "./components/Person";

function App() {
  return (
    <div className="App"> {/* Corrected className */}
      <Person
        name="Pedro"
        email="pedro@gmail.com" {/* Corrected email */}
        age={21}
        isMarried={true}
        friends={["jake", "jessica", "jerry"]}
      />
    </div>
  );
}

export default App;
