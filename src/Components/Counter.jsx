import React from 'react';


const Counter = (props) => {

    return (

        <div>
            <p>{props.counter}</p>
            {props.counter % 2 === 0 ? <p>белое</p> : <p>красное</p>}
        </div>
    );
};

export default Counter;