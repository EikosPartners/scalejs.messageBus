import postal from 'postal';

var channel = postal.channel("messageChannel");
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
            data : data
        });
    };

    function dispose() {
        subscription.unsubscribe();
    };

 export {receive, notify, dispose}
