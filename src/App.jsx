import React from 'react';
//import { useState } from 'react';
import TodoProvider from './contexts/TodoContext';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

const App = () => {

    // const [todo, setTodo] = useState();

    // const handleFormSubmit = e => {
    //     e.preventDefault();

    //     setTodos([
    //         ...todos,
    //         todo
    //     ]);
    // }

    // const handleInputChange = e => {
    //     setTodo({
    //         ...todo,
    //         id: todos.length + 1,
    //         title: e.target.value,
    //         done: false
    //     });
    // }

    return(
        <TodoProvider>
            <TodoList></TodoList>
            <br />
            <hr />
            <AddTodo></AddTodo>
        </TodoProvider>
        // <div>
        //     {
        //         todos.map(i => (
        //             <div key={i.id} >{ i.title }</div>
        //         ))
        //     }
        //     <br />
        //     <hr />
        //     <br />
        //     <form onSubmit={handleFormSubmit}>
        //         <input type="text" name="todo" id="title" placeholder="Nova tarefa..." onChange={handleInputChange} ></input>
        //         <button>ADICIONAR</button>
        //     </form>
        // </div>
    );
}

export default App;