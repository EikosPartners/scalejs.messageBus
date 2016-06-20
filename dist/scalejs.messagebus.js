"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.dispose = exports.notify = exports.receive = undefined;

var _postal = require("postal");

var _postal2 = _interopRequireDefault(_postal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var channel = _postal2.default.channel("messageChannel");
var subscription;

function receive(event, callback) {
    subscription = channel.subscribe({
        channel: "messageChannel",
        topic: event,
        callback: callback
    });

    return subscription;
};

function notify(event, data) {
    channel.publish({
        channel: "messageChannel",
        topic: event,
        data: data
    });
};

function dispose() {
    subscription.unsubscribe();
};

exports.receive = receive;
exports.notify = notify;
exports.dispose = dispose;