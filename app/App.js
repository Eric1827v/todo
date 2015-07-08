var React = require('react');
var ToDoList = require('./components/ToDoList')

window.onload = function() {
	React.render(
			<ToDoList />,
			document.getElementById('app')
		)
}