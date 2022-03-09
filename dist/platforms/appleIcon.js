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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppleIconPlatform = void 0;
var escape_html_1 = require("escape-html");
var icons_js_1 = require("../config/icons.js");
var base_js_1 = require("./base.js");
var ICONS_OPTIONS = {
    "apple-touch-icon-57x57.png": (0, icons_js_1.opaqueIcon)(57),
    "apple-touch-icon-60x60.png": (0, icons_js_1.opaqueIcon)(60),
    "apple-touch-icon-72x72.png": (0, icons_js_1.opaqueIcon)(72),
    "apple-touch-icon-76x76.png": (0, icons_js_1.opaqueIcon)(76),
    "apple-touch-icon-114x114.png": (0, icons_js_1.opaqueIcon)(114),
    "apple-touch-icon-120x120.png": (0, icons_js_1.opaqueIcon)(120),
    "apple-touch-icon-144x144.png": (0, icons_js_1.opaqueIcon)(144),
    "apple-touch-icon-152x152.png": (0, icons_js_1.opaqueIcon)(152),
    "apple-touch-icon-167x167.png": (0, icons_js_1.opaqueIcon)(167),
    "apple-touch-icon-180x180.png": (0, icons_js_1.opaqueIcon)(180),
    "apple-touch-icon-1024x1024.png": (0, icons_js_1.opaqueIcon)(1024),
    "apple-touch-icon.png": (0, icons_js_1.opaqueIcon)(180),
    "apple-touch-icon-precomposed.png": (0, icons_js_1.opaqueIcon)(180),
};
var AppleIconPlatform = /** @class */ (function (_super) {
    __extends(AppleIconPlatform, _super);
    function AppleIconPlatform(options) {
        return _super.call(this, options, (0, base_js_1.uniformIconOptions)(options, options.icons.appleIcon, ICONS_OPTIONS)) || this;
    }
    AppleIconPlatform.prototype.createHtml = function () {
        return __awaiter(this, void 0, void 0, function () {
            var icons, name;
            var _this = this;
            return __generator(this, function (_a) {
                icons = Object.entries(this.iconOptions)
                    .filter(function (_a) {
                    var name = _a[0];
                    return /\d/.test(name);
                }) // with a size in a name
                    .map(function (_a) {
                    var name = _a[0], options = _a[1];
                    var _b = options.sizes[0], width = _b.width, height = _b.height;
                    // prettier-ignore
                    return "<link rel=\"apple-touch-icon\" sizes=\"".concat(width, "x").concat(height, "\" href=\"").concat(_this.relative(name), "\">");
                });
                name = this.options.appShortName || this.options.appName;
                // prettier-ignore
                return [2 /*return*/, __spreadArray(__spreadArray([], icons, true), [
                        "<meta name=\"apple-mobile-web-app-capable\" content=\"yes\">",
                        "<meta name=\"apple-mobile-web-app-status-bar-style\" content=\"".concat(this.options.appleStatusBarStyle, "\">"),
                        name
                            ? "<meta name=\"apple-mobile-web-app-title\" content=\"".concat((0, escape_html_1.default)(name), "\">")
                            : "<meta name=\"apple-mobile-web-app-title\">"
                    ], false)];
            });
        });
    };
    return AppleIconPlatform;
}(base_js_1.Platform));
exports.AppleIconPlatform = AppleIconPlatform;
