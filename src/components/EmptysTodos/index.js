import './EmptysTodos.css';
import img from '../EmptysTodos/imgTodo.png'

function EmptysTodos() {
    return (
      <div className='empty'>
        <div className="empty-title">
            <h2>Crea tu primer To<span>DO</span></h2>
        </div>
        <div className='empty-title'>
          <img src={img} />
        </div>
      </div>
    
    );
  }


export { EmptysTodos } ;