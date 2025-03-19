
import React from "react";
import './../styles/App.css';

const App = () => {
    const [name,setName] = useState("");
const handleChange=(e)=>{
    setName(e.target.value)
  }
  return (
    <div>
        {/* Do not remove the main div */}
    <label>Enter Your Name:</label>
      <input type='text' onChange={handleChange}/>
      <div>{name ? `Hello, ${name}!` : ""}</div>
    </div>
  )
}

export default App
