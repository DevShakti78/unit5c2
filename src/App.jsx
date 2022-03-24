import "./App.css";
import { Rentals } from "./Components/Rentals/Rentals";
import { AddHouse } from "./Components/AddHouse/AddHouse";
import {useState} from "react"
 
function App() {
const [state,setState]=useState("show");

const handleChange = () => {
  if(state==="add"){
    setState("show")
  }else if(state==="show"){
    setState("add")
  }
  console.log(state)
}

  return (
    <div className="App">
      <button className="toggleForm" onClick={handleChange}>
      {state==="show" ? "Add House" : "Show Rentals"}
        {/* Show text Add House or Show Rentals based on state */}
      </button>
      {state==="show" ? <Rentals/> : <AddHouse/>}
      {/* Show component based on state */}
      <br />
    </div>
  );
}

export default App;
