import { ButtonCreateTodo } from "./ButtonCreateTodo";
import './TodoFilter.css';

function TodoFilter() {
    return (
      <div className="container-filter">
       <input type="text" placeholder="cortar cebolla" />
       <ButtonCreateTodo/> 
      </div>
    );
  }


export { TodoFilter } ;