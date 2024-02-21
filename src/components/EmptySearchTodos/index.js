
function EmptySearchTodos(props) {
    return (
      <div className='empty'>
        <div className="empty-title">
            <h2>No hay resultaod de busqueda para: <span>{props.searchValue}</span></h2>
        </div>
        <div className='empty-title'>
            <img src="https://i.ibb.co/nnCwhn8/business-3d-377.png" alt="" />
        </div>
      </div>
    
    );
  }


export { EmptySearchTodos } ;