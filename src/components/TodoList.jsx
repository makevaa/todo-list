import { useState } from "react";
import { AgGridReact } from 'ag-grid-react'; // AG Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-material.css"; // Optional Theme applied to the grid


function TodoList() {

    const [todo, setTodo] = useState({
        desc:'',
        date:'',
        priority:''
    });

    const [todos, setTodos] = useState([]);

    const [colDefs, setColDefs] = useState([
        { field:'desc', filter:true, editable:true, floatingFilter: true },
        { field:'priority', filter:true, floatingFilter: true,
            cellStyle: params => params.value === 'High' ? {color:'red'} : {color:'black'} 
        },
        { field:'date', filter:true, floatingFilter: true }
    ]);

    const handleClick = () => {
        if (todo.desc && todo.date && todo.priority) {
            setTodos([...todos, todo]);
            setTodo({desc:'', date:'', priority:''});
        } else {
            alert('Type values first');
        }
    }

    const deleteTodo = (index) => {
        setTodos( todos.filter((_, i) => i !== index) );
    }

    return(
        <>


            <input
                placeholder="Description"
                value={todo.desc}
                onChange={e => setTodo( {...todo, desc: e.target.value } )}
            />

            <input
                placeholder="Priority"
                value={todo.priority}
                onChange={e => setTodo( {...todo, priority: e.target.value } )}
            />

            <input
                type="date"
                placeholder="Date"
                value={todo.date}
                onChange={e => setTodo( {...todo, date: e.target.value } )}
            />

            <button onClick={handleClick}>Add Todo</button>


            <div 
                className='ag-theme-material' 
                style={ {height:600, width:650}}
            >
                <AgGridReact 
                    rowData={todos}
                    columnDefs={colDefs}
                />


            </div>


        </>
    );

}

export default TodoList;
