import React from 'react';
import './TodoItem.css'

const TodoItem = (props) => {

    const updateTodoStatus = () => {
        console.log('updated todo status');
    }

    const deleteTodoItem = () => {
        console.log('deleted todo item');
    }

    return (
        <li className="todo-item">
            <span className="todo-item__status" onClick={updateTodoStatus}>
                {props.completed 
                    ? '🟩' 
                    : '⬜'
                }
            </span>
            <p className={`todo-item__text ${props.completed && '--completed'}`}>
                {props.text}
            </p>
            <span className="todo-item__delete" onClick={deleteTodoItem}>🗑️</span>
        </li>
    );
}

export default TodoItem;
