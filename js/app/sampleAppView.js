var sampleApp = sampleApp || {};

$(function( $ ) {
	'use strict';

	// The Application
	// ---------------

	// Our overall **AppView** is the top-level piece of UI.
	sampleApp.AppView = Backbone.View.extend({

		// Instead of generating a new element, bind to the existing skeleton of
		// the App already present in the HTML.
		el: '#TemplatePart_1',
		// Our template for the line of statistics at the bottom of the app.
		firstTemplate: _.template( $('#Main_Template').html() ),

		// Delegated events for creating new items, and clearing completed ones.
		events: {
			// 'keypress #new-todo': 'createOnEnter',
			'click #TemplateButton_1': 'displayExtras',
			// 'click #toggle-all': 'toggleAllComplete'
		},
		// At initialization we bind to the relevant events on the `Todos`
		// collection, when items are added or changed. Kick things off by
		// loading any preexisting todos that might be saved in *localStorage*.
		initialize: function() {
			/* this.allCheckbox = this.$('#toggle-all')[0];
			this.$footer = this.$('#footer');
			this.$main = this.$('#main');

			this.listenTo(app.Todos, 'add', this.addOne);
			this.listenTo(app.Todos, 'reset', this.addAll);
			this.listenTo(app.Todos, 'change:completed', this.filterOne);
			this.listenTo(app.Todos, 'filter', this.filterAll); */
			_.bindAll(this,"render");
			this.$fixer = this.$('#DisplayText_1');
			this.$input = this.$('#InlineText_1');
			this.listenTo(sampleApp.SampleC, 'change', this.render);
			this.listenTo(sampleApp.SampleC, 'destroy', this.remove);
			sampleApp.SampleC.fetch();
		},

		// Re-rendering the App just means refreshing the statistics -- the rest
		// of the app doesn't change.
		render: function() {
			//this.$el.html( this.template( this.model.toJSON() ) );
			var textMsg = sampleApp.SampleC.resultMsg();
			this.$el.html(this.firstTemplate({
				textMsg: textMsg,
			}));
			//return this;
			
			/* var remaining = app.Todos.remaining().length;
			if ( app.Todos.length ) {
				this.$main.show();
				this.$footer.show();

				this.$('#filters li a')
					.removeClass('selected')
					.filter('[href="#/' + ( app.TodoFilter || '' ) + '"]')
					.addClass('selected');
			} else {
				this.$main.hide();
				this.$footer.hide();
			}

			this.allCheckbox.checked = !remaining; */
			
		},
		
		displayExtras: function() {
			var value = this.$input.val().trim();

			if ( value ) {
				sampleApp.SampleC.SampleMode.save({ title: value });
			} else {
				this.clear();
			}

			//this.$el.removeClass('editing');
		},
		
		clear: function() {
			sampleApp.SampleC.SampleMode.destroy();
		},
		
		/*
		// Add a single todo item to the list by creating a view for it, and
		// appending its element to the `<ul>`.
		addOne: function( todo ) {
			var view = new app.TodoView({ model: todo });
			$('#todo-list').append( view.render().el );
		},

		// Add all items in the **Todos** collection at once.
		addAll: function() {
			this.$('#todo-list').html('');
			app.Todos.each(this.addOne, this);
		},

		filterOne: function( todo ) {
			todo.trigger('visible');
		},

		filterAll: function() {
			app.Todos.each(this.filterOne, this);
		},

		// Generate the attributes for a new Todo item.
		newAttributes: function() {
			return {
				title: this.$input.val().trim(),
				order: app.Todos.nextOrder(),
				completed: false
			};
		},

		// If you hit return in the main input field, create new **Todo** model,
		// persisting it to *localStorage*.
		createOnEnter: function( e ) {
			if ( e.which !== ENTER_KEY || !this.$input.val().trim() ) {
				return;
			}

			app.Todos.create( this.newAttributes() );
			this.$input.val('');
		},

		// Clear all completed todo items, destroying their models.
		clearCompleted: function() {
			_.invoke(app.Todos.completed(), 'destroy');
			return false;
		},

		toggleAllComplete: function() {
			var completed = this.allCheckbox.checked;

			app.Todos.each(function( todo ) {
				todo.save({
					'completed': completed
				});
			});
		}
		*/
	});
});
