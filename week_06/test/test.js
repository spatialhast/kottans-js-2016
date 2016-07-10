import test from 'ava';
import add from './add';

test('empty string should return 0', t => {
    t.is(add(''), 0);
});

test('string with one number should return number', t => {
    t.is(add("4"), 4);
});

test('string with two numbers should returns sum of numbers', t => {
    t.is(add("4,2"), 6);
});

test('multiple numbers should returns sum of numbers', t => {
    t.is(add("1,2,3,4,5,6"), 21);
});

test('new line between numbers should returns sum of numbers', t => {
    t.is(add("1\n2,3"), 6);
});

test('delimiter in the beginning of the string should returns sum of numbers', t => {
    t.is(add("//;\n1;2"), 3);
    t.is(add("//.\n4.2.3"), 9);
});

test('negative numbers should return exception', t => {
    t.throws(function() {
        add("-4")
    }, Error, 'negative not allowed');
});

test('negative numbers should returns exception', t => {
    t.throws(function() {
        add("-4,-3,2,-1,5")
    }, Error, "negatives not allowed");
});

test('numbers bigger then 1000 should be ignored', t => {
    t.is(add("1,2,5,1000,1001,7000"), 8);
});

test('custom delimiter should return sum of numbers', t => {
    t.is(add('//[***]\n1***2***3'), 6);
});

test('custom multiple delimiters should return sum of numbers', t => {
    t.is(add('//[**][%]\n1**2%3'), 6);
});