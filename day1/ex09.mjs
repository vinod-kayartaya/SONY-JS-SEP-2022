// import { cube, square as sqr } from './mathutils.mjs';
// import fact from './mathutils.mjs';

import fact, { cube, square as sqr } from './mathutils.mjs';

// all named exports are together imported as an object 'x'
import * as x from './mathutils.mjs';

console.log('square of 14 is', sqr(14));
console.log('cube of 14 is', cube(14));
console.log('factorial of 5 is', fact(5));

console.log('square of 55 is', x.square(55));
console.log('cube of 55 is', x.cube(55));
