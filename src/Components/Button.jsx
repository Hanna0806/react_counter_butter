import React from 'react';
import Counter from './Counter';


const Button = (props) => {
 

  return (
    <div>
      <button onClick={()=> props.setCounter((prevState) => prevState + 1)}>Нажми</button>
 
    </div>
  );
};

export default Button;