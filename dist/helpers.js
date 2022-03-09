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
exports.Images = exports.relativeTo = exports.sourceImages = exports.asString = exports.filterKeys = exports.mapValues = void 0;
var path = require("path");
var fs = require("fs");
var sharp_1 = require("sharp");
var ico_js_1 = require("./ico.js");
var svgtool_js_1 = require("./svgtool.js");
function arrayComparator(a, b) {
    var aArr = [a].flat(Infinity);
    var bArr = [b].flat(Infinity);
    for (var i = 0; i < Math.max(aArr.length, bArr.length); ++i) {
        if (i >= aArr.length)
            return -1;
        if (i >= bArr.length)
            return 1;
        if (aArr[i] !== bArr[i]) {
            return aArr[i] < bArr[i] ? -1 : 1;
        }
    }
    return 0;
}
function minBy(array, comparator) {
    return array.reduce(function (acc, cur) { return (comparator(acc, cur) < 0 ? acc : cur); });
}
function minByKey(array, keyFn) {
    return minBy(array, function (a, b) { return arrayComparator(keyFn(a), keyFn(b)); });
}
function mapValues(dict, mapper) {
    return Object.fromEntries(Object.entries(dict).map(function (_a) {
        var key = _a[0], value = _a[1];
        return [key, mapper(value, key)];
    }));
}
exports.mapValues = mapValues;
function filterKeys(dict, predicate) {
    return Object.fromEntries(Object.entries(dict).filter(function (pair) { return predicate(pair[0]); }));
}
exports.filterKeys = filterKeys;
function asString(arg) {
    return typeof arg === "string" || arg instanceof String
        ? arg.toString()
        : undefined;
}
exports.asString = asString;
function sourceImages(src) {
    return __awaiter(this, void 0, void 0, function () {
        var error_1, buffer, images;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!Buffer.isBuffer(src)) return [3 /*break*/, 5];
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    _a = {
                        data: src
                    };
                    return [4 /*yield*/, (0, sharp_1.default)(src).metadata()];
                case 2: return [2 /*return*/, [
                        (_a.metadata = _b.sent(),
                            _a)
                    ]];
                case 3:
                    error_1 = _b.sent();
                    return [2 /*return*/, Promise.reject(new Error("Invalid image buffer"))];
                case 4: return [3 /*break*/, 11];
                case 5:
                    if (!(typeof src === "string")) return [3 /*break*/, 8];
                    return [4 /*yield*/, fs.promises.readFile(src)];
                case 6:
                    buffer = _b.sent();
                    return [4 /*yield*/, sourceImages(buffer)];
                case 7: return [2 /*return*/, _b.sent()];
                case 8:
                    if (!(Array.isArray(src) && !src.some(Array.isArray))) return [3 /*break*/, 10];
                    if (!src.length) {
                        throw new Error("No source provided");
                    }
                    return [4 /*yield*/, Promise.all(src.map(sourceImages))];
                case 9:
                    images = _b.sent();
                    return [2 /*return*/, images.flat()];
                case 10: throw new Error("Invalid source type provided");
                case 11: return [2 /*return*/];
            }
        });
    });
}
exports.sourceImages = sourceImages;
function flattenIconOptions(iconOptions) {
    return iconOptions.sizes.map(function (size) {
        var _a, _b;
        return (__assign(__assign({}, size), { offset: (_a = iconOptions.offset) !== null && _a !== void 0 ? _a : 0, pixelArt: (_b = iconOptions.pixelArt) !== null && _b !== void 0 ? _b : false, background: asString(iconOptions.background), transparent: iconOptions.transparent, rotate: iconOptions.rotate }));
    });
}
function relativeTo(base, path) {
    if (!base) {
        return path;
    }
    var directory = base.endsWith("/") ? base : "".concat(base, "/");
    var url = new URL(path, new URL(directory, "resolve://"));
    return url.protocol === "resolve:" ? url.pathname : url.toString();
}
exports.relativeTo = relativeTo;
var Images = /** @class */ (function () {
    function Images() {
    }
    Images.prototype.bestSource = function (sourceset, width, height) {
        var sideSize = Math.max(width, height);
        return minByKey(sourceset, function (icon) {
            var iconSideSize = Math.max(icon.metadata.width, icon.metadata.height);
            return [
                icon.metadata.format === "svg" ? 0 : 1,
                iconSideSize >= sideSize ? 0 : 1,
                Math.abs(iconSideSize - sideSize), // prefer closest size
            ];
        });
    };
    Images.prototype.resize = function (source, width, height, pixelArt) {
        return __awaiter(this, void 0, void 0, function () {
            var options;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(source.metadata.format === "svg")) return [3 /*break*/, 2];
                        options = {
                            density: (0, svgtool_js_1.svgDensity)(source.metadata, width, height),
                        };
                        return [4 /*yield*/, (0, sharp_1.default)(source.data, options)
                                .resize({
                                width: width,
                                height: height,
                                fit: sharp_1.default.fit.contain,
                                background: "#00000000",
                            })
                                .toBuffer()];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2: return [4 /*yield*/, (0, sharp_1.default)(source.data)
                            .ensureAlpha()
                            .resize({
                            width: width,
                            height: height,
                            fit: sharp_1.default.fit.contain,
                            background: "#00000000",
                            kernel: pixelArt &&
                                width >= source.metadata.width &&
                                height >= source.metadata.height
                                ? "nearest"
                                : "lanczos3",
                        })
                            .toBuffer()];
                    case 3: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Images.prototype.createBlankImage = function (width, height, background) {
        var transparent = !background || background === "transparent";
        var image = (0, sharp_1.default)({
            create: {
                width: width,
                height: height,
                channels: transparent ? 4 : 3,
                background: transparent ? "#00000000" : background,
            },
        });
        if (transparent) {
            image = image.ensureAlpha();
        }
        return image;
    };
    Images.prototype.createPlaneFavicon = function (sourceset, options, name, raw) {
        if (raw === void 0) { raw = false; }
        return __awaiter(this, void 0, void 0, function () {
            var offset, width, height, source, image, pipeline, degrees, contents, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        offset = Math.round((Math.max(options.width, options.height) * options.offset) / 100) || 0;
                        width = options.width - offset * 2;
                        height = options.height - offset * 2;
                        source = this.bestSource(sourceset, width, height);
                        return [4 /*yield*/, this.resize(source, width, height, options.pixelArt)];
                    case 1:
                        image = _b.sent();
                        pipeline = this.createBlankImage(options.width, options.height, options.background).composite([{ input: image, left: offset, top: offset }]);
                        if (options.rotate) {
                            degrees = 90;
                            pipeline = pipeline.rotate(degrees);
                        }
                        if (!raw) return [3 /*break*/, 3];
                        return [4 /*yield*/, pipeline
                                .toColorspace("srgb")
                                .raw({ depth: "uchar" })
                                .toBuffer({ resolveWithObject: true })];
                    case 2:
                        _a = _b.sent();
                        return [3 /*break*/, 5];
                    case 3: return [4 /*yield*/, pipeline.png().toBuffer()];
                    case 4:
                        _a = _b.sent();
                        _b.label = 5;
                    case 5:
                        contents = _a;
                        return [2 /*return*/, { name: name, contents: contents }];
                }
            });
        });
    };
    Images.prototype.createFavicon = function (sourceset, name, iconOptions) {
        return __awaiter(this, void 0, void 0, function () {
            var properties, images, contents;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        properties = flattenIconOptions(iconOptions);
                        if (!(path.extname(name) === ".ico" || properties.length !== 1)) return [3 /*break*/, 2];
                        return [4 /*yield*/, Promise.all(properties.map(function (props) {
                                return _this.createPlaneFavicon(sourceset, props, "".concat(props.width, "x").concat(props.height, ".rawdata"), true);
                            }))];
                    case 1:
                        images = _a.sent();
                        contents = (0, ico_js_1.toIco)(images.map(function (image) { return image.contents; }));
                        return [2 /*return*/, {
                                name: name,
                                contents: contents,
                            }];
                    case 2: return [4 /*yield*/, this.createPlaneFavicon(sourceset, properties[0], name, false)];
                    case 3: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return Images;
}());
exports.Images = Images;
