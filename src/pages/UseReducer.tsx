
// import { ChangeEvent, useReducer } from "react";

// type TAction = {
//     type: string;
//     payload: string
// }


// const UseReducer = () => {
//     const initialState = { name: "", email: "" }
//     const reducer = (currentState: typeof initialState, action: TAction) => {

//         switch (action.type) {
//             case 'addName':
//                 return { ...currentState, name: action.payload }
//             case 'addEmail':
//                 return { ...currentState, email: action.payload }
//             case 'incrementBySetAmount':
//                 return

//             default:
//                 return currentState;
//         }
//     }
//     const [state, dispatch] = useReducer(reducer, initialState)

//     const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
//         e.preventDefault()
//         console.log(state)
//     }

//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <input onChange={(e) => dispatch({ type: 'addName', payload: e.target.value })} type="text" name="name" id="name" />
//                 <input onChange={(e) => dispatch({ type: 'addEmail', payload: e.target.value })} type="text" name="email" id="email" />
//                 <button type="submit">Submit</button>
//             </form>

//             {/* <h1>{state.count}</h1>
//             <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
//             <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
//             <button onClick={() => dispatch({ type: 'incrementBySetAmount', payload: 3 })}>Increment BY 3</button> */}
//         </div>
//     );
// };

// export default UseReducer;










import { ChangeEvent, useReducer } from "react";

type TAction =
    | { type: "addName"; payload: string }
    | { type: "addEmail"; payload: string };

type TState = {
    name: string;
    email: string;
};

const initialState: TState = {
    name: "",
    email: "",
};

const reducer = (currentState: TState, action: TAction): TState => {
    switch (action.type) {
        case "addName":
            return { ...currentState, name: action.payload };
        case "addEmail":
            return { ...currentState, email: action.payload };
        default:
            return currentState;
    }
};

const UseReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(state);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    onChange={(e) => dispatch({ type: "addName", payload: e.target.value })}
                    type="text"
                    name="name"
                    id="name"
                    value={state.name}
                />
                <input
                    onChange={(e) => dispatch({ type: "addEmail", payload: e.target.value })}
                    type="text"
                    name="email"
                    id="email"
                    value={state.email}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default UseReducer;
