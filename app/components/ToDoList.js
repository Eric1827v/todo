var React = require('react');

var TodoAria = React.createClass({
  render: function() {
    return (
      <div>
        <div onClick={this.props.todoComplete}></div>
        <span>{this.props.value}</span>
        <div className='close' onClick={this.props.todoClose}>x</div>
      </div>
    )
  }
});
  
var ToDoList = React.createClass({
  getInitialState: function() {
    return {
      todos: [
        { value:'Groceries'},
        { value:'Car Wash'},
        { value:'Laundry'}
      ]
    }
  },
  addItem: function() {
    var todos = this.state.todos;

    todos.push({
      value: this.state.inputValue
    });

    this.setState({
      todos: todos,
      inputValue: ''
    });

  },
  updateValue: function(e) {
    e.preventDefault();
    this.setState({
      inputValue: this.refs.listitem.getDOMNode().value
    });
  },
  removeItem: function(index) {
    this.state.todos.splice(index, 1);

    this.setState({
      todos: this.state.todos
    });
  },
  completeTodo: function(index) {
    var todos = this.state.todos;
    var todo = this.state.todos[index];
    todos.splice(index, 1);


    this.setState({
      todos: todos
    });
  },
  render: function() {

    var todos = this.state.todos.map(function(todo, index) {
      return (
        <TodoAria
        key={index}
        value={todo.value}
        done={todo.done}
        todoClose={this.removeItem.bind(this, index)}
        todoComplete={this.completeTodo.bind(this, index)} /> );
    }.bind(this));

    return (
      <div className='container'>
        <div className='col-xs-6'>
          <h1>Todo List</h1>
          {todos}
          <form
            className='form-inline todo-form col-xs-12'
            role='form'
            onSubmit={this.addItem}>
            <div className='input-group'>
              <input type='text' ref="listitem" value={this.state.inputValue}
                onChange={this.updateValue}
                className='form-control'
                placeholder='What needs to be done?' />
              <span className='input-group-btn'> 
                <button className='btn btn-default'>Add Todo Item</button>
              </span>
            </div>
          </form>
        </div>
      </div>
    );
  }
});

module.exports = ToDoList;