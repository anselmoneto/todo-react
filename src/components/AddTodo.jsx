import React from 'react';
import { TodoContext } from '../contexts/TodoContext';
import { useContext } from 'react';
import { useState } from 'react';

const AddTodo = () => {
    const {saveTodo} = useContext(TodoContext);
    const [todo, setTodo] = useState();
    
    const handleFormSubmit = e => {
        e.preventDefault();
        saveTodo(todo);
    }

    const handleInputChange = e => {
        setTodo({
            ...todo,
            title: e.target.value
        });
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <input type="text" name="title" id="title" placeholder="Nova tarefa..." onChange={handleInputChange} ></input>
            <button>ADICIONAR</button>
        </form>
    );
}

export default AddTodo;