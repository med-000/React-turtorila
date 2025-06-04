import React from 'react'


const Todo = ({todo, toggleTodo}) => {
    const handleTodoClick = () =>{//handleTodoClickを定義して
        toggleTodo(todo.id);//toggleTodo関数を実行
    }
  return (
    <div>
        <label>
            <input type="checkbox" checked={todo.completed} readOnly onChange={handleTodoClick}/>
        </label>
        {todo.name}
    </div>
  )
}

export default Todo