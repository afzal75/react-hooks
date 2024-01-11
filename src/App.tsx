
// import { useState } from 'react';
import './App.css';
// import UseStateExample from './pages/UseStateExample.tsx';
// import UseReducer from './pages/UseReducer.tsx';
import UseRefExample from './pages/UseRefExample';

function App() {
  // const [counter, setCounter] = useState(0)
  return (
    <div>
      {/* <UseStateExample counter={counter} setCounter={setCounter} /> */}
      {/* <UseReducer></UseReducer> */}
      {/* <UseEffect></UseEffect> */}
      <UseRefExample />
    </div>
  )
}

export default App
