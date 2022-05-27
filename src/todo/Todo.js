
const Todo = ({ todo, toggleTodo }) => {
    const handleTodoClick = () => {
        toggleTodo(todo.id)
    }


    return (
        <>
            <div>
                <input type="checkbox" checked={todo.complete} onChange={handleTodoClick} />
                {todo.name}

            </div>

        </>

    );
};

export default Todo;