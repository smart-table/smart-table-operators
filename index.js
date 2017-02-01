export function swap (f) {
  return (a, b) => f(b, a);
}

export function compose (first, ...fns) {
  return (...args) => fns.reduce((previous, current) => current(previous), first(...args));
}

export function curry (fn, arityLeft) {
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

export function apply (fn) {
  return (...args) => fn(...args);
}

export function tap (fn) {
  return arg => {
    fn(arg);
    return arg;
  }
}