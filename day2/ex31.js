function* fibo() {
    let a = -1,
        b = 1;
    while (true) {
        c = a + b;
        yield c;
        a = b;
        b = c;
    }
}

const f = fibo();

for (let i = 0; i < 100; i++) {
    console.log(f.next().value);
}
