import Ember from 'ember';

export default Ember.Component.extend({
  style: Ember.computed('model', function () {
    const columnColor = this.get('columnColor');
    return new Ember.Handlebars.SafeString(`background: ${columnColor}`)
  }),

  actions: {
    voteUp() {
      const card = this.model;

      card.incrementProperty('votes');
      card.save();
    }
  }
});
