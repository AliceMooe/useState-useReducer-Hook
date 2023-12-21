import { useReducer } from "react";

const firstReducer = (state , action) => {
  switch(action.type){
    case "minus" : 
    return {...state,count : state.count - 1 };
    case "plus" : 
    return {... state, count : state.count + 1};
    case "updateKey":
      return{...state, key : action.payload};
    default :
    throw new Error();

}};
const ACTION = {
  MINUS: 'minus',
  PLUS:'plus',
  UPDATE_KEY:"updateKey",
}



function App() {
  const [state ,dispatch] = useReducer (firstReducer,{key : "" , count : 0});
  // const [key, setKey] = useState("");
  // const [count, setCount] = useState(0);
  // useEffect( () => {
  //   console.log("I am use effect hook.");
  // },[]);

  return (
    <div className="App">
    

     {/* <input type="text"  onChange={(e) => {
      setKey(e.target.value)
     }}/> */}
     {/* <h1> Your key is - {key} </h1> */}
     {/* <button onClick={() => {
      setCount((prevCount) => prevCount - 1)
     }}> - </button> */}
      {/* <button onClick={() => {
      setCount((prevCount) => prevCount + 1)
     }}> + </button> */}

     <input type="text" 
     onChange={(e) => dispatch({type: ACTION.UPDATE_KEY,payload : e.target.value})} />
     <h1> Your key is - {state.key} </h1>
     <button onClick={()=> dispatch({type: ACTION.MINUS})}>-</button>
     <span>{state.count}</span>
   
      <button onClick={()=> dispatch({type: ACTION.PLUS})}>+</button>


    </div>
  );
}

export default App;
