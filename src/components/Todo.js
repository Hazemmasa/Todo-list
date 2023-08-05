import React from 'react'
import TodoList from './TodoList';
const Todo = ({text,todo, todos,setTodos}) => {

  const deleteHandler = () =>{
    setTodos(todos.filter((el) => el.id !== todo.id))

  }
  const completeHandler = ()=>{
setTodos(todos.map((item) => {
if (item.id ===todo.id){
  return{
    ...item , completed: !item.completed 
  }
}
return item ;
}))

  }
  return (
    <div className='todo'>
        <li className={`todo-item ${todo.completed ?  "completed": ''}`}>{text}</li>
        <div>
          <button onClick={completeHandler} className='complete-btn'>Done</button>
          <button onClick={deleteHandler} className='trash-btn'>x</button>
        </div>
     
    </div>
  );
};

export default Todo