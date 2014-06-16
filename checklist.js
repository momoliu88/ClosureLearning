/**
 **@fileoverview Description of this file.
 **/
goog.provide('example.Checklist');

goog.require('example.ChecklistItem');
/** @typedef {{id:string, text:string, checked: boolean}} */
example.ChecklistItem;
/**
 ** @param {Array.<example.ChecklistItem>} items
 ** @constructor
 **/
example.Checklist = function(items) {
/**
 ** @type {Array.<example.ChecklistItem>}
 ** @private
 **/
  this.items_ = goog.array.clone(items);
};
/** @return {Array.<example.ChecklistItem>} All the items on this list. */
example.Checklist.prototype.getItems = function() {
  // This ensures that a client cannot change the order of the items, but a
  // // client will be able to mutate the items themselves.
  return goog.array.clone(this.items_);
};
// /** @return {number} Number of items that have been checked off. */
example.Checklist.prototype.getNumChecked = function() {
  var numChecked = goog.array.reduce(this.items_, function(sum, item) {
	             return item.checked ? sum + 1 : sum;
                   }, 0);
  return /** @type {number} */ (numChecked);
};
