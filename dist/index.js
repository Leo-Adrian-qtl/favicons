"use strict";
// generate README sources:  jq ". | with_entries(.value |= keys)" < icons.json
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
exports.stream = exports.favicons = exports.config = void 0;
// TO_DO: More comments to know what's going on, for future maintainers
var stream_1 = require("stream");
var defaults_js_1 = require("./config/defaults.js");
var helpers_js_1 = require("./helpers.js");
var index_js_1 = require("./platforms/index.js");
exports.config = {
    defaults: defaults_js_1.defaultOptions,
};
function createFavicons(source, options) {
    return __awaiter(this, void 0, void 0, function () {
        var sourceset, platforms, responses, _i, platforms_1, platformName, platform, _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    options = __assign(__assign(__assign({}, defaults_js_1.defaultOptions), options), { icons: __assign(__assign({}, defaults_js_1.defaultOptions.icons), options.icons), output: __assign(__assign({}, defaults_js_1.defaultOptions.output), options.output) });
                    return [4 /*yield*/, (0, helpers_js_1.sourceImages)(source)];
                case 1:
                    sourceset = _c.sent();
                    platforms = Object.keys(options.icons)
                        .filter(function (platform) { return options.icons[platform]; })
                        .sort(function (a, b) {
                        if (a === "favicons")
                            return -1;
                        if (b === "favicons")
                            return 1;
                        return a.localeCompare(b);
                    });
                    responses = [];
                    _i = 0, platforms_1 = platforms;
                    _c.label = 2;
                case 2:
                    if (!(_i < platforms_1.length)) return [3 /*break*/, 5];
                    platformName = platforms_1[_i];
                    platform = (0, index_js_1.getPlatform)(platformName, options);
                    _b = (_a = responses).push;
                    return [4 /*yield*/, platform.create(sourceset)];
                case 3:
                    _b.apply(_a, [_c.sent()]);
                    _c.label = 4;
                case 4:
                    _i++;
                    return [3 /*break*/, 2];
                case 5: return [2 /*return*/, {
                        images: responses.flatMap(function (r) { return r.images; }),
                        files: responses.flatMap(function (r) { return r.files; }),
                        html: responses.flatMap(function (r) { return r.html; }),
                    }];
            }
        });
    });
}
/**
 * @typedef FaviconCallback
 * @type {(error: Error|null, response: FaviconResponse) => any}
 */
/**
 * Build favicons
 * @param {string|string[]|Buffer|Buffer[]} source - The path to the source image to generate icons from
 * @param {Partial<FaviconOptions>|undefined} options - The options used to build favicons
 * @param {FaviconCallback|undefined} next - The callback to execute after processing
 * @returns {Promise|Promise<FaviconResponse>}
 */
// eslint-disable-next-line no-undefined
function favicons(source, options, next) {
    if (options === void 0) { options = {}; }
    if (next === void 0) { next = undefined; }
    if (next) {
        return favicons(source, options)
            .then(function (response) { return next(null, response); })
            .catch(next);
    }
    return createFavicons(source, options);
}
exports.favicons = favicons;
exports.default = favicons;
var FaviconStream = /** @class */ (function (_super) {
    __extends(FaviconStream, _super);
    function FaviconStream(options, handleHTML) {
        var _this = _super.call(this, { objectMode: true }) || this;
        _this.options = options;
        _this.handleHTML = handleHTML;
        return _this;
    }
    FaviconStream.prototype._transform = function (file, _encoding, callback) {
        var _this = this;
        var _a = this.options, htmlPath = _a.html, pipeHTML = _a.pipeHTML, options = __rest(_a, ["html", "pipeHTML"]);
        favicons(file, options)
            .then(function (_a) {
            var images = _a.images, files = _a.files, html = _a.html;
            for (var _i = 0, _b = __spreadArray(__spreadArray([], images, true), files, true); _i < _b.length; _i++) {
                var _c = _b[_i], name_1 = _c.name, contents = _c.contents;
                _this.push({
                    name: name_1,
                    contents: _this.convertContent(contents),
                });
            }
            if (_this.handleHTML) {
                _this.handleHTML(html);
            }
            if (pipeHTML) {
                _this.push({
                    name: htmlPath,
                    contents: _this.convertContent(html.join("\n")),
                });
            }
            callback(null);
        })
            .catch(callback);
    };
    FaviconStream.prototype.convertContent = function (contents) {
        var _a;
        return ((_a = this.options.emitBuffers) !== null && _a !== void 0 ? _a : true) && !Buffer.isBuffer(contents)
            ? Buffer.from(contents)
            : contents;
    };
    return FaviconStream;
}(stream_1.Transform));
function stream(options, handleHTML) {
    return new FaviconStream(options, handleHTML);
}
exports.stream = stream;
