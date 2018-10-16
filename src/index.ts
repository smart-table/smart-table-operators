export const swap = (f: Function): Function => (a: any, b: any) => f(b, a);

export const compose = (first: Function, ...fns: Function[]): Function => (...args) => fns.reduce((previous, current) => current(previous), first(...args));

export const curry = (fn: Function, arityLeft?: number): Function => {
    const arity = arityLeft || fn.length;
    return (...args) => {
        const argLength = args.length || 1;
        if (arity === argLength) {
            return fn(...args);
        }
        const func = (...moreArgs) => fn(...args, ...moreArgs);
        return curry(func, arity - args.length);
    };
};

export const apply = (fn: Function): Function => (...args) => fn(...args);

export const tap = (fn: Function): Function => arg => {
    fn(arg);
    return arg;
};
