import './App.css';
import React, { useState, useEffect } from "react";
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import Todo from "./Todo";
import db from "./firebase";
import firebase from "firebase";

function App() {
  const [todos, setTodos] = useState(["abc", "def"]);
  const [input, setInput] = useState("");
  
  useEffect(() => {
    db.collection("todos").orderBy("timestamp", "desc").onSnapshot(snapshot => {
      
      setTodos(snapshot.docs.map(doc => doc.data().todo))

      //console.log(snapshot.docs.map(doc => doc.data()));
    })

  }, [input]);   

  const addTodo = (event) => {
    event.preventDefault();

    db.collection("todos").add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    

    setTodos([...todos, input]);
    setInput("");
  }
  return (
    <div className="App">
      <h1>Have a nice day!.. 🚀</h1>

      <form>
        <FormControl>
          <InputLabel>✔️ Write a Todo</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value) }/>
        </FormControl>

        <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary">
          Add todo
        </Button>

      </form>

      <ul>
        {todos.map(todo => (
          <Todo text={todo} />
        ))}
      </ul>




    </div>



  );
}
export default App;
