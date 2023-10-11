import './App.css';
import { useState } from 'react';
import PropTypes from 'prop-types';

function Challeguesumaresta({ value }) {
    const [counter, setCounter] = useState(value);
    const handleSubstract = () => {
        setCounter(counter - 1)
    }
    const handleAdd = () => {
        setCounter(counter + 1)
    }
    const handleReset = () => {
        setCounter(value)
    }
    return (
        <div>
            <div className='center'>
                <h2>Contador</h2>
            </div>
            <div className='center'>

                <button onClick={() => handleAdd()}>+1</button>
                <span>{counter}</span>
                <button onClick={() => handleSubstract()}>-1</button>
            </div>

            <div className='center'>
                <button onClick={() => handleReset()}>REST</button>
            </div>

        </div>
    );
}
Challeguesumaresta.propTypes = {
    value: PropTypes.number.isRequired
}
export default Challeguesumaresta;
