import React from 'react';
import Map from '../map/map'

const Task = ({task}) => {
  const location = {
    address: task.location + " San Francisco California (approx)",
    lat: Number(task.latitude),
    lng: Number(task.longitude),
  }
  

  return (
    <div className='task-container' key = {task.id}>

      <div className="center"><p className="task-brief"> {task.brief}</p> </div>
      <br></br>
      <div className="after-brief">
        <div>
          <img src={task.photoUrl} className="taskPhoto"></img>

        </div>
        <div className='task-fields-container'>
          <p className='task-fields-1' >{task.description}	</p>
          <p className='task-fields-2'>At: {task.location}</p>
          <p className='task-fields-3'>Need a Vehicle? : {task.vehicle_needed ? "yes" : "no"}</p>
          <p className='task-fields-4'>Maker : {task.maker_name}</p>
          <p className='task-fields-4'>Doer : {task.doer_name}</p>

        </div>

        <div>
          <Map location={location} zoomLevel={18} />
        </div>

      </div>

    </div>
  )
}

export default Task;