
import { useState } from 'react';
import './App.css'
import UseStateExample from './pages/UseStateExample.tsx';
import UseReducer from './pages/UseReducer.tsx';

function App() {
  const [counter, setCounter] = useState(0)
  return (
    <div>
      {/* <UseStateExample counter={counter} setCounter={setCounter} /> */}
      <UseReducer></UseReducer>
    </div>
  )
}

export default App
