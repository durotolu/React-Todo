import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm'

class App extends React.Component {
  // you will need a place to store your state in this component.
  constructor() {
    super();
    this.state = {
      todos: [
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
      ],
      formTodo: '',
    }
  }
  // design `App` to be the parent component of your application.
  handleChange = event => {
    debugger
    this.setState({
    formTodo: event.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const {formTodo, todos} = this.state
    const todo = {
      task: formTodo, 
      completed: false, 
      id: Date.now()
    }

    this.setState({todos: todos.concat(todo),
      formTodo: ''
              })
  }

  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    const { todos, formTodo } = this.state
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm todos={todos} formTodo={formTodo} handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
      </div>
    );
  }
}

export default App;
