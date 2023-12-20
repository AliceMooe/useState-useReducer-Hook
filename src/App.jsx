import { useState } from "react";



function App() {
  const [key, setKey] = useState("");
  const [count, setCount] = useState(0);
  // useEffect( () => {
  //   console.log("I am use effect hook.");
  // },[]);

  return (
    <div className="App">
    

     <input type="text"  onChange={(e) => {
      setKey(e.target.value)
     }}/>
     <h1> Your key is - {key}</h1>
     <button onClick={() => {
      setCount((prevCount) => prevCount - 1)
     }}> - </button>
     <span>{count}</span>
     <button onClick={() => {
      setCount((prevCount) => prevCount + 1)
     }}> + </button>

    </div>
  );
}

export default App;
