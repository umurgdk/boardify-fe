import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  order: DS.attr('number'),
  color: DS.attr('string'),
  board: DS.belongsTo('board'),
  cards: DS.hasMany('cards', {async: false, inverse: 'column'})
});
