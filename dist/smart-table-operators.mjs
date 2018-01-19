const swap = f => (a, b) => f(b, a);

const compose = (first, ...fns) => (...args) => fns.reduce((previous, current) => current(previous), first(...args));

const curry = (fn, arityLeft) => {
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

const apply = fn => (...args) => fn(...args);

const tap = fn => arg => {
	fn(arg);
	return arg;
};

export { swap, compose, curry, apply, tap };
