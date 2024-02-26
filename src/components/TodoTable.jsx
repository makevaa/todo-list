function TodoTable(props) {
    return(
        <>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Description</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.todos.map( (todo, i) => 
                            <tr key={i}>
                                <td>{todo.date}</td>
                                <td>{todo.desc}</td>
                                <td>
                                <button onClick={()=>props.deleteTodo(i)}>Delete</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </>
    );
}

export default TodoTable;
