import TodoList from "./TodoList";
import { useState, useRef} from "react";
import { v4 as uuidv4 } from "uuid";
import './App.css';

function App() {
  const [todos, setTodos] = useState([
    {id:1, name:"Todo1", completed:false}
  ]);

  const todoNameRef = useRef();

  const handleAddTodo = () => {
    const name = todoNameRef.current.value;
    setTodos((prevTodos) => {
      return [...prevTodos, {id:uuidv4(),name:name,completed:false}];
    });
    todoNameRef.current.value = null;
  };

  const toggleTodo = (id) => {
    const newTodos = [...todos];//todosをnewTodosに代入（todosは辞書であり、イミュータブルなものなのでいじりずらい。または、いじらないほうがいいため）
    const todo = newTodos.find((todo) => todo.id === id);//find関数todoの中のtodo.idと引数できたidが一致するオブジェクトを見つける。
    todo.completed = !todo.completed;//TrueならFalseにFalseならTrueにする。
    setTodos(newTodos);//ステータスを更新
  };

  const handleClear = () => {
    const newTodos = todos.filter((todo) => !todo.completed);//これも先ほど同様チェックのついていないものだけを抽出する
    setTodos(newTodos);//その抽出したものを更新する
  }

  return (
    <div>
      <TodoList todos = {todos} toggleTodo={toggleTodo}/>
      <input type="text" ref={todoNameRef}/>
      <button onClick={handleAddTodo}>タスクを追加</button> 
      <button onClick={handleClear}>完了したタスクの消去</button>
      <div>残りのタスク:{todos.filter((todo) => !todo.completed).length}</div> 
    </div>
  );
}

export default App;
