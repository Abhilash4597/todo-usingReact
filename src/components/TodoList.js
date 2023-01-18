import React, {useState} from 'react'
import Todo from './Todo'

function TodoList() {

  const [todos, setTodos] = useState([]);

  const addTodo = todo => {
    if (!todo.text) {
      return
    }

    const newTodos = [...todo, ...todos];

    setTodos(newTodos);
    // console.log(...todos);
  }
  return (
    <div>
      <h1>Write Your Plan</h1>
      <Todo onSubmit={addTodo} />
    </div>
  )
}

export default TodoList