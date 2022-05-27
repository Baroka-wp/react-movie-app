import { useState, useRef, useEffect } from 'react';
import Todolist from '../Todolist';
import uniqid from 'uniqid';


const LOCAL_STORAGE_KEY = 'todoApp'

function App() {
  const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || '[]')
  const [todos, setTodos] = useState(storedTodos);
  const todoNameRef = useRef();

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  const handleAddTodo = (e) => {
    const name = todoNameRef.current.value;
    if (name === '') return;
    setTodos(prevTodos => {
      return [...prevTodos, { id: uniqid(), name: name, complete: false }]
    });
    todoNameRef.current.value = null
  }

  const toggleTodo = (id) => {
    const newTodos = [...todos];
    const todo = newTodos.find(todo => todo.id === id);
    todo.complete = !todo.complete;
    setTodos(newTodos);
  }

  const handleClearComplete = () => {
    const newTodos = todos.filter(todo => !todo.complete);
    setTodos(newTodos)
  }

  return (
    <>
      <Todolist todos={todos} toggleTodo={toggleTodo} />
      <input ref={todoNameRef} type="text" />
      <button onClick={handleAddTodo}>Add Todo</button>
      <button onClick={handleClearComplete}>Clear completed </button>
      <div> {todos.filter(todo => !todo.complete).length} left to do</div>
    </>
  )
}

export default App;
