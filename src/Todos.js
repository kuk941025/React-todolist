import React from 'react'

const Todos = ({todos}) => {
    const todoList = todos.map(todo => {
        return (
            <a href=" " className = "collection-item hoverable" key={todo.id}>
                <span>{todo.content}</span>
            </a>
        )
    }) 
    return (
        <div className = "todos collection">
            {todoList}
        </div>
    )
} 
export default Todos