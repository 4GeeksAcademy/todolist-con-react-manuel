import React from "react";

const TodoItem = ({ todo, removeTodo }) => {
    return (
        <li className="todo-item">
            {todo.text}
            <button className="delete-btn" onClick={() => removeTodo(todo.id)}>✖</button>
        </li>
    );
};

export default TodoItem;