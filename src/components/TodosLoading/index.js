import React from 'react';
import './TodosLoading.css';

function TodosLoading() {
    return (
        <div className="container-task ">
        <li className='skeleton-loader'>
          {/* <span className={`Icon icon-check ${props.completed && "icon-check--active"} `}
                onClick={props.onComplete}
                >✔
                </span> */}
         <span className={`Icon icon-check && "icon-check--active"} `}>
          {}
        </span> 
          <p className={`todoItem-p && "todoItem-p--complete"} `} ></p>
          <span className="Icon icon-delete">
          </span>
  
        </li>
      </div>
    );
  }


export { TodosLoading } ;