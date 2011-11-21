var XMLWriter = require('../');
exports['setUp'] = function (callback) {
	this.xw = new XMLWriter();
	callback();
};
exports['t01'] = function (test) {
	this.xw.startElement('foo');
	test.equal(this.xw.toString(), '<foo/>');
    test.done();
};
exports['t02'] = function (test) {
	this.xw.startElement('foo');
	this.xw.endElement();
	test.equal(this.xw.toString(), '<foo/>');
	test.done();
};
exports['t03'] = function (test) {
	this.xw.startElement('foo');
	this.xw.text('fake');
	test.equal(this.xw.toString(), '<foo>fake</foo>');
	test.done();
};
exports['t04'] = function (test) {
	this.xw.startElement('foo');
	this.xw.text('fake');
	this.xw.endElement();
	test.equal(this.xw.toString(), '<foo>fake</foo>');
    test.done();
};