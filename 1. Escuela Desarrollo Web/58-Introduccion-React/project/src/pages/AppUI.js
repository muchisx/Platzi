import React from 'react';
import TodoTitle from '../components/TodoTitle/TodoTitle';
import TodoCounter from '../components/TodoCounter/TodoCounter';
import TodoSearch from '../components/TodoSearch/TodoSearch';
import TodoList from '../components/TodoList/TodoList';
import TodoItem from '../components/TodoItem/TodoItem';
import CreateTodoButton from '../components/CreateTodoButton/CreateTodoButton';

const AppUI = ({
    todos,
    searchValue,
    setSearchValue,
    filteredTodos,
    updateTodoStatus,
    deleteTodoItem,
    }) => {

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

export default AppUI;
