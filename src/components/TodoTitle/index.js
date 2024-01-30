import './TodoTitle.css';
import img from './img.png'

function TodoTitle() {
    return (
      <div className="container-title">
      <img width="48" height="48" src="https://img.icons8.com/fluency/48/microsoft-todo-2019.png" alt="microsoft-todo-2019"/> 
        <h1>List To<span>Dos</span></h1>
        <img src={img} />
      </div>
    );
  }


export { TodoTitle } ;