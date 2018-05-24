'use strict'

export const head = ([x]) => x;

export const tail = ([, ...xs]) => xs;

export const def = x => typeof x !== 'undefined';

export const undef = x => !def(x);

export const copy = array => [...array];

export const length = ([x, ...xs], len = 0) => def(x) ? length(xs, len + 1) : len;

export const reverse = ([x, ...xs]) => def(x) ? [...reverse(xs), x] : [];

export const first = ([x, ...xs], n = 1) => def(x) && n ? [x, ...first(xs, n - 1)] : [];

export const last = (xs, n = 1) => reverse(first(reverse(xs), n));

export const slice = ([x, ...xs], i, y, curr = 0) => def(x)
  ? curr === i
    ? [y, x, ...slice(xs, i, y, curr + 1)]
    : [x, ...slice(xs, i, y, curr + 1)]
: [];

export const isArray = x => Array.isArray(x);

export const flatten = ([x, ...xs]) => def(x)
    ? isArray(x) ? [...flatten(x), ...flatten(xs)] : [x, ...flatten(xs)]
: [];

export const partition = (xs, fn) => [filter(xs, fn), reject(xs, fn)];

export const pluck = (key, object) => object[key];

export const flow = (...args) => init => reduce(args, (memo, fn) => fn(memo), init);

export const min = ([x, ...xs], result = Infinity) => def(x)
    ? x < result
        ? min(xs, x)
        : result
: result;

export const max = ([x, ...xs], result = -Infinity) => def(x)
    ? x > result
        ? max(xs, x)
        : max(xs, result)
: result;

export const factorial = (x, acum = 1) => x ? factorial(x - 1, x * acum) : acum;

export const fib = x => x > 2 ? fib(x - 1) + fib(x - 2) : 1;

export const quicksort = (xs) => length(xs)
  ? flatten([
    quicksort(filter(tail(xs), x => x <= head(xs))),
    head(xs),
    quicksort(filter(tail(xs), x => x > head(xs)))
  ])
: [];

