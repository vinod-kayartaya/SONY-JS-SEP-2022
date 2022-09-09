export function square(num) {
    return num * num;
}

export const cube = (num) => num * square(num);

export const AUTHOR = 'Vinod Kumar K';

export default function (num) {
    let f = 1;
    while (num) {
        f *= num--;
    }
    return f;
}
