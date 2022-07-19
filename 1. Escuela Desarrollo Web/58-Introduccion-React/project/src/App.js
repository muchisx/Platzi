import './assets/App.css';
import React from 'react'
import TodoTitle from './components/TodoTitle/TodoTitle';
import TodoCounter from './components/TodoCounter/TodoCounter';
import TodoSearch from './components/TodoSearch/TodoSearch';
import TodoList from './components/TodoList/TodoList';
import TodoItem from './components/TodoItem/TodoItem';
import CreateTodoButton from './components/CreateTodoButton/CreateTodoButton';


const defaultTodos = [
    { text: 'These are example tasks!', completed: false },
    { text: '<- Complete a task here', completed: false },
    { text: 'Delete a task here ->', completed: false },
]

function App() {
    

    const localStorageTodos = localStorage.getItem('TODOS_V1');
    let parsedTodos;
    
    if (!localStorageTodos) {
        localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
        parsedTodos = defaultTodos;
    } else {
        parsedTodos = JSON.parse(localStorageTodos);
    }

    const [todos, setTodos] = React.useState(parsedTodos)
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

    const saveTodos = (newTodos) => {
        const stringifiedTodo = JSON.stringify(newTodos);
        localStorage.setItem('TODOS_V1', stringifiedTodo)

        setTodos(newTodos)
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
