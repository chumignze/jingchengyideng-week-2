'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _indexModelCompile = require('../models/indexModel-compile');

var _indexModelCompile2 = _interopRequireDefault(_indexModelCompile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var controllerIndex = {
	index: function index() {
		return async function (ctx, next) {
			ctx.body = await ctx.render('index.html', {
				title: '大拇指点赞功能'
			});
		};
	},
	update: function update() {
		return async function (ctx, next) {
			var indexM = new _indexModelCompile2.default();
			ctx.body = await indexM.updateNum();
		};
	}
};
exports.default = controllerIndex;
