import '../assets/App.css';
import React from 'react'

import { useTodosProps } from '../hooks/useTodosProps';

import TodoTitle from '../components/TodoTitle/TodoTitle';
import TodoCounter from '../components/TodoCounter/TodoCounter';
import TodoSearch from '../components/TodoSearch/TodoSearch';
import TodoList from '../components/TodoList/TodoList';
import TodoItem from '../components/TodoItem/TodoItem';
import CreateTodoButton from '../components/CreateTodoButton/CreateTodoButton';
import NewTodoModal from '../components/newTodoModal/newTodoModal';
import TodoContentLoader from '../components/TodoContentLoader/TodoContentLoader';



function App() {

    const {    
        loading,
        error,
        todos,
        searchValue,
        setSearchValue,
        filteredTodos,
        updateTodoStatus,
        deleteTodoItem,
        modalOpenState,
        setModalOpenState,
        addTodoItem
    } = useTodosProps()

    return (

        <>

            {modalOpenState && <NewTodoModal modalOpenState={modalOpenState} setModalOpenState={setModalOpenState} addTodoItem={addTodoItem}/>}

            <main className="main-container">
                
                <TodoTitle />

                {error && <p>There was an error, reload the page or try later.</p>}
                {loading && <TodoContentLoader/>}
                
                {!loading && 

                    <>
                        <TodoCounter todos={todos}/>
                        
                        <TodoSearch 
                            searchValue={searchValue} 
                            setSearchValue={setSearchValue}
                        />

                        {!filteredTodos.length && <p className='new-todo-modal__title'>Create your first <span>Task!</span></p>}
                        
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

                        <CreateTodoButton modalOpenState={modalOpenState} setModalOpenState={setModalOpenState}/>
                    </>
                }

            </main>

        </>
    );
}

export default App;
