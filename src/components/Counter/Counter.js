import React, { useState } from 'react'
//Css
import '../Counter/Counter.css'
//mui material
import Button from '@mui/material/Button';

function Counter() {

    const [counter, setCounter] = useState(0);

    const addNumber = () => {
        if (counter >= 0) {
            setCounter(counter + 1);
        };
    }

    const substractNumber = () => {
        if (counter > 0) {
            setCounter(counter - 1);
        };
    }



    return (
        <>
            <div style={{ marginTop: '10%'}}>
                <div className='div-all'>
                    <h1>Simple counter</h1>
                </div>

                <div className='div-all'>
                    <h2>{counter}</h2>
                </div>

                <div className='div-all' style={{ marginTop: '10px' }}>
                    <Button variant="contained" color="success" onClick={addNumber}>
                        ADD
                    </Button>
                </div>
                <div className='div-all' style={{ marginTop: '10px' }}>
                    <Button variant="outlined" color="error" onClick={substractNumber}>
                        SUBSTRACT
                    </Button>
                </div>
            </div>



        </>
    );
};

export default Counter;