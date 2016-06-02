"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.notify = exports.receive = undefined;

var _postal = require("postal");

var _postal2 = _interopRequireDefault(_postal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var channel = _postal2.default.channel("messageChannel");

function receive(event, callback) {
    var subscription = channel.subscribe({
        channel: "messageChannel",
        topic: event,
        callback: callback
    });
};

function notify(event, data) {
    channel.publish({
        channel: "messageChannel",
        topic: event,
        data: data
    });
};

exports.receive = receive;
exports.notify = notify;