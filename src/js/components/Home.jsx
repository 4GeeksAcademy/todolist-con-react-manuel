import React, { useState } from "react";
import TodoList from "./TodoList";

const Home = () => {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState("");

    const handleKeyPress = (e) => {
        if (e.key === "Enter" && inputValue.trim() !== "") {
            const newTodo = { id: Date.now(), text: inputValue };
            setTodos([...todos, newTodo]);
            setInputValue("");
        }
    };

    const removeTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return (
        <div className="container">
            <h1 className="title">todos</h1>
            <input
                type="text"
                placeholder="What needs to be done?"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyPress}
                className="input"
            />
            {todos.length === 0 ? (
                <p className="empty">No hay tareas, añadir tareas</p>
            ) : (
                <TodoList todos={todos} removeTodo={removeTodo} />
            )}
            <p className="counter">{todos.length} item{todos.length !== 1 ? "s" : ""} left</p>
        </div>
    );
};

export default Home;