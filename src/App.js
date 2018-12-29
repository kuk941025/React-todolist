import React, { Component } from 'react';
import Todos from './Todos'

class App extends Component {
  state = {
      todo: [
        {content: 'buying milk', id: 1},
        {content: 'play guitar', id: 2}
      ]
  }

  render() {
    return (
      <div className="todo-app container">
        <h1 className = "center blue-text text-darken-2">Todo List</h1>
        <Todos todos={this.state.todo}/>
      </div>
    );
  }
}

export default App;
