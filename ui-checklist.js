/**
* @fileoverview Description of this file.
*/
/**
* * @param {example.Checklist=} checklist
* * @constructor
* * @extends {goog.ui.Container}
* */
example.ui.Checklist = function(checklist) {
  goog.base(this, goog.ui.Container.Orientation.VERTICAL,
  		example.ui.ChecklistRenderer.getInstance());
  this.setModel(checklist || null);
  this.setFocusable(false);
};
goog.inherits(example.ui.Checklist, goog.ui.Container);
/**
* * @return {example.Checklist}
* * @override
* */
example.ui.Checklist.prototype.getModel;
/** @inheritDoc */
example.ui.Checklist.prototype.enterDocument = function() {
  goog.base(this, 'enterDocument');
  this.getHandler().listen(this,
      [goog.ui.Component.EventType.CHECK, goog.ui.Component.EventType.UNCHECK],
      this.onCheckChange_);
};
/**
* * @param {goog.events.Event} e
* * @private
* */
example.ui.Checklist.prototype.onCheckChange_ = function(e) {
  // The example.ui.Checklist class chooses to keep CHECK and UNCHECK events to
  // // itself by preventing such events from bubbling upward. Instead, it expects
  // // clients to listen to its custom CHECKED_COUNT_CHANGED events for updates.
  e.stopPropagation();
  this.dispatchEvent(new goog.events.Event(
  example.ui.Checklist.EventType.CHECKED_COUNT_CHANGED, this));
};
/** @enum {string} */
example.ui.Checklist.EventType = {
  CHECKED_COUNT_CHANGED: goog.events.getUniqueId('checked-count-changed')
};
goog.ui.registry.setDefaultRenderer(example.ui.Checklist,
    example.ui.ChecklistRenderer);
goog.ui.registry.setDecoratorByClassName(example.ui.ChecklistRenderer.CSS_CLASS,
    function() { return new example.ui.Checklist(); })
