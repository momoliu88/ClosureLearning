/**
* @fileoverview Description of this file.
*/
/**
* * @constructor
* * @extends {goog.ui.ContainerRenderer}
* */
example.ui.ChecklistRenderer = function() {
  goog.base(this);
};
goog.inherits(example.ui.ChecklistRenderer, goog.ui.ContainerRenderer);
goog.addSingletonGetter(example.ui.ChecklistRenderer);
/** @type {string} */
example.ui.ChecklistRenderer.CSS_CLASS = 'example-checklist';
/** @inheritDoc */
example.ui.ChecklistRenderer.prototype.getCssClass = function() {
  return example.ui.ChecklistRenderer.CSS_CLASS;
};
/**
* * @param {example.ui.Checklist} checklistContainer
* * @return {Element}
* */
example.ui.ChecklistRenderer.prototype.createDom = function(checklistContainer) {
  var el = goog.base(this, 'createDom', checklistContainer);
  checklistContainer.setElementInternal(el);
  var checklist = checklistContainer.getModel();
  var items = checklist.getItems();
  goog.array.forEach(items, function(item) {
  	var control = new example.ui.ChecklistItem(item);
  	checklistContainer.addChild(control, true /* opt_render */);
});
return el;
};
/**
* * @param {example.ui.Checklist} checklistContainer
* * @param {Element} element Element to decorate.
* * @return {Element} Decorated element.
* */
example.ui.ChecklistRenderer.prototype.decorate = function(checklistContainer,
		                                           element) {
  goog.base(this, 'decorate', checklistContainer, element);
  var items = [];
  checklistContainer.forEachChild(function(child) {
  	items.push((/** @type {example.ui.ChecklistItem} */ (child)).getModel());
  });
  var checklist = new example.Checklist(items);
  checklistContainer.setModel(checklist);
  return element;
};

