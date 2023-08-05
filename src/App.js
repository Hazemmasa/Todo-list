import './index.css'
import { useState,useEffect } from 'react';
import TodoList from './components/TodoList';
import Form from './components/Form';



function App(){


const [inputText, setInputText] = useState("");
const [todos, setTodos] = useState([]);
const [status,setStatus] = useState('all')
const [filteredTodos,setFilteredTodos] = useState([])

useEffect(()=>{

    todoLocal()
},[])

useEffect(()=>{
    filterHandler()
    saveLocalstorage()
},[todos,status])


const filterHandler = ()=>{

    switch(status) {
        case "completed":
            setFilteredTodos(todos.filter(todo => todo.completed === true))
          break;
        case "uncompleted":
            setFilteredTodos(todos.filter(todo => todo.completed === false))
          break;
        default:
            setFilteredTodos(todos)
      }
}
const saveLocalstorage = ()=>{
    localStorage.setItem("todos" , JSON.stringify(todos))
}

const todoLocal=()=>{
if (localStorage.getItem('todos')=== null){
    localStorage.setItem("todos" , JSON.stringify([]))
}else {
    let local = JSON.parse(localStorage.getItem("todos"))
    setTodos(local)
}


}
return(
<div>
    <header>
    <h1 > Hazem's To do list</h1>
    </header>

    <Form 
    inputText = {inputText}
     todos = {todos}
     setTodos = {setTodos}
     setInputText={setInputText}
     setStatus={setStatus}
     filteredTodos={filteredTodos} />
    <TodoList 
              todos= {todos}
              setTodos={setTodos}
              filteredTodos={filteredTodos}
    />
</div>
)


}

export default App