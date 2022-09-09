const sayHello = (name = 'friend', city = 'your city') => {
    console.log(`Hello, ${name}. How is weather in ${city}?`);
    console.log(arguments);
};

sayHello('Vinod', 'Bangalore');
sayHello('Vinod');
sayHello();
sayHello('Vinod', 'Bangalore', 'India');
