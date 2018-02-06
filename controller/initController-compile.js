'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _indexControllerCompile = require('./indexController-compile');

var _indexControllerCompile2 = _interopRequireDefault(_indexControllerCompile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//设置路由
var controllerInit = {
	init: function init(app, router) {
		app.use(router(function (_) {
			_.get('/index/index', _indexControllerCompile2.default.index());
			_.get('/index/update', _indexControllerCompile2.default.update());
		}));
	}
};
//导出
//引入
exports.default = controllerInit;
