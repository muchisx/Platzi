import '../assets/App.css';
import React from 'react'
import AppUi from './AppUI';
import { TodoContext, TodoProvider } from '../context/TodoContext';




function App() {

    return (

        <TodoProvider>

            <TodoContext.Consumer>

                {value => (
                    <AppUi
                    loading={value.loading}
                    error={value.error}
                    todos={value.todos}
                    searchValue={value.searchValue}
                    setSearchValue={value.setSearchValue}
                    filteredTodos={value.filteredTodos}
                    updateTodoStatus={value.updateTodoStatus}
                    deleteTodoItem={value.deleteTodoItem}
                    />
                )}

            </TodoContext.Consumer>

        </TodoProvider>
    );
}

export default App;
