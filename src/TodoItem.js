function TodoItem(props) {
  return (
    <div>
      <li>
        <span>V</span>
        <p>{props.text}</p>
        <span>X</span>
      </li>
    </div>
  );
}


export { TodoItem } ;