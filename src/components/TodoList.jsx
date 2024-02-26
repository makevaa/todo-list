import { useState } from "react";

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


            <table>
                <tbody>
                    {
                        todos.map( (todo, i) => 
                            <tr key={i}>
                                <td>{todo.desc}</td>
                                <td>{todo.date}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </>
    );

}

export default TodoList;

