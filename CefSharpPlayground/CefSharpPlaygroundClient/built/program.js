/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _react = __webpack_require__(1);
	
	var React = _interopRequireWildcard(_react);
	
	var _reactDom = __webpack_require__(2);
	
	var ReactDOM = _interopRequireWildcard(_reactDom);
	
	var _Hello = __webpack_require__(3);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	ReactDOM.render(React.createElement(_Hello.Hello, { compiler: "TypeScript", framework: "React" }), document.getElementById("example"));

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Hello = undefined;
	
	var _react = __webpack_require__(1);
	
	var React = _interopRequireWildcard(_react);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var __extends = undefined && undefined.__extends || function (d, b) {
	    for (var p in b) {
	        if (b.hasOwnProperty(p)) d[p] = b[p];
	    }function __() {
	        this.constructor = d;
	    }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	
	// 'HelloProps' describes the shape of props.
	// State is never set so we use the 'undefined' type.
	var Hello = function (_super) {
	    __extends(Hello, _super);
	    function Hello(props) {
	        var _this = _super.call(this, props) || this;
	        _this.state = {
	            time: new Date().toUTCString()
	        };
	        return _this;
	    }
	    Hello.prototype.componentDidMount = function () {
	        var _this = this;
	        setInterval(function () {
	            return _this.tick();
	        }, 50);
	    };
	    Hello.prototype.tick = function () {
	        this.setState({ time: new Date().toUTCString() });
	    };
	    Hello.prototype.clickHandler = function (e) {
	        App.displayMessage("Hello from React!!");
	    };
	    Hello.prototype.render = function () {
	        return React.createElement("h1", { onClick: this.clickHandler }, "Hello from ", this.props.compiler, " and ", this.props.framework, "! The time is ", this.state.time, ".");
	    };
	    return Hello;
	}(React.Component);
	exports.Hello = Hello;

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZmVkOThmZmIzYWRmNThjMTcxNWMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIlJlYWN0RE9NXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSGVsbG8udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7QUN0Q087O0tBQXdCOztBQUN4Qjs7S0FBK0I7O0FBRUs7Ozs7QUFDbkMsVUFBTyxPQUNiLE1BQU0sOEJBQVMsVUFBYSxjQUFVLFdBQVcsWUFDekMsU0FBZSxlQUN2QixZOzs7Ozs7QUNQRix3Qjs7Ozs7O0FDQUEsMkI7Ozs7Ozs7Ozs7Ozs7QUNBTzs7S0FBd0I7Ozs7Ozs7Ozs7Ozs7QUFXYztBQUNRO0FBQ3JEO0FBQTJCLHNCQUF5QztBQUVsRSxvQkFBcUM7QUFBckMscUJBQ0Usa0JBQVksVUFJYjtBQUhLLGVBQU07QUFDSixtQkFBRSxJQUFVLE9BQ2pCO0FBRlk7Z0JBR2Y7QUFBQztBQUVNLHFCQUFpQixvQkFBeEI7QUFBQSxxQkFFQztBQURZLHFCQUFDO0FBQU0sb0JBQUksTUFBTztBQUFBLFlBQy9CO0FBQUM7QUFFTSxxQkFBSSxPQUFYO0FBQ00sY0FBUyxTQUFDLEVBQUssTUFBRSxJQUFVLE9BQ2pDO0FBQUM7QUFFTSxxQkFBWSxlQUFuQixVQUFxQjtBQUNoQixhQUFlLGVBQ3BCO0FBQUM7QUFFTSxxQkFBTSxTQUFiO0FBQ1EsZ0JBQUMsNEJBQVcsU0FBTSxLQUFhLCtCQUFrQixLQUFNLE1BQVMsbUJBQVcsS0FBTSxNQUFVLDZCQUFvQixLQUFNLE1BQUssTUFDbEk7QUFBQztBQUNILFlBQUM7QUFBQSxHQXhCK0IsTUF3Qi9CIiwiZmlsZSI6InByb2dyYW0uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBmZWQ5OGZmYjNhZGY1OGMxNzE1YyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgKiBhcyBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XHJcblxyXG5pbXBvcnQgeyBIZWxsbyB9IGZyb20gXCIuL2NvbXBvbmVudHMvSGVsbG9cIjtcclxuUmVhY3RET00ucmVuZGVyKFxyXG4gIDxIZWxsbyBjb21waWxlcj1cIlR5cGVTY3JpcHRcIiBmcmFtZXdvcms9XCJSZWFjdFwiIC8+LFxyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXhhbXBsZVwiKVxyXG4pO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXgudHN4IiwibW9kdWxlLmV4cG9ydHMgPSBSZWFjdDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIlJlYWN0XCJcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBSZWFjdERPTTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIlJlYWN0RE9NXCJcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElIZWxsb1Byb3BzIHtcclxuICBjb21waWxlcjogc3RyaW5nO1xyXG4gIGZyYW1ld29yazogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElIZWxsb1N0YXRlIHtcclxuICB0aW1lOiBzdHJpbmdcclxufVxyXG5cclxuLy8gJ0hlbGxvUHJvcHMnIGRlc2NyaWJlcyB0aGUgc2hhcGUgb2YgcHJvcHMuXHJcbi8vIFN0YXRlIGlzIG5ldmVyIHNldCBzbyB3ZSB1c2UgdGhlICd1bmRlZmluZWQnIHR5cGUuXHJcbmV4cG9ydCBjbGFzcyBIZWxsbyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJSGVsbG9Qcm9wcywgSUhlbGxvU3RhdGU+IHtcclxuXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKHByb3BzOiBJSGVsbG9Qcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgdGltZTogbmV3IERhdGUoKS50b1VUQ1N0cmluZygpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICBzZXRJbnRlcnZhbCgoKSA9PiB0aGlzLnRpY2soKSwgNTApO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHRpY2soKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHt0aW1lOiBuZXcgRGF0ZSgpLnRvVVRDU3RyaW5nKCl9KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjbGlja0hhbmRsZXIoZSkge1xyXG4gICAgQXBwLmRpc3BsYXlNZXNzYWdlKFwiSGVsbG8gZnJvbSBSZWFjdCEhXCIpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlbmRlcigpIHtcclxuICAgIHJldHVybiA8aDEgb25DbGljaz17dGhpcy5jbGlja0hhbmRsZXJ9PkhlbGxvIGZyb20ge3RoaXMucHJvcHMuY29tcGlsZXJ9IGFuZCB7dGhpcy5wcm9wcy5mcmFtZXdvcmt9ISBUaGUgdGltZSBpcyB7dGhpcy5zdGF0ZS50aW1lfS48L2gxPjtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvSGVsbG8udHN4Il0sInNvdXJjZVJvb3QiOiIifQ==