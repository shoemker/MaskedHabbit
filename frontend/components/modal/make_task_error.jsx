import React from 'react';

const MakeTaskError = (error) => {
    
  if (error.error) return <div className='make_task_error'>{error.error}</div>;
  else return <div className='make_task_error'></div>;
  };
  
export default MakeTaskError;