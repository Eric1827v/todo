var React = require('react');
var TodoList = require('./components/TodoList')

window.onload = function() {
	React.render(
			<TodoList />,
			document.getElementById('app')
		)
}