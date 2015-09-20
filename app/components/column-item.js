import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['column-item'],
  cardsOrder: ['order'],

  sortedCards: Ember.computed.sort('model.cards', 'cardsOrder'),

  actions: {
    moveCard (card, opts) {
      const isDirect = opts.target.content === this.model;

      console.log(isDirect ? 'isDirect' : 'not direct');

      const cards = this.model.get('cards');
      const lastOrder = cards.length > 0 ? Math.max.apply(null, cards.getEach('order')) : 0;

      var order = 0;

      if (isDirect) {
        order = lastOrder + 1;
        card.set('order', order);
        card.set('column', this.model);
        card.save();
      } else {
        let targetCard = opts.target.content;
        let targetCardIndex = cards.indexOf(targetCard);
        let isReorder = cards.indexOf(card) >= 0;

        if (isReorder) {
          cards.removeObject(card);
        }

        cards.insertAt(targetCardIndex, card);

        cards.forEach(function (card, index) {
          card.set('order', index);
          card.save();
        })
      }
    },

    newCard () {
      this.set('emptyCard', {title: ''});
    },

    createCard () {
      const emptyCard = this.get('emptyCard');
      this.sendAction('createCard', emptyCard.title, this.model);
      this.set('emptyCard', null);
    },

    cancel () {
      this.set('emptyCard', null);
    }
  }
});
