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
exports.AndroidPlatform = void 0;
var escape_html_1 = require("escape-html");
var icons_js_1 = require("../config/icons.js");
var helpers_js_1 = require("../helpers.js");
var base_js_1 = require("./base.js");
var ICONS_OPTIONS = {
    "android-chrome-36x36.png": (0, icons_js_1.transparentIcon)(36),
    "android-chrome-48x48.png": (0, icons_js_1.transparentIcon)(48),
    "android-chrome-72x72.png": (0, icons_js_1.transparentIcon)(72),
    "android-chrome-96x96.png": (0, icons_js_1.transparentIcon)(96),
    "android-chrome-144x144.png": (0, icons_js_1.transparentIcon)(144),
    "android-chrome-192x192.png": (0, icons_js_1.transparentIcon)(192),
    "android-chrome-256x256.png": (0, icons_js_1.transparentIcon)(256),
    "android-chrome-384x384.png": (0, icons_js_1.transparentIcon)(384),
    "android-chrome-512x512.png": (0, icons_js_1.transparentIcon)(512),
};
var ICONS_OPTIONS_MASKABLE = {
    "android-chrome-maskable-36x36.png": (0, icons_js_1.maskable)((0, icons_js_1.transparentIcon)(36)),
    "android-chrome-maskable-48x48.png": (0, icons_js_1.maskable)((0, icons_js_1.transparentIcon)(48)),
    "android-chrome-maskable-72x72.png": (0, icons_js_1.maskable)((0, icons_js_1.transparentIcon)(72)),
    "android-chrome-maskable-96x96.png": (0, icons_js_1.maskable)((0, icons_js_1.transparentIcon)(96)),
    "android-chrome-maskable-144x144.png": (0, icons_js_1.maskable)((0, icons_js_1.transparentIcon)(144)),
    "android-chrome-maskable-192x192.png": (0, icons_js_1.maskable)((0, icons_js_1.transparentIcon)(192)),
    "android-chrome-maskable-256x256.png": (0, icons_js_1.maskable)((0, icons_js_1.transparentIcon)(256)),
    "android-chrome-maskable-384x384.png": (0, icons_js_1.maskable)((0, icons_js_1.transparentIcon)(384)),
    "android-chrome-maskable-512x512.png": (0, icons_js_1.maskable)((0, icons_js_1.transparentIcon)(512)),
};
var SHORTCUT_ICONS_OPTIONS = {
    "36x36.png": (0, icons_js_1.transparentIcon)(36),
    "48x48.png": (0, icons_js_1.transparentIcon)(48),
    "72x72.png": (0, icons_js_1.transparentIcon)(72),
    "96x96.png": (0, icons_js_1.transparentIcon)(96),
    "144x144.png": (0, icons_js_1.transparentIcon)(144),
    "192x192.png": (0, icons_js_1.transparentIcon)(192),
};
var AndroidPlatform = /** @class */ (function (_super) {
    __extends(AndroidPlatform, _super);
    function AndroidPlatform(options) {
        return _super.call(this, options, (0, base_js_1.uniformIconOptions)(options, options.icons.android, ICONS_OPTIONS)) || this;
    }
    AndroidPlatform.prototype.createImages = function (sourceset) {
        return __awaiter(this, void 0, void 0, function () {
            var images, icons, maskableSourceset_1, maskable_1, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        images = new helpers_js_1.Images();
                        return [4 /*yield*/, Promise.all(Object.entries(this.iconOptions).map(function (_a) {
                                var iconName = _a[0], iconOption = _a[1];
                                return images.createFavicon(sourceset, iconName, iconOption);
                            }))];
                    case 1:
                        icons = _b.sent();
                        if (!(this.options.manifestMaskable &&
                            typeof this.options.manifestMaskable !== "boolean")) return [3 /*break*/, 4];
                        return [4 /*yield*/, (0, helpers_js_1.sourceImages)(this.options.manifestMaskable)];
                    case 2:
                        maskableSourceset_1 = _b.sent();
                        return [4 /*yield*/, Promise.all(Object.entries(ICONS_OPTIONS_MASKABLE).map(function (_a) {
                                var iconName = _a[0], iconOption = _a[1];
                                return images.createFavicon(maskableSourceset_1, iconName, iconOption);
                            }))];
                    case 3:
                        maskable_1 = _b.sent();
                        icons = __spreadArray(__spreadArray([], icons, true), maskable_1, true);
                        _b.label = 4;
                    case 4:
                        if (!(Array.isArray(this.options.shortcuts) &&
                            this.options.shortcuts.length > 0)) return [3 /*break*/, 6];
                        _a = [__spreadArray([], icons, true)];
                        return [4 /*yield*/, this.shortcutIcons()];
                    case 5:
                        icons = __spreadArray.apply(void 0, _a.concat([(_b.sent()), true]));
                        _b.label = 6;
                    case 6: return [2 /*return*/, icons];
                }
            });
        });
    };
    AndroidPlatform.prototype.createFiles = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, [this.manifest()]];
            });
        });
    };
    AndroidPlatform.prototype.createHtml = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                // prettier-ignore
                return [2 /*return*/, [
                        this.options.loadManifestWithCredentials
                            ? "<link rel=\"manifest\" href=\"".concat(this.relative(this.manifestFileName()), "\" crossOrigin=\"use-credentials\">")
                            : "<link rel=\"manifest\" href=\"".concat(this.relative(this.manifestFileName()), "\">"),
                        "<meta name=\"mobile-web-app-capable\" content=\"yes\">",
                        "<meta name=\"theme-color\" content=\"".concat(this.options.theme_color || this.options.background, "\">"),
                        this.options.appName
                            ? "<meta name=\"application-name\" content=\"".concat((0, escape_html_1.default)(this.options.appName), "\">")
                            : "<meta name=\"application-name\">",
                    ]];
            });
        });
    };
    AndroidPlatform.prototype.shortcutIcons = function () {
        return __awaiter(this, void 0, void 0, function () {
            var images, icons;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        images = new helpers_js_1.Images();
                        return [4 /*yield*/, Promise.all(this.options.shortcuts.map(function (shortcut, index) { return __awaiter(_this, void 0, void 0, function () {
                                var shortcutSourceset;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            if (!shortcut.name || !shortcut.url || !shortcut.icon)
                                                return [2 /*return*/, null];
                                            return [4 /*yield*/, (0, helpers_js_1.sourceImages)(shortcut.icon)];
                                        case 1:
                                            shortcutSourceset = _a.sent();
                                            return [2 /*return*/, Promise.all(Object.entries(SHORTCUT_ICONS_OPTIONS).map(function (_a) {
                                                    var shortcutName = _a[0], option = _a[1];
                                                    return images.createFavicon(shortcutSourceset, "shortcut".concat(index + 1, "-").concat(shortcutName), option);
                                                }))];
                                    }
                                });
                            }); }))];
                    case 1:
                        icons = _a.sent();
                        return [2 /*return*/, icons.flat()];
                }
            });
        });
    };
    AndroidPlatform.prototype.manifestFileName = function () {
        var _a, _b, _c;
        return ((_c = (_b = (_a = this.options.files) === null || _a === void 0 ? void 0 : _a.android) === null || _b === void 0 ? void 0 : _b.manifestFileName) !== null && _c !== void 0 ? _c : "manifest.webmanifest");
    };
    AndroidPlatform.prototype.manifest = function () {
        var options = this.options;
        var basePath = options.manifestRelativePaths ? null : options.path;
        var properties = {
            name: options.appName,
            short_name: options.appShortName || options.appName,
            description: options.appDescription,
            dir: options.dir,
            lang: options.lang,
            display: options.display,
            orientation: options.orientation,
            scope: options.scope,
            start_url: options.start_url,
            background_color: options.background,
            theme_color: options.theme_color,
        };
        // Defaults to false, so omit the value https://developer.mozilla.org/en-US/docs/Web/Manifest/prefer_related_applications
        if (options.preferRelatedApplications) {
            properties.prefer_related_applications =
                options.preferRelatedApplications;
        }
        // Only include related_applications if a lengthy array is provided.
        if (Array.isArray(options.relatedApplications) &&
            options.relatedApplications.length > 0) {
            properties.related_applications = options.relatedApplications;
        }
        var icons = this.iconOptions;
        // If manifestMaskable is set but is not a boolean
        // assume a file (or an array) is passed, and we should link
        // the generated files with maskable as purpose.
        if (options.manifestMaskable &&
            typeof options.manifestMaskable !== "boolean") {
            icons = __assign(__assign({}, icons), ICONS_OPTIONS_MASKABLE);
        }
        var defaultPurpose = options.manifestMaskable === true ? "any maskable" : "any";
        properties.icons = Object.entries(icons).map(function (_a) {
            var _b;
            var name = _a[0], iconOptions = _a[1];
            var _c = iconOptions.sizes[0], width = _c.width, height = _c.height;
            return {
                src: (0, helpers_js_1.relativeTo)(basePath, name),
                sizes: "".concat(width, "x").concat(height),
                type: "image/png",
                purpose: (_b = iconOptions.purpose) !== null && _b !== void 0 ? _b : defaultPurpose,
            };
        });
        if (Array.isArray(options.shortcuts) && options.shortcuts.length > 0) {
            properties.shortcuts = this.manifestShortcuts(basePath);
        }
        return {
            name: this.manifestFileName(),
            contents: JSON.stringify(properties, null, 2),
        };
    };
    AndroidPlatform.prototype.manifestShortcuts = function (basePath) {
        return this.options.shortcuts
            .map(function (shortcut, index) {
            if (!shortcut.name || !shortcut.url)
                return null; // skip if required name or url missing
            return {
                name: shortcut.name,
                short_name: shortcut.short_name || shortcut.name,
                description: shortcut.description,
                url: shortcut.url,
                icons: shortcut.icon
                    ? Object.entries(SHORTCUT_ICONS_OPTIONS).map(function (_a) {
                        var shortcutName = _a[0], option = _a[1];
                        var _b = option.sizes[0], width = _b.width, height = _b.height;
                        return {
                            src: (0, helpers_js_1.relativeTo)(basePath, "shortcut".concat(index + 1, "-").concat(shortcutName)),
                            sizes: "".concat(width, "x").concat(height),
                            type: "image/png",
                        };
                    })
                    : undefined,
            };
        })
            .filter(function (x) { return x !== null; });
    };
    return AndroidPlatform;
}(base_js_1.Platform));
exports.AndroidPlatform = AndroidPlatform;
