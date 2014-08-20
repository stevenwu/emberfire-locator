import Ember from 'ember';

var Router = Ember.Router.extend({
  location: EmberfireGeolocatorENV.locationType
});

Router.map(function() {
});

export default Router;
