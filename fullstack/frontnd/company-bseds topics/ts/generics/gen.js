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
var aporva = function (reason) {
    var bkn = Math.floor(Math.random() * 6);
    var dosa = 'dosa';
    return __assign(__assign({}, reason), { dosa: dosa, bkn: bkn });
};
var dishh = aporva({ name: 'disha', frind: 'true' });
console.log(dishh.name);
