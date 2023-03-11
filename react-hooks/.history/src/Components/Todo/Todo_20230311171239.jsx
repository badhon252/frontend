import React from 'react';

const Todo = () => {
    return (
        <div className='todos'>
            <h1>Todo</h1>
            <form action="#">
                <input type="text" placeholder="Add a todo"/>
                <button className="btn">Add todo</button>
            </form>
            <ul className="todos">
                <li>Learn React</li>
                <li>Learn Firebase</li>
                <li>Learn Node</li>
            </ul>
        </div>
    );
}

export default Todo;
