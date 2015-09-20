import Ember from 'ember';

export default Ember.Component.extend({
  style: Ember.computed('model', function () {
    const columnColor = this.get('columnColor');
    return new Ember.Handlebars.SafeString(`background: ${columnColor}`)
  })
});
