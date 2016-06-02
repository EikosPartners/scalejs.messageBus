// import postal from 'postal';

// var channel = postal.channel("messageChannel");

 var receive = function (event, callback) {
    // var subscription = channel.subscribe({
    //     channel: "messageChannel",
    //     topic: event,
    //     callback: callback
    // });
    console.log('in receive');
};
var notify = function (event, data) {
    // channel.publish({
    //     channel: "messageChannel",
    //     topic: event,
    //     data : data
    // });
    console.log('in notify');
};

export default {receive, notify}