"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPlatform = void 0;
var android_js_1 = require("./android.js");
var appleIcon_js_1 = require("./appleIcon.js");
var appleStartup_js_1 = require("./appleStartup.js");
var favicons_js_1 = require("./favicons.js");
var windows_js_1 = require("./windows.js");
var yandex_js_1 = require("./yandex.js");
function getPlatform(name, options) {
    switch (name) {
        case "android":
            return new android_js_1.AndroidPlatform(options);
        case "appleIcon":
            return new appleIcon_js_1.AppleIconPlatform(options);
        case "appleStartup":
            return new appleStartup_js_1.AppleStartupPlatform(options);
        case "favicons":
            return new favicons_js_1.FaviconsPlatform(options);
        case "windows":
            return new windows_js_1.WindowsPlatform(options);
        case "yandex":
            return new yandex_js_1.YandexPlatform(options);
        default:
            throw new Error("Unsupported platform ".concat(name));
    }
}
exports.getPlatform = getPlatform;
