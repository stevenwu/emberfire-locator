import DS from 'ember-data';

// export default DS.RESTAdapter.extend({
// });
//
export default DS.FirebaseAdapter.extend({
  firebase: new Firebase('https://ef-demo-2.firebaseio.com/')
})
