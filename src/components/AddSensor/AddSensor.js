import React from 'react';
import BookForm from './BookForm';

const AddSensor = () => {
    const handleOnSubmit = (sensor) => {
      console.log(sensor);
    };
  
    return (
      <React.Fragment>
        <BookForm handleOnSubmit={handleOnSubmit} />
      </React.Fragment>
    );
  };
  
  export default AddSensor;