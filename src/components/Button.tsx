import { text } from "stream/consumers"
import { useState } from 'react';

type ButtonProps = {
    text?: string;
}


export function Button(Button: ButtonProps) {
    const [counter, setCounter] = useState(0);
    let counter2 = 0;

    function Increment() {
        setCounter(counter+1);
    }
    function Increment2() {
        counter2 += 1;
    }
    return (
        <>
            <button onClick={Increment}>{counter}</button>
            <button onClick={Increment2}>{counter2}</button>
        </>
        
    )
}