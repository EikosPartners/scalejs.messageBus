import postal from 'postal';

var channel = postal.channel("messageChannel");

    function receive(event, callback) {
        return channel.subscribe({
            channel: "messageChannel",
            topic: event,
            callback: callback
        });
    };
    
    function notify (event, data) {
        channel.publish({
            channel: "messageChannel",
            topic: event,
            data : data
        });
    };
       
 export {receive, notify}

