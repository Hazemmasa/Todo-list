import React from 'react'
import '../App.css'



const Form = ({inputText,setInputText ,setTodos,todos ,setStatus}) => {

const inputTextHandler = (event)=>{
setInputText(event.target.value)

}

const submitTodoHandler =(e)=>{
e.preventDefault();

setTodos([...todos, {text:inputText,completed :false , id : Math.random() * 1000}]);

setInputText("")

}

const statusHandler = (event)=>{
  setStatus(event.target.value)

console.log(event)


}
  return (
<form>
  <div>
  <input value={inputText} onChange={inputTextHandler} type="text" className='todo-input'/>
    <button className='todo-button' onClick={submitTodoHandler} >
            +
    </button>
  </div>

    <div className='select'>
        <select onChange={statusHandler} name="todos" className='filter-todo'>
            <option value="all">All</option>
            <option value="completed">completed</option>
            <option value="uncompleted">uncompleted</option>
        </select>
    </div>
</form>
  )
}

export default Form