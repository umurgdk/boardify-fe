import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('boards', function() {
    this.route('show', { path: '/:board_id' });
  });
});

export default Router;
