import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

const todo = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state ={
      todo: todo
    };
  }

  toggleTask = clickedTaskId =>{
    this.setState({
      todo: this.state.todo.map(taskToDo =>{
        if(taskToDo.id === clickedTaskId){
          return{
            ...taskToDo,
            completed: !taskToDo.completed
          }
        }
        else{
          return taskToDo;
        }
      })
    })
  }

  clearCompeted =() =>{
    this.setState({
      todo:this.state.todo.filter(taskTodo => taskTodo.completed === false)
    })
  }

  addTask = taskName =>{
    const newTask = {
        task: taskName,
        id: Date.now(),
        completed:false
    }
    this.setState({
      todo: [...this.state.todo,newTask]
    });
};

  render() {
    return (
      <div>
        <h1>Todo List:</h1>
        <TodoList todo={this.state.todo} toggleTask ={this.toggleTask} />
        <TodoForm addTask={this.addTask} clearCompleted ={this.clearCompeted}/>
      </div>
    );
  }
}

export default App;
