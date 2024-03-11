import { useState, useRef } from "react";
import { AgGridReact } from 'ag-grid-react'; // AG Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-material.css"; // Optional Theme applied to the grid
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


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

    const gridRef = useRef();

    const handleClick = () => {
        if (todo.desc && todo.date && todo.priority) {
            setTodos([...todos, todo]);
            setTodo({desc:'', date:'', priority:''});
        } else {
            alert('Type values first');
        }
    }

    const handleDelete = () => {
        if (gridRef.current.getSelectedNodes().length > 0) {
            setTodos( todos.filter((todo, i) => i != gridRef.current.getSelectedNodes()[0].id) );
        } else {
            alert("Select a row first!");
        }
    }

    const handleDate = date => {
        const dateStr = date.toISOString();
        console.log(  dateStr );
        setTodo( {...todo, date: dateStr } );
    }

    return(
        <>
            <Stack 
                direction="row" 
                spacing={2} 
                justifyContent="center" 
                alignItems="center"
                mt={2}
            >
                <TextField
                    label="Description"
                    value={todo.desc}
                    onChange={e => setTodo( {...todo, desc: e.target.value } )}
                />

                <TextField
                    label="Priority"
                    value={todo.priority}
                    onChange={e => setTodo( {...todo, priority: e.target.value } )}
                />

                <DatePicker value={todo.date} onChange={ e => handleDate(e) } 
                    label="Date"
                    views={['year', 'month', 'day']}
                />

                <Button variant='contained' onClick={handleClick}>Add Todo</Button>
                <Button variant='contained' color='error' onClick={handleDelete}>Delete</Button>
            </Stack>
            <div 
                className='ag-theme-material' 
                style={ {height:600, width:650}}
            >
                <AgGridReact 
                    ref={gridRef}
                    onGridReady={params => gridRef.current = params.api}
                    rowData={todos}
                    columnDefs={colDefs}
                    rowSelection="single"
                />
            </div>


        </>
    );

}

export default TodoList;
