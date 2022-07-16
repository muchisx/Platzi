import React from 'react';
import './CreateTodoButton.css'

const CreateTodoButton = (props) => {

    const launchTodoCreation = () => {
        console.log('launched launchTodoCreation');
    }

    return (
        <button 
        className="create-todo-button" 
        type="button"
        onClick={launchTodoCreation}
        >
        +
        </button>
    );
}

export default CreateTodoButton;
