import Ember from 'ember';
import layout from '../templates/components/floating-mobile-buttons';

export default Ember.Component.extend({
  classNames: ['floating-buttons'],
  classNameBindings: ['active:active'],
  active: false,
  didInsertElement(){
    this.set('active', true);
  }
});