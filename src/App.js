import {useState} from "react"
import './App.css';

function App() {
  const [number,setNumber]= useState(0)
  const [background,setBackground] = useState("blue")
  const increaseTemperature=()=>{
    if(number>=0){
    const newNumber = number - 1
    if(newNumber<=10){
      setBackground("blue")
    }
    else if(newNumber>11 && newNumber<15){
      setBackground("orangered")
    }
    else if(newNumber>15){
      setBackground("red")
    }
    else if(newNumber>25){
      alert("çok sıcak")
    }
    setNumber(newNumber)
  }
  else{
    setNumber(0)
  }
}
  const decreaseTemperature=()=>{
    if(number>=0){
    const newNumber = number + 1
    if(newNumber<=10){
      setBackground("blue")
    }
    else if(newNumber>11 && newNumber<15){
      setBackground("orangered")
    }
    else if(newNumber>15){
      setBackground("red")
    }
    setNumber(newNumber)
  }
  else{
    setNumber(0)
  }
}
  return (
    <div className="App">
      <div className="container">
        <div className={`show-term ${background}`}>{number}°C</div>
        <div className="button-container ">
          <button className={`${background}`} onClick={decreaseTemperature}>+</button>
          <button className={`${background}`} onClick={increaseTemperature}>-</button>
        </div>
      </div>
    </div>
  );
}

export default App;
