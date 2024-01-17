import React from 'react';
import './App.css';
import { TodoTitle } from "./TodoTitle";
import { TodoInfo } from "./TodoInfo";
import { TodoFilter } from "./TodoFilter";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { TodoSearch } from "./TodoSearch";


const defaultTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Cortar PAN', completed: false },
  { text: 'TOMAR CURSO', completed: true },
  { text: 'SEA LO QUE ', completed: false }
]

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;
  const [searchValue, setSearchValue] = React.useState('');
  return (
    <>
      <TodoTitle/> 
      <TodoFilter/> 
      <TodoInfo completed = {completedTodos} total = {totalTodos}/> 
      <TodoSearch
      searchValue= {searchValue}
      setSearchValue= {setSearchValue}
      /> 
      <TodoList> 
        {defaultTodos.map (todo => (
          <TodoItem key={todo.text} text={todo.text} completed={todo.completed} /> 
        ))}
      </TodoList> 
    </>
  );
}

export default App;
