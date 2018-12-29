import React, { Component } from 'react';
import Todos from './Todos'

class App extends Component {
  state = {
      todos: [
        {content: 'buying milk', id: 1},
        {content: 'play guitar', id: 2}
      ]
  }
  deleteTodo = (id) => {
    
      const todos = this.state.todos.filter(todo =>{
        return todo.id !== id
      });
      this.setState({
        todos
      });

  }
  render() {
    return (
      <div className="todo-app container">
        <h1 className = "center blue-text text-darken-2">Todo List</h1>
        <Todos todos={this.state.todos} deleteTodo = {this.deleteTodo}/>
      </div>
    );
  }
}

export default App;
