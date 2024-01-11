
import { useContext } from 'react';
import './App.css';
import { MenuItem, MenuList } from './components/Menu';
import { TThemeContexts, ThemeContext } from './context/ThemeProvider';
// import UseRefExample from './pages/UseRefExample';
function App() {
  const { dark, setDark } = useContext(ThemeContext) as TThemeContexts
  console.log(dark)
  return (
    <div className={`${dark ? "bg-black" : "bg-white"}`}>
      <button
        className='btn border-t-cyan-100'
        onClick={() => setDark(!dark)}>
        Toggole
      </button>
      <MenuList>
        <MenuItem></MenuItem>
      </MenuList>
    </div>
  )
}

export default App
