import React from 'react';

const Task = ({task}) => (  
  <div className='task-container'>
    <div className="center"><p className="task-brief"> {task.brief}</p> </div>
    <div className="after-brief">
      <div>
        <img src={task.photoUrl} className="taskPhoto"></img>

      </div>
      <div>
        <p className='task-fields-1'>Descr: {task.description}	</p>
        <p className='task-fields-2'>At: {task.location}</p>
        <p className='task-fields-3'>Need a Vehicle? : {task.vehicle_needed ? "yes" : "no"}</p>

      </div>
    </div>
  </div>
)

export default Task;