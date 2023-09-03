import { useState } from "react";
import classes from  "./Counter.module.scss";

export const Counter = () => {
    const [count, setCounter] = useState(0);

    const increment = () => {
        setCounter(count + 1);
    }

    return (<div>
        <button onClick={increment} className={classes.btn}>increment</button>
        <h2>{count}</h2>
    </div>)
}