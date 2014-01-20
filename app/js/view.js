var TodoView = Backbone.View.extend({
	render:function(){
		var html = '<h3>' + this.model.get('description') + '</h3>';
		$(this.el).html(html);
	}
});

var todoView = new TodoView({model: todoItem});
todoView.render();
console.log(todoView.el);

var AppointmentView = Backbone.View.extend({
  render: function(){
    $(this.el).html('<li>' + this.model.get('title') + '</li>');
  }
});
var appointmentView = new AppointmentView({model: appointment});

appointmentView.render(); 
$('#app').html(appointmentView.el);