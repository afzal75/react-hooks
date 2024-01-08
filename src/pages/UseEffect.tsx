// effect
// effect ---------> effect hocce kono ekta component render howar maddome kono kicu jodi run howa suru kore take effect bole

// useEffect er peter vitor theke kono kicu return korakei cleanup bola hoy



import { useEffect, useState } from "react";



const UseEffect = () => {

    const [hidden, setHidden] = useState(false)

    useEffect(() => {
        console.log("Render")

        return () => {
            console.log("inside clean up")
        }

    }, [hidden])

    return (
        <div>
            <button onClick={() => setHidden((prev) => !prev)}>Click</button>
        </div>
    );
};

export default UseEffect;