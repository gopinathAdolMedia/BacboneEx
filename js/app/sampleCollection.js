var sampleApp = sampleApp || {};

(function() {
	'use strict';

	// Todo Collection
	// ---------------

	// The collection of todos is backed by *localStorage* instead of a remote
	// server.
	var sampleCollect = Backbone.Collection.extend({

		// Reference to this collection's model.
		model: sampleApp.SampleMode,

		// Save all of the todo items under the `"todos"` namespace.
		localStorage: new Store('Sample-backbone'),

		// Filter down the list of all todo items that are finished.
		resultMsg: function() {
				return SampleMode.get('textmsg');
		},
		/* 
		// Filter down the list to only todo items that are still not finished.
		remaining: function() {
			return this.without.apply( this, this.completed() );
		},

		// We keep the Todos in sequential order, despite being saved by unordered
		// GUID in the database. This generates the next order number for new items.
		nextOrder: function() {
			if ( !this.length ) {
				return 1;
			}
			return this.last().get('order') + 1;
		},

		// Todos are sorted by their original insertion order.
		comparator: function( todo ) {
			return todo.get('order');
		} */
	});

	// Create our global collection of **Todos**.
	sampleApp.SampleC = new sampleCollect();

}());
