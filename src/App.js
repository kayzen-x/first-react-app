import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Expand from "./expand-outline.svg";
import Button from "./components/Button";
import { motion } from "framer-motion";


function App() {
  const [count, setCount] = useState(0);
  const [greet, setGreet] = useState("Hello Mike");
  const [colorx, setColorx] = useState({backgroundColor: "gold"})

  const decrement = () => {
    setCount(count - 1);
  };

  const increment = () => {
    setCount(count + 1);
  }

  const greetX = () => {
    setGreet("It's nice seeing you again");
    setColorx({backgroundColor: "purple"});
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{greet}</h1>
        <span class="btn b my-3 fw-bold" onClick={greetX} style={colorx}>Click Me</span>
        <div class="d-flex align-items-center my-4">
          <Button text="-" onClick={decrement} class="me-4" />
          <span class="mx-5">{count}</span>
          <Button text="+" onClick={increment} />
        </div>
        <motion.button 
          whileHover={{scale: 2}}

        >
          Lunch Modal
        </motion.button>
        <img src={Expand} width={250} height={50} alt="Expand" />
      </header>
    </div>
  );
}

export default App;
