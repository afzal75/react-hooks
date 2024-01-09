/* eslint-disable react-hooks/exhaustive-deps */
// effect
// effect ---------> effect hocce kono ekta component render howar maddome kono kicu jodi run howa suru kore take effect bole

// useEffect er peter vitor theke kono kicu return korakei cleanup bola hoy



import { useEffect, useState } from "react";



const UseEffect = () => {

    const [hidden, setHidden] = useState(false)
    const [count, setCount] = useState(0);

    useEffect(() => {
        // setInterval(() => {
        //     console.log("Render")
        //     setCount((prev) => prev + 1)
        // }, 1000)
    }, [])

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => setHidden((prev) => !prev)}>Click</button>
            {!hidden && <ToDo />}
        </div>
    );
};


const Counter = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        const interValID = setInterval(() => {
            console.log("Render")
            setCount((prev) => prev + 1)
        }, 1000)
        return () => {
            clearInterval(interValID)
        }
    }, [])

    return <h1>This is Value for: {count}</h1>
}


const ToDo = () => {

    const controller = new AbortController();
    const signal = controller.signal;

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/1', { signal })
            .then(res => res.json())
            .then(data => alert(data.title))

        return () => {
            controller.abort();
        }
    }, [])


    return <div>TODO</div>
}

export default UseEffect;