// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';
import './Todo.css';

const TodoList = props =>{
    return(
        <div className = 'tasks-list'>
            {props.todo.map(taskToDo => (
                    <Todo
                        key={taskToDo.id}
                        task ={taskToDo}
                        toggleTask={props.toggleTask}
                    />
            ))}
        </div>
    )
}

export default TodoList;