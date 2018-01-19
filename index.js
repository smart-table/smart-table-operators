export const swap = f => (a, b) => f(b, a);

export const compose = (first, ...fns) => (...args) => fns.reduce((previous, current) => current(previous), first(...args));

export const curry = (fn, arityLeft) => {
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

export const apply = fn => (...args) => fn(...args);

export const tap = fn => arg => {
	fn(arg);
	return arg;
};
