import './TodoItem.css';
import { FaSmile, FaFrown, FaTrashAlt } from "react-icons/fa";

function TodoItem(props) {
  return (
    <div className="container-task">
      <li>
        {/* <span className={`Icon icon-check ${props.completed && "icon-check--active"} `}
              onClick={props.onComplete}
              >✔
              </span> */}
       <span className={`Icon icon-check ${props.completed && "icon-check--active"} `}>
        {props.completed ? <FaSmile onClick={props.onComplete} /> : <FaFrown onClick={props.onComplete} />}
      </span> 
        <p className={`todoItem-p  ${props.completed && "todoItem-p--complete"} `} >{props.text}</p>
        <span className="Icon icon-delete">
              <FaTrashAlt onClick={props.onDelete}/>
        </span>

      </li>
    </div>
  );
}


export { TodoItem } ;