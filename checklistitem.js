/**
 * @fileoverview Description of this file.
 */
goog.provide('example.ui.ChecklistItem');

goog.require('goog.ui.Component');
goog.require('goog.ui.IdGenerator');
/**
 * A control that displays a ChecklistItem.
 * @param {example.ChecklistItem=} item
 * @param {example.ui.ChecklistItemRenderer=} renderer
 * @constructor
 * @extends {goog.ui.Control}
 */
example.ui.ChecklistItem = function(item, renderer) {
  goog.base(this, null /* content */, renderer);
  this.setSupportedState(goog.ui.Component.State.CHECKED, true);
  // Disable automatic event handling.
  this.setAutoStates(goog.ui.Component.State.CHECKED, false);
  this.setSupportedState(goog.ui.Component.State.FOCUSED, false);
  if (!item) {
  item = {id: 'temp-' + goog.ui.IdGenerator.getInstance().getNextUniqueId(),
  	text: '',
  	checked: false};
  }
  this.setModel(item);
};
goog.inherits(example.ui.ChecklistItem, goog.ui.Control);

/**
* @return {!example.ChecklistItem}
* * @override
* */
example.ui.ChecklistItem.prototype.getModel;
/** @return {boolean} */
example.ui.ChecklistItem.prototype.isItemChecked = function() {
  return this.getModel().checked;
};
/** @return {string} */
example.ui.ChecklistItem.prototype.getItemText = function() {
  return this.getModel().text;
};
/** @inheritDoc */
example.ui.ChecklistItem.prototype.enterDocument = function() {
  goog.base(this, 'enterDocument');
  var checkbox = this.getChildAt(0);
  this.getHandler().listen(checkbox,
  	[goog.ui.Component.EventType.CHECK,
	 goog.ui.Component.EventType.UNCHECK],
  	this.onCheckChange_);
};
/**
 * * Update the internal ChecklistItem when the checked state of the checkbox
 * * changes.
 * * @param {goog.events.Event} e
 * * @private
 * */
example.ui.ChecklistItem.prototype.onCheckChange_ = function(e) {
  var isChecked = (e.type == goog.ui.Component.EventType.CHECK);
  this.getModel().checked = isChecked;
  this.setChecked(isChecked);
};
goog.ui.registry.setDefaultRenderer(example.ui.ChecklistItem,
    example.ui.ChecklistItemRenderer);
goog.ui.registry.setDecoratorByClassName(example.ui.ChecklistItemRenderer.CSS_CLASS,
    function() { return new example.ui.ChecklistItem(); })

