(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global['smart-table-operators'] = global['smart-table-operators'] || {})));
}(this, (function (exports) { 'use strict';

function swap (f) {
  return (a, b) => f(b, a);
}

function compose (first, ...fns) {
  return (...args) => fns.reduce((previous, current) => current(previous), first(...args));
}

function curry (fn, arityLeft) {
  const arity = arityLeft || fn.length;
  return (...args) => {
    if (arity === args.length) {
      return fn(...args);
    } else {
      const func = (...moreArgs) => fn(...args, ...moreArgs);
      return curry(func, arity - args.length);
    }
  };
}

function apply (fn) {
  return (...args) => fn(...args);
}

function tap (fn) {
  return arg => {
    fn(arg);
    return arg;
  }
}

exports.swap = swap;
exports.compose = compose;
exports.curry = curry;
exports.apply = apply;
exports.tap = tap;

Object.defineProperty(exports, '__esModule', { value: true });

})));
