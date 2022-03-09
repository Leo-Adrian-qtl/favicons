"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.maskable = exports.opaqueIcon = exports.transparentIcons = exports.transparentIcon = void 0;
function transparentIcon(width, height) {
    return {
        sizes: [{ width: width, height: height !== null && height !== void 0 ? height : width }],
        offset: 0,
        background: false,
        transparent: true,
        rotate: false,
    };
}
exports.transparentIcon = transparentIcon;
function transparentIcons() {
    var sizes = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        sizes[_i] = arguments[_i];
    }
    return {
        sizes: sizes.map(function (size) { return ({ width: size, height: size }); }),
        offset: 0,
        background: false,
        transparent: true,
        rotate: false,
    };
}
exports.transparentIcons = transparentIcons;
function opaqueIcon(width, height) {
    return {
        sizes: [{ width: width, height: height !== null && height !== void 0 ? height : width }],
        offset: 0,
        background: true,
        transparent: false,
        rotate: false,
    };
}
exports.opaqueIcon = opaqueIcon;
function maskable(options) {
    return __assign(__assign({}, options), { purpose: "maskable" });
}
exports.maskable = maskable;
