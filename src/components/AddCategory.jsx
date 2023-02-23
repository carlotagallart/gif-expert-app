import { useState } from "react"

export const AddCategory = () => {
const [inputValue, setInputValue] = useState('One Peace');
const onChangeInput = ({target}) => {
    // console.log(target.value)
    setInputValue(target.value);
}
const onSubmit = (event) => {
    event.preventDefault(event);
    console.log(inputValue);
}
  return (
    <form onSubmit={(event) => onSubmit(event)}>
    <input type="text"
    value={inputValue}
    placeholder="Buscar gifs"
    onChange={onChangeInput}
    />
    </form>
  )
}
