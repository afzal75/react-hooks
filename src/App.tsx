
import { useContext } from 'react';
import './App.css';
import { TThemeContexts, ThemeContext } from './context/ThemeProvider';
import Select from './pages/Select';
// import UseRefExample from './pages/UseRefExample';
function App() {
  const { dark, setDark } = useContext(ThemeContext) as TThemeContexts
  // console.log(dark)
  return (
    <div
      className={`${dark ? "bg-black" : "bg-white"}`}>
      {/* <Profile /> */}
      {/* <button
        className='btn border-t-cyan-100'
        onClick={() => setDark(!dark)}>
        Toggole
      </button>
      <MenuList>
        <MenuItem></MenuItem>
      </MenuList> */}
      {/* <UsersContainer /> */}
      <Select>
        <Select.SelectOption value="option1">Option 1</Select.SelectOption>
        <Select.SelectOption value="option2">Option 2</Select.SelectOption>
        <Select.SelectOption value="option3">Option 3</Select.SelectOption>
        <Select.SelectOption value="option4">Option 4</Select.SelectOption>
        <Select.SelectOption value="option5">Option 5</Select.SelectOption>
      </Select>
    </div>
  )
}

export default App
