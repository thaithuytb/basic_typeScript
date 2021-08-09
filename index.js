var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
/**
 * Generics
 * Generics extends
 * Generics in interface
 */
//generics
var speak = function (a, b) { return [a, b]; };
var v1 = speak('Thai', 23);
var v2 = speak('Thai', 23);
var speak2 = function (a, b) { return [a[a.length - 1], b[0]]; };
var v3 = speak2(['a', 'b'], [1, 2, 3]);
var v4 = speak2(['a', 'b', 'c', 4], [1, 2, 3]);
// console.log(v4)
//generics extends
var inFoName = function (a) { return (__assign(__assign({}, a), { fullName: 'Ngo Quang Thai' })); };
var v5 = inFoName({ firstName: 'Ngo Quang', lastName: 'Thai' });
// console.log(v5.firstName)  ? why false ? 
//solution
var InfoNameGenerics = function (a) { return (__assign(__assign({}, a), { fullName: 'Ngo Quang Thai' })); };
var v6 = InfoNameGenerics({ firstName: 'Ngo Quang', lastName: 'Thai' });
// console.log(v6.firstName)
var InfoGenericsExtends = function (a) { return (__assign(__assign({}, a), { fullName: "ho va ten: " + a.firstName + " " + a.lastName })); };
var v7 = InfoGenericsExtends({ firstName: 'Ngo Quang', lastName: 'Thai', age: 20 });
var thaiInterface = {
    name: 'Thai',
    info: '16, 72, Ton That Tung'
};
var thaiInterface_2 = {
    name: 'Thai',
    age: 19,
    info: {
        street: 'Ton That Tung',
        numberHouse: 16,
        detail: 'ngo 72'
    }
};
var thaiInterface_3 = {
    name: 'Thai',
    age: 20,
    info: 72
};
