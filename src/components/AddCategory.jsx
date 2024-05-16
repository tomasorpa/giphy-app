import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {
    const [inputValue, setInputValue] = useState("")
    const handleInputChange = ({target}) => {
       
        setInputValue(target.value)
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        const cleanedValue = inputValue.trim();
        if (cleanedValue.length < 1) return
        // setCategories(categories=>[inputValue,...categories])
        onNewCategory(cleanedValue)
        setInputValue("")
    }
    return (
        <form onSubmit={event=>handleSubmit(event)}>
            <input
                type="text"
                placeholder="Search Gifs"
                value={inputValue}
                onChange={event => handleInputChange(event)}
                // SE NECESITA EL EVENT COMO ARGUMENTO PARA QUE SE PUEDA INGRESAR AL EVENT Y SACAR EL TARGET
                />
        </form>
  )
}
