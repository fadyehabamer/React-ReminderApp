import React from 'react';
import './todo.css'

// * Function Component ==> (PROPS) SENT as param + NO USE OF THIS.props 

export default function Todo(props) {
    const { todos, deleteItemFirst, deleteItemSecond } = props
    let todosLength = todos.length
    // console.log(deleteItem)
    // console.log(todos)

    const renderTodos = todosLength ? todos.map((todo) => {

        return (
            <tr key={todo.id}>
                <td > {todo.id} </td>
                <td > {todo.name} </td>
                <td> {todo.daysLeft} </td>
                {/* onClick={deleteItem(todo.id)} --> willl fire fuction automatically  */}
                {/* you can use deleteItemFirst or deleteItemSecond */}
                <td onClick={() => deleteItemSecond(todo.id)} > X </td>
            </tr>
        )
    }) : <tr>
        <td colSpan='4'>
            No Items to Show
        </td>
    </tr>

    return (
        <table>
            <tbody>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>DAYS LEFT</th>
                    <th>Action</th>
                </tr>
                {renderTodos}
            </tbody>

        </table>

    )
}
