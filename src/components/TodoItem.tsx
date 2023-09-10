import {ITodo} from "../types/data";
import React from "react";
import RemoveBtn from '../assets/cross-btn.svg'

interface ITodoItem extends ITodo {
    removeTodo: (id: number) => void;
    toggleTodo: (id: number) => void;
}

const TodoItem: React.FC<ITodoItem> = (props) => {
    const {id, title, complete, removeTodo, toggleTodo} = props;

    return <div className="todo-item">
        <label htmlFor={"id" + id} className="todo-label">
            <input
                type="checkbox"
                className="todo-status"
                id={"id" + id}
                checked={complete} onChange={() => toggleTodo(id)}
            />
            <span className="todo-title">{title}</span>
        </label>
        <img className="remove-btn" src={RemoveBtn} onClick={() => removeTodo(id)}  alt={"remove to do " + id}/>
    </div>
}

export default TodoItem;