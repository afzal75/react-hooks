
import { useContext } from 'react';
import './App.css';
import { ThemeContext } from './context/ThemeProvider';
// import UseRefExample from './pages/UseRefExample';
function App() {
  const { dark, setDark } = useContext(ThemeContext)
  console.log(dark)
  return (
    <div className={`${dark ? "bg-black" : "bg-white"}`}>
      <button
        className='btn border-t-cyan-100'
        onClick={() => setDark(!dark)}>
        Toggole
      </button>
      {/* <UseStateExample counter={counter} setCounter={setCounter} /> */}
      {/* <UseReducer></UseReducer> */}
      {/* <UseEffect></UseEffect> */}
      {/* <UseRefExample/> */}
    </div>
  )
}

export default App
