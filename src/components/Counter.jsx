import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    function increase() {

        setCount(count + 1);
    }

    const resetCount = () => {
        setCount(0);
    }

    return (
        <>
            <h4>1. Increase/Reset Buttons </h4>
            <div className="d-grid gap-2 d-md-block">
                <button onClick={increase} className="btn btn-primary" type="button">Increase</button>
                <p>Conteggio: {count}</p>
                <button onClick={resetCount} className="btn btn-primary" type="button">Reset</button>
            </div>
        </>
    )
};

export default Counter