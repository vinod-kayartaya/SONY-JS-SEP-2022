function sleep(duration = 1000) {
    const start = Date.now();
    while (Date.now() - start < duration);
}

function execAfterDelay(fn, duration) {
    if (!fn || typeof fn !== 'function') {
        throw 'Parameter#1 must be a function';
    }
    if (!duration || typeof duration !== 'number' || duration <= 0) {
        throw 'Parameter#2 must be a number > 0';
    }
    sleep(duration);
    fn();
}

module.exports.sleep = sleep;
module.exports.execAfterDelay = execAfterDelay;
