/**
* @fileoverview Description of this file.
*/
/**
* * This is a simple component that displays some inline text.
* * @param {string=} labelText
* * @constructor
* * @extends {goog.ui.Component}
* */
example.ui.Label = function(labelText) {
  goog.base(this);
  /**
   * * @type {string}
   * * @private
   * */
  this.labelText_ = goog.isDef(labelText) ? labelText : '';
};
goog.inherits(example.ui.Label, goog.ui.Component);
example.ui.Label.CSS_CLASS = 'example-label';
/** @return {string} */
example.ui.Label.prototype.getLabelText = function() {
  return this.labelText_;
};
/** @inheritDoc */
example.ui.Label.prototype.createDom = function() {
  var el = this.dom_.createDom('span', undefined /* opt_attributes */,
		             this.labelText_);
  this.decorateInternal(el);
};
/** @inheritDoc */
example.ui.Label.prototype.decorateInternal = function(element) {
  goog.base(this, 'decorateInternal', element);
  this.labelText_ = element.firstChild.nodeValue;
  goog.dom.classes.add(element, example.ui.Label.CSS_CLASS);
};

