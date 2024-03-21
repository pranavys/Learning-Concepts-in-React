import "./App.css";
import { Person } from "./components/Person";

function App() {
  const name = "Pedro"; // Corrected the variable declaration
  
  return (
    <div className="App">
      <Person
        name={name} // Used the variable name instead of a string
        email="pedro@gmail.com"
        age={21}
        isMarried={true}
        friends={["Jessica", "Jake", "Jerry", "Jasmine"]} // Corrected the casing of names
      />
    </div>
  );
}

export default App;
