import { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({ setCategory }) => {
  const [inputValue, setInput] = useState('')

  const handleInput = (event) => setInput(event.target.value)

  const handleSubmit = (event) => {
    event.preventDefault()
    setCategory((category) => [inputValue, ...category])
    setInput('')
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>Add category: </label>
      <input type='text' value={inputValue} onChange={handleInput} />
    </form>
  )
}

AddCategory.propTypes = {
  setCategory: PropTypes.func.isRequired,
}
