import React from 'react';

class TodoForm extends React.Component{

    constructor(){
        super();
        this.state ={
            taskName: ''
        };
    }

    handleChanges = e =>{
        this.setState({
            taskName: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.addTask(this.state.taskName);
        this.setState({
            taskName: ''
        });
    };

    handleClearCompleted = e => {
        e.preventDefault();
        this.props.clearCompleted();
    };

    render(){
        return (
            <div>
                <form>
                    <input
                        type ='text'
                        placeholder = 'task to do'
                        value ={this.state.taskName}
                        onChange ={this.handleChanges}
                    />
                    <button onClick ={this.handleSubmit}>Add Todo</button>
                    <button onClick ={this. handleClearCompleted}>Clear Completed</button>
                </form>
            </div>
        );
    }
}

export default TodoForm;