import Ember from 'ember';

export default Ember.Component.extend({
  attributeBindings: ['layoutFill:layout-fill', 'flexLayout:layout'],
  layoutFill: true,
  flexLayout: 'row',

  columnsOrder: ['order'],
  orderedColumns: Ember.computed.sort('model.columns', 'columnsOrder'),

  columnStyle: Ember.computed('model.columns', function () {
    let model = this.get('model');
    let count = model.get('columns').length;
    let width = `${100 / count}%`;
    let style = 'width: ' + width;
    return new Ember.Handlebars.SafeString(style);
  }),

  actions: {
    createCard (title, column) {
      this.sendAction('createCard', title, column);
    }
  }
});
