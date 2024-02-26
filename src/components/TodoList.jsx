import { useState } from "react";
import TodoTable from './TodoTable'

function TodoList() {

    const [todo, setTodo] = useState({
        desc:'',
        date:''
    });

    const [todos, setTodos] = useState([]);

    const handleClick = () => {
        if (todo.desc && todo.date) {
            setTodos([...todos, todo]);
            setTodo({desc:'', date:''});
        } else {
            alert('Type values first');
        }
    }

    const deleteTodo = (index) => {
        setTodos( todos.filter((todo, i) => i !== index) );
    }

    return(
        <>
            <input
                placeholder="Description"
                value={todo.desc}
                onChange={e => setTodo( {...todo, desc: e.target.value } )}
            />

            <input
                type="date"
                placeholder="Date"
                value={todo.date}
                onChange={e => setTodo( {...todo, date: e.target.value } )}
            />

            <button onClick={handleClick}>Add Todo</button>

            <TodoTable todos={todos} deleteTodo={deleteTodo}/>
        </>
    );

}

export default TodoList;
