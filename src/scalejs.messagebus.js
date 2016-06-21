import postal from 'postal';

var channel = postal.channel("messageChannel");
var subscription;

    function receive(event, callback) {
        subscription = channel.subscribe({
            channel: "messageChannel",
            topic: event,
            callback: callback
        });
        subscription.dispose = subscription.unsubscribe;
        return subscription;
    };

    function notify(event, data) {
        channel.publish({
            channel: "messageChannel",
            topic: event,
            data : data
        });
    };

 export {receive, notify}
