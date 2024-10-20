import React, { useState } from 'react';
import Button from './Button';
import Counter from './Counter';
import List from './List/List';



const App = () => {
    const [counter, setCounter] = useState(0)

    return (
        <div>
            <Button setCounter={setCounter} />
            <Counter counter={counter} />
            <List />
        </div>
    );
};

export default App;