import React from "react";
import {ITodo} from "../types/data";
import TodoItem from "./TodoItem";

interface ITodoListProps {
    items: ITodo[],
    removeTodo: (id: number) => void,
    toggleTodo: (id: number) => void
}

const TodoList: React.FC<ITodoListProps> = (props) => {
    const {removeTodo, toggleTodo} = props;

    return <div>
        {
            props.items.map(todo =>
                <TodoItem
                    key={todo.id}
                    removeTodo={removeTodo}
                    toggleTodo={toggleTodo}
                    {...todo}
                />
            )
        }
    </div>
}

export default TodoList;