import { useEffect, useState } from "react";


function App() {
  const [todos, setTodos] = useState([]);

  useEffect((_) => {
    fetchData();
   },[]);

   const fetchData = async () => {
    const response =  await fetch("https://jsonplaceholder.typicode.com/todos")
      const data =  await response.json();
      setTodos(data);
      console.log(data);
   };

  return(
  <section>
    <table>
     <thead>
     <tr>
        <th>ID</th>
        <th>Title</th>
        <th>Completed</th>
      </tr>
     </thead>
    <tbody>
    {todos.map((todos) => (
     <tr key={todos.id}>
      <td>{todos.id}</td>
      <td>{todos.title}</td> 
      {/* <td>{String(todos.completed)}</td> */}
      {todos.completed ? <p>Done</p> : <p className="none">None</p>}
      </tr>
       ))}
   
   </tbody>
    </table>
  </section>)
}

export default App;
