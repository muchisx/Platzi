import '../assets/App.css';
import React from 'react'
import AppUi from './AppUI';
import useLocalStorage from '../hooks/useLocalStorage'


const defaultTodos = [
    { text: 'These are example tasks!', completed: false },
    { text: '<- Complete a task here', completed: false },
    { text: 'Delete a task here ->', completed: false },
]

function App() {
    
    const [todos, saveTodos] = useLocalStorage('TODOS_V1', defaultTodos)
    const [searchValue, setSearchValue] = React.useState('');

    let filteredTodos = [];

    if (!searchValue) filteredTodos = todos;
    else {
        filteredTodos = todos.filter(todo => {

        const todoText = todo.text.toLowerCase();
        const searchText = searchValue.toLowerCase();
        return todoText.includes(searchText)
        })
    }

    const updateTodoStatus = (todoText) => {
        const todoIndex = todos.findIndex(todo => todo.text === todoText);
        const updatedTodos = [...todos];
 
        updatedTodos[todoIndex].completed = !updatedTodos[todoIndex].completed;

        saveTodos(updatedTodos)
    }

    const deleteTodoItem = (todoText) => {
        const todoIndex = todos.findIndex(todo => todo.text === todoText);
        const updatedTodos = [...todos];
 
        updatedTodos.splice(todoIndex, 1)

        saveTodos(updatedTodos)
    }

    return (    
        <AppUi 
            todos={todos}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            filteredTodos={filteredTodos}
            updateTodoStatus={updateTodoStatus}
            deleteTodoItem={deleteTodoItem}
        />
    );
}

export default App;
