import './App.css';
import React from 'react'
import TodoTitle from './Todo/TodoTitle';
import TodoCounter from './Todo/TodoCounter';
import TodoSearch from './Todo/TodoSearch';
import TodoList from './Todo/TodoList';
import TodoItem from './Todo/TodoItem';
import CreateTodoButton from './Todo/CreateTodoButton';


const defaultTodos = [
    { text: 'Cut Onion', completed: false },
    { text: 'Take React course', completed: false },
    { text: 'Cry with la Llorona', completed: true },
]

function App() {

    const [todos, setTodos] = React.useState(defaultTodos)
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

        setTodos(updatedTodos)
    }

    const deleteTodoItem = (todoText) => {
        const todoIndex = todos.findIndex(todo => todo.text === todoText);
        const updatedTodos = [...todos];
 
        updatedTodos.splice(todoIndex, 1)

        setTodos(updatedTodos)
    }

    return (
        <main className="main-container">
            
            <TodoTitle />

            <TodoCounter todos={todos}/>
            
            <TodoSearch 
                searchValue={searchValue} 
                setSearchValue={setSearchValue}
            />
            
            <TodoList>
                {filteredTodos.map(todo => 
                    <TodoItem 
                        text={todo.text} 
                        key={todo.text} 
                        completed={todo.completed}
                        updateTodoStatus={() => updateTodoStatus(todo.text)}
                        deleteTodoItem={() => deleteTodoItem(todo.text)}
                    />)}
            </TodoList>

            <CreateTodoButton />
        </main>
    );
}

export default App;
