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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WindowsPlatform = void 0;
var xml2js_1 = require("xml2js");
var icons_js_1 = require("../config/icons.js");
var helpers_js_1 = require("../helpers.js");
var base_js_1 = require("./base.js");
var ICONS_OPTIONS = {
    "mstile-70x70.png": (0, icons_js_1.transparentIcon)(70),
    "mstile-144x144.png": (0, icons_js_1.transparentIcon)(144),
    "mstile-150x150.png": (0, icons_js_1.transparentIcon)(150),
    "mstile-310x150.png": (0, icons_js_1.transparentIcon)(310, 150),
    "mstile-310x310.png": (0, icons_js_1.transparentIcon)(310),
};
var SUPPORTED_TILES = [
    { name: "square70x70logo", width: 70, height: 70 },
    { name: "square150x150logo", width: 150, height: 150 },
    { name: "wide310x150logo", width: 310, height: 150 },
    { name: "square310x310logo", width: 310, height: 310 },
];
function hasSize(size, icon) {
    return (icon.sizes.length === 1 &&
        icon.sizes[0].width === size.width &&
        icon.sizes[0].height === size.height);
}
var WindowsPlatform = /** @class */ (function (_super) {
    __extends(WindowsPlatform, _super);
    function WindowsPlatform(options) {
        return _super.call(this, options, (0, base_js_1.uniformIconOptions)(options, options.icons.windows, ICONS_OPTIONS)) || this;
    }
    WindowsPlatform.prototype.createFiles = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, [this.browserConfig()]];
            });
        });
    };
    WindowsPlatform.prototype.createHtml = function () {
        return __awaiter(this, void 0, void 0, function () {
            var tile;
            return __generator(this, function (_a) {
                tile = "mstile-144x144.png";
                // prettier-ignore
                return [2 /*return*/, [
                        "<meta name=\"msapplication-TileColor\" content=\"".concat(this.options.background, "\">"),
                        tile in this.iconOptions
                            ? "<meta name=\"msapplication-TileImage\" content=\"".concat(this.relative(tile), "\">")
                            : "",
                        "<meta name=\"msapplication-config\" content=\"".concat(this.relative(this.manifestFileName()), "\">"),
                    ]];
            });
        });
    };
    WindowsPlatform.prototype.manifestFileName = function () {
        var _a, _b, _c;
        return (_c = (_b = (_a = this.options.files) === null || _a === void 0 ? void 0 : _a.windows) === null || _b === void 0 ? void 0 : _b.manifestFileName) !== null && _c !== void 0 ? _c : "browserconfig.xml";
    };
    WindowsPlatform.prototype.browserConfig = function () {
        var basePath = this.options.manifestRelativePaths
            ? null
            : this.options.path;
        var tile = {};
        var _loop_1 = function (_a) {
            var name_1 = _a.name, size = __rest(_a, ["name"]);
            var icon = Object.entries(this_1.iconOptions).find(function (icon) {
                return hasSize(size, icon[1]);
            });
            if (icon) {
                tile[name_1] = {
                    $: { src: (0, helpers_js_1.relativeTo)(basePath, icon[0]) },
                };
            }
        };
        var this_1 = this;
        for (var _i = 0, SUPPORTED_TILES_1 = SUPPORTED_TILES; _i < SUPPORTED_TILES_1.length; _i++) {
            var _a = SUPPORTED_TILES_1[_i];
            _loop_1(_a);
        }
        var browserconfig = {
            browserconfig: {
                msapplication: {
                    tile: __assign(__assign({}, tile), { TileColor: { _: this.options.background } }),
                },
            },
        };
        var contents = new xml2js_1.default.Builder({
            xmldec: { version: "1.0", encoding: "utf-8", standalone: null },
        }).buildObject(browserconfig);
        return { name: this.manifestFileName(), contents: contents };
    };
    return WindowsPlatform;
}(base_js_1.Platform));
exports.WindowsPlatform = WindowsPlatform;
