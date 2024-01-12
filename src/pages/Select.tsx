import { createContext, useContext, useState } from "react";

export const SelectContext = createContext(null)


const Select = ({ children }) => {

    const [selectedOption, setSelectOption] = useState('')


    return (
        <SelectContext.Provider value={{ selectedOption, setSelectOption }}>
            <select
                onChange={(e) => setSelectOption(e.target.value)}
            >
                {children}
            </select>

        </SelectContext.Provider>
    )
};

const SelectOption = ({ value, children }) => {

    const { selectedOption, setSelectOption } = useSelectContext()

    const isActive = selectedOption === value;

    return <option
        className={`${isActive ? "bg-red-600" : "bg-white"}`}
        value={value}
    >{children}</option>
}

Select.SelectOption = SelectOption

export default Select;



// hook

const useSelectContext = () => {
    const context = useContext(SelectContext)

    if (!context) {
        throw new Error("Context out of bound")
    }
    return context;
}