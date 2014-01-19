var TodoItem = Backbone.Model.extend({
	description: 'Pick up milk',
	status: 'incomplete',
	id: 1
});

var todoItem = new TodoItem({
	description: 'Pick up milk',
	status: 'incomplete',
	id: 1
})

//get attr
todoItem.get('description');
//set attr
todoItem.set({status: 'complete'});
//sync to the server
todoItem.save();