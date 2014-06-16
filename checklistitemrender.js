/**
 * @fileoverview Description of this file.
 */
goog.provide('example.ui.ChecklistItemRenderer');

/**
 * * @constructor
 * * @extends {goog.ui.ControlRenderer}
 * */
example.ui.ChecklistItemRenderer = function() {
	goog.base(this);
};
goog.inherits(example.ui.ChecklistItemRenderer, goog.ui.ControlRenderer);
goog.addSingletonGetter(example.ui.ChecklistItemRenderer);
/** @type {string} */
example.ui.ChecklistItemRenderer.CSS_CLASS = 'example-checklist-item';
/** @inheritDoc */
example.ui.ChecklistItemRenderer.prototype.getCssClass = function() {
	return example.ui.ChecklistItemRenderer.CSS_CLASS;
};
/**
 * * @param {example.ui.ChecklistItem} checklistItem
 * * @return {Element}
 * */
example.ui.ChecklistItemRenderer.prototype.createDom = function(checklistItem) {
  var el = goog.base(this, 'createDom', checklistItem);
  // Admittedly, this violates the protected visibility of setElementInternal(),
  // but checklistItem needs to have a DOM before its addChild() method can be
  // invoked later in this method.
  checklistItem.setElementInternal(el);
  var dom = checklistItem.getDomHelper();
  var isItemChecked = checklistItem.isItemChecked();
  var checkboxState = isItemChecked ?
  goog.ui.Checkbox.State.CHECKED : goog.ui.Checkbox.State.UNCHECKED;
  var checkbox = new goog.ui.Checkbox(checkboxState, dom);
  checklistItem.addChild(checkbox, true /* opt_render */);
  var label = new example.ui.Label(checklistItem.getItemText());
  checklistItem.addChild(label, true /* opt_render */);
  checklistItem.setChecked(isItemChecked);
  return el;
};

/**
 * * @param {example.ui.ChecklistItem} checklistItem
 * * @param {Element} element Element to decorate.
 * * @return {Element} Decorated element.
 * */
example.ui.ChecklistItemRenderer.prototype.decorate = function(checklistItem, element) {
  goog.base(this, 'decorate', checklistItem, element);
  var checkbox = new goog.ui.Checkbox();
  checklistItem.addChild(checkbox);
  checkbox.decorate(goog.dom.getFirstElementChild(element));
  checklistItem.getModel().checked = checkbox.isChecked();
  var label = new example.ui.Label();
  checklistItem.addChild(label);
  label.decorate(goog.dom.getNextElementSibling(checkbox.getElement()));
  checklistItem.getModel().text = label.getLabelText();
  //Note that the following approach would not have worked because using
  //goog.ui.decorate() creates a checkbox that is already in the document, so
  //it cannot be added to checklistItem because it is not in the document yet,
  //as it is in the process of being decorated. In this case, decorate() must
  //be called after addChild(), as demonstrated in the working code earlier.
  //
  //var checkboxEl = goog.dom.getFirstElementChild(element);
  //var checkbox = /** @type {goog.ui.Checkbox} */ goog.ui.decorate(checkboxEl);
  //checklistItem.addChild(checkbox);
  //checklistItem.getModel().checked = checkbox.isChecked();
  
  return element;
};
