/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _scalejs = __webpack_require__(1);

	module.exports = {
	    receive: _scalejs.receive,
	    notify: _scalejs.notify
	};

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// import postal from 'postal';

	// var channel = postal.channel("messageChannel");

	var receive = function receive(event, callback) {
	    // var subscription = channel.subscribe({
	    //     channel: "messageChannel",
	    //     topic: event,
	    //     callback: callback
	    // });
	    console.log('in receive');
	};
	var notify = function notify(event, data) {
	    // channel.publish({
	    //     channel: "messageChannel",
	    //     topic: event,
	    //     data : data
	    // });
	    console.log('in notify');
	};

	exports.default = { receive: receive, notify: notify };

/***/ }
/******/ ]);