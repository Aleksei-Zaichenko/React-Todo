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
                    <button onClick ={this.props.clearCompleted}>Clear Completed</button>
                </form>
            </div>
        );
    }
}

export default TodoForm;