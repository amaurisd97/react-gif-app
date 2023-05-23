import { ChangeEvent, FormEvent, useState } from 'react'

export const AddCategory = ({
  setCategory,
}: {
  setCategory: React.Dispatch<React.SetStateAction<string[]>>
}) => {
  const [inputValue, setInput] = useState('')

  const handleInput = (event: ChangeEvent<HTMLInputElement>) =>
    setInput(event.target.value)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
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
