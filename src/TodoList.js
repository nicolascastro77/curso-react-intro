import './TodoList.css';



function TodoList({children}) {
    return (
      <div className="container-list">
        <ul>
          {children}
        </ul>
      </div>
    );
  }


export { TodoList } ;