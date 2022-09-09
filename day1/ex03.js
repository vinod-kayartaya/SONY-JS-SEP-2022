const sayHello = function (name = 'friend', city = 'your city') {
    // console.log(`Hello ${name}, how is weather in ${city}?`);
    console.log(arguments);
    // console.log(arguments[0], arguments[1], arguments[2]);
    // for (let i = 0; i < arguments.length; i++) {
    //     console.log(arguments[i]);
    // }
    // console.log('------------');
};

sayHello('Vinod', 'Bangalore');
sayHello('Vinod');
sayHello();
sayHello('Vinod', 'Bangalore', 'India');
