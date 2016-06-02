// import postal from 'postal';

// var channel = postal.channel("messageChannel");

    function receive(event, callback) {
        // var subscription = channel.subscribe({
        //     channel: "messageChannel",
        //     topic: event,
        //     callback: callback
        // });
        console.log('in receive');
    };
    function notify (event, data) {
        // channel.publish({
        //     channel: "messageChannel",
        //     topic: event,
        //     data : data
        // });
        console.log('in notify');
    };
       
    export {receive, notify}

