import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    watchLocation: function() {
      navigator.geolocation.getCurrentPosition(function(position) {
        console.log('latitude', position.coords.latitude, 'longitude', position.coords.longitude);
      });
    }
  }
});
