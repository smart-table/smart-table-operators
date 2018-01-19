import zora from 'zora';
import {swap, tap, curry, compose, apply} from '../index';

const substract = (a, b) => a - b;
const addTwo = (a) => a + 2;
const multiplyByThree = a => a * 3;

export default zora()
	.test('swap two arguments of a function', t => {
		const f = swap(substract);
		t.equal(f(3, 2), -1);
		t.equal(f(3, 8), 5);
	}).test('compose', t => {
		const addTwoTimesThree = compose(addTwo, multiplyByThree);
		const timesThreeAddTow = compose(multiplyByThree, addTwo);
		t.equal(addTwoTimesThree(4), 18);
		t.equal(timesThreeAddTow(4), 14);
	})
	.test('tap should run function as side effect', t => {
		let count = 0;
		const f = () => count++;
		const arg = 'foo';
		const tapped = tap(f);
		const output = tapped(arg);
		t.equal(output, 'foo');
		t.equal(count, 1);
	})
	.test('curry', t => {
		const sum = curry((a, b, c) => a + b + c);
		t.equal(sum(2, 3)(4), 9);
		t.equal(sum(2, 3, 4), 9);
		t.equal(sum(2)(3)(4), 9)
	})
	.test('curry with no argument passed', t => {
		const fn = curry((a, b = 1) => a + b, 2);
		t.equal(fn(2)(3), 5);
		t.equal(fn(2)(), 3);
	})
	.test('apply', t => {
		const times2Factory = () => x => x * 2;
		const times2 = apply(times2Factory());
		t.equal(times2(4), 8);
		t.equal(times2(7), 14);
	})
	.run();
