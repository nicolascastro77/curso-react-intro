import './TodoInfo.css';

function TodoInfo({ total,completed }) {
    return (
      <div className="container-info">
        <div className="container-info-total">
          <h3>Total tareas {total} </h3>
        </div>
        <div className="container-info-completed">
          <h3>Concluidas {completed} de {total}</h3>
        </div>

      </div>
    );
  }


export { TodoInfo } ;