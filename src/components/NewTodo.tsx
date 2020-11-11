import React, { useRef } from 'react'
import './NewTodo.css'

type NewTodoProps = {
  onTodoAdd: (todoText: string) => void
}

const NewTodo: React.FC<NewTodoProps> = (props) => {
  const userInputRef = useRef<HTMLInputElement>(null)
  const SubmitHandler = (e: React.FormEvent)=> {
    e.preventDefault()
    const enteredText = userInputRef.current!.value
    props.onTodoAdd(enteredText)
  }
  return (
    <form onSubmit={SubmitHandler}>
      <div className='form-control'>
        <label htmlFor="todo-text">TODO内容</label>
        <input type="text" id="todo-text" ref={ userInputRef}/>
      </div>
      <button type="submit">TODOの追加</button>
    </form>
  )
}

export default NewTodo
