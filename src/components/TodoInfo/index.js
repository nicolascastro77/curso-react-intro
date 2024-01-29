import './TodoInfo.css';

function TodoInfo({ total,completed, loading }) {
  const congratulationsMessage = completed === total &&  !loading ? 
  <h3 className="congratulations-message" >  &#x1F389; Felicidades, has completado todos los todos!  &#x1F389;</h3> : null;
    return (
      <div className="container-info">
        <div className="container-info-total">
          <h3>Total tareas {total} </h3>
        </div>
        <div className="container-info-completed-all">
        {congratulationsMessage}
        </div>

        <div className="container-info-completed">
          <h3>Concluidas {completed} de {total}</h3>
        </div>

      </div>
    );
  }


export { TodoInfo } ;