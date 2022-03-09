"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultOptions = void 0;
exports.defaultOptions = {
    path: "/",
    appName: null,
    appShortName: null,
    appDescription: null,
    developerName: null,
    developerURL: null,
    dir: "auto",
    lang: "en-US",
    background: "#fff",
    theme_color: "#fff",
    appleStatusBarStyle: "black-translucent",
    display: "standalone",
    orientation: "any",
    start_url: "/?homescreen=1",
    version: "1.0",
    pixel_art: false,
    loadManifestWithCredentials: false,
    manifestRelativePaths: false,
    manifestMaskable: false,
    preferRelatedApplications: false,
    icons: {
        android: true,
        appleIcon: true,
        appleStartup: true,
        favicons: true,
        windows: true,
        yandex: true,
    },
    output: {
        images: true,
        files: true,
        html: true,
    },
};
