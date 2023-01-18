import React, { useState } from 'react';

function Todo(props) {
  const [input, setInput] = useState('');

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
      
    props.onSubmit({
      id: Math.floor(Math.random() * 999),
      text: input,
    });
    setInput('');
  };

  return (
    <form className="todo-list" onClick={handleSubmit}>
      <input
        type="text"
        placeholder="Add ToDo"
        value={input}
        name="text"
        className="todo_input"
        onChange={handleChange}
      />
      <button className="input_btn">ADD</button>
    </form>
  );
}

export default Todo;
