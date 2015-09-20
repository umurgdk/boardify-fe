import Ember from 'ember';

export default Ember.Route.extend({
  attributeBindings: ['layout'],
  layout: 'column',

  model (params) {
    return this.store.find('board', params.board_id);
  },

  actions: {
    createCard (title, column) {
      const cards = column.get('cards');
      const card = this.store.createRecord('card', {
        title: title,
        votes: 0,
        order: 0
      });

      cards.insertAt(0, card);
      cards.forEach(function (card, index) {
        card.set('order', index);
        card.save();
      });
    }
  }
});
