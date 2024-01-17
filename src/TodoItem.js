import './TodoItem.css';


function TodoItem(props) {
  return (
    <div className="container-task">
      <li>
        <span className={`Icon icon-check ${props.completed && "icon-check--active"} `}>✔</span>
        <p className={`todoItem-p  ${props.completed && "todoItem-p--complete"} `} >{props.text}</p>
        <span className="Icon icon-delete">X</span>
      </li>
    </div>
  );
}


export { TodoItem } ;