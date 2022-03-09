"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppleStartupPlatform = void 0;
var icons_js_1 = require("../config/icons.js");
var base_js_1 = require("./base.js");
// https://developer.apple.com/design/human-interface-guidelines/ios/visual-design/adaptivity-and-layout/#device-screen-sizes-and-orientations
var SCREEN_SIZES = [
    { deviceWidth: 320, deviceHeight: 568, pixelRatio: 2 },
    { deviceWidth: 375, deviceHeight: 667, pixelRatio: 2 },
    { deviceWidth: 375, deviceHeight: 812, pixelRatio: 3 },
    { deviceWidth: 390, deviceHeight: 844, pixelRatio: 3 },
    { deviceWidth: 414, deviceHeight: 896, pixelRatio: 2 },
    { deviceWidth: 414, deviceHeight: 896, pixelRatio: 3 },
    { deviceWidth: 414, deviceHeight: 736, pixelRatio: 3 },
    { deviceWidth: 414, deviceHeight: 736, pixelRatio: 3 },
    { deviceWidth: 428, deviceHeight: 926, pixelRatio: 3 },
    { deviceWidth: 768, deviceHeight: 1024, pixelRatio: 2 },
    { deviceWidth: 810, deviceHeight: 1080, pixelRatio: 2 },
    { deviceWidth: 834, deviceHeight: 1194, pixelRatio: 2 },
    { deviceWidth: 834, deviceHeight: 1112, pixelRatio: 2 },
    { deviceWidth: 1024, deviceHeight: 1366, pixelRatio: 2 }, // 12.9" iPad Pro
];
function iconOptions() {
    var result = {};
    for (var _i = 0, SCREEN_SIZES_1 = SCREEN_SIZES; _i < SCREEN_SIZES_1.length; _i++) {
        var size = SCREEN_SIZES_1[_i];
        var pixelWidth = size.deviceWidth * size.pixelRatio;
        var pixelHeight = size.deviceHeight * size.pixelRatio;
        result["apple-touch-startup-image-".concat(pixelWidth, "x").concat(pixelHeight, ".png")] = __assign(__assign(__assign({}, (0, icons_js_1.opaqueIcon)(pixelWidth, pixelHeight)), size), { orientation: "portrait" });
        result["apple-touch-startup-image-".concat(pixelHeight, "x").concat(pixelWidth, ".png")] = __assign(__assign(__assign({}, (0, icons_js_1.opaqueIcon)(pixelHeight, pixelWidth)), size), { orientation: "landscape" });
    }
    return result;
}
var ICONS_OPTIONS = iconOptions();
var AppleStartupPlatform = /** @class */ (function (_super) {
    __extends(AppleStartupPlatform, _super);
    function AppleStartupPlatform(options) {
        return _super.call(this, options, (0, base_js_1.uniformIconOptions)(options, options.icons.appleStartup, ICONS_OPTIONS)) || this;
    }
    AppleStartupPlatform.prototype.createHtml = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                // prettier-ignore
                return [2 /*return*/, Object.entries(this.iconOptions).map(function (_a) {
                        var name = _a[0], item = _a[1];
                        return "<link rel=\"apple-touch-startup-image\" media=\"(device-width: ".concat(item.deviceWidth, "px) and (device-height: ").concat(item.deviceHeight, "px) and (-webkit-device-pixel-ratio: ").concat(item.pixelRatio, ") and (orientation: ").concat(item.orientation, ")\" href=\"").concat(_this.relative(name), "\">");
                    })];
            });
        });
    };
    return AppleStartupPlatform;
}(base_js_1.Platform));
exports.AppleStartupPlatform = AppleStartupPlatform;
