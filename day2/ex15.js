(function () {
    let day = 2;
    let training = 'JS';
    console.log(`Welcome to day ${day} of ${training} training.`);
})();

// IIFE (Immediately Invoked Function Expression)
// usecases:
// 1. avoid global namespace polution
// 2. invoke async functions
{
    console.log('hello');
}
