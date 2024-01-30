import React from 'react';
import './App.css';
import { TodoTitle } from "./components/TodoTitle";
import { TodoInfo } from "./components/TodoInfo";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { TodoSearch } from "./components/TodoSearch";
import { EmptysTodos } from "./components/EmptysTodos";
import { TodosError } from "./components/TodosError";
import { TodosLoading } from "./components/TodosLoading";
import { TodoAdd } from "./components/TodoAdd";
import { Modal } from "./components/Modal";
import { useLocalStorage } from "./hooks/useLocalStorage";

// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: true },
//   { text: 'Cortar PAN', completed: false },
//   { text: 'TOMAR CURSO', completed: true },
//   { text: 'SEA LO QUE ', completed: false }
// ]

function App() {

  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error
  } = useLocalStorage('TODOS_V1', []);


  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;
  const [searchValue, setSearchValue] = React.useState('');

  const [openModal, setOpenModal] = React.useState(false);

  const searchedTodos = todos.filter(todo => { 
    const todoText = todo.text.toLowerCase()
    const TodoSearchText = searchValue.toLowerCase();
    return todoText.includes(TodoSearchText);
  }  );


  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text)
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos)
  }

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text)
    newTodos.splice(todoIndex,1);
    saveTodos(newTodos)
  }

  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      text,
      completed: false
    });
    saveTodos(newTodos)
  }

  return (
    <>
      <TodoTitle/> 
      <TodoAdd
      openModal = {openModal}
      setOpenModal = {setOpenModal}
      /> 

      <TodoInfo completed = {completedTodos} total = {totalTodos} loading = {loading}/> 
      {( !loading && searchedTodos.length > 0) && <TodoSearch
      searchValue= {searchValue}
      setSearchValue= {setSearchValue}
      />} 
      <TodoList> 
        {loading && <TodosLoading />}
        {loading && <TodosLoading />}
        {loading && <TodosLoading />}
        {error && <TodosError />}
        { ( !loading && searchedTodos.length == 0) && <EmptysTodos />}
        {searchedTodos.map (todo => (
          <TodoItem key={todo.text} 
                    text={todo.text} 
                    completed={todo.completed}
                    onComplete = {() => completeTodo(todo.text)}
                    onDelete = {() => deleteTodo(todo.text)}
                    /> 
        ))}
      </TodoList> 


      {openModal && 
        <Modal
        openModal = {openModal}
        setOpenModal = {setOpenModal}
        addTodo = {addTodo}
        >
        </Modal>  
      }
    </>
  );
}

export default App;
