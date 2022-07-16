import './App.css';
import TodoTitle from './Todo/TodoTitle';
import TodoCounter from './Todo/TodoCounter';
import TodoSearch from './Todo/TodoSearch';
import TodoList from './Todo/TodoList';
import TodoItem from './Todo/TodoItem';
import CreateTodoButton from './Todo/CreateTodoButton';


const todos = [
    { text: 'Cut Onion', completed: false },
    { text: 'Take React course', completed: false },
    { text: 'Cry with la Llorona', completed: true },
]

function App() {
    return (
        <main className="main-container">
            
            <TodoTitle />

            <TodoCounter />
            
            <TodoSearch />
            
            <TodoList>
                {todos.map(todo => 
                    <TodoItem 
                        text={todo.text} 
                        key={todo.text} 
                        completed={todo.completed}
                    />)}
            </TodoList>

            <CreateTodoButton />
        </main>
    );
}

export default App;
