import React, { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';

function Todos() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts?id=10")
        .then((res) => {
            setTodos(res.data)
        })
        console.log(todos);
    },[])

  return (
    <>
      {todos.map(todo => <Track todo={todo}/> )}
    </>
  )
}


function Track( {todo} ) {
    return <div>
        {todo.title}
        <br />
        {todo.body}
    </div>
}

export default Todos