// import { Dispatch } from "react";




// type TCounter = {
//     counter: number,
//     setCounter: Dispatch<React.SetStateAction<number>>
// }



// const UseStateExample = ({ counter, setCounter }: TCounter) => {

//     // console.log("Render")

//     return (
//         <div>
//             <h1>{counter}</h1>
//             <button onClick={() => setCounter(counter + 1)}>Increment</button>
//             <button onClick={() => setCounter(counter - 1)}>Decrement</button>
//             <button onClick={() => setCounter(0)}>Reset</button>
//         </div>
//     );
// };

// export default UseStateExample;

import React, { useState } from "react";

const UseStateExample = () => {
    // const [name, setName] = useState("");
    // const [email, setEmail] = useState("");

    // object state

    const [user, setUser] = useState({ name: '', email: '' })

    const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(user)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        const inputName = e.target.name;
        const value = e.target.value;
        setUser({ ...user, [inputName]: value })
    }


    return (
        <form onSubmit={handleSubmit}>
            <input className="border-2" onChange={handleChange} type="text" name="name" id="name" />
            <input className="border-2" onChange={handleChange} type="text" name="email" id="email" />
            <button type="submit">Submit</button>
        </form>
    );
};

export default UseStateExample;