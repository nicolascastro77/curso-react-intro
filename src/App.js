import React from 'react';
import './App.css';
import { TodoTitle } from "./TodoTitle";
import { TodoFilter } from "./TodoFilter";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { ButtonCreateTodo } from "./ButtonCreateTodo";


const defaultTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Cortar PAN', completed: false },
  { text: 'TOMAR CURSO', completed: true },
  { text: 'SEA LO QUE ', completed: false }
]

function App() {
  return (
    <React.Fragment>
      <TodoTitle completed = {16} total = {20}/> 
      <TodoFilter/> 
      <TodoList> 
        {defaultTodos.map (todo => (
          <TodoItem key={todo.text} text={todo.text} completed={todo.completed} /> 
        ))}
      </TodoList> 
      <ButtonCreateTodo/> 
    </React.Fragment>
  );
}

export default App;
