"use strict";
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
exports.toIco = void 0;
var HEADER_SIZE = 6;
var DIRECTORY_SIZE = 16;
var COLOR_MODE = 0;
var BITMAP_SIZE = 40;
function createHeader(n) {
    var buf = Buffer.alloc(HEADER_SIZE);
    buf.writeUInt16LE(0, 0);
    buf.writeUInt16LE(1, 2);
    buf.writeUInt16LE(n, 4);
    return buf;
}
function createDirectory(image, offset) {
    var buf = Buffer.alloc(DIRECTORY_SIZE);
    var _a = image.info, width = _a.width, height = _a.height;
    var size = width * height * 4 + BITMAP_SIZE;
    var bpp = 32;
    buf.writeUInt8(width === 256 ? 0 : width, 0);
    buf.writeUInt8(height === 256 ? 0 : height, 1);
    buf.writeUInt8(0, 2);
    buf.writeUInt8(0, 3);
    buf.writeUInt16LE(1, 4);
    buf.writeUInt16LE(bpp, 6);
    buf.writeUInt32LE(size, 8);
    buf.writeUInt32LE(offset, 12);
    return buf;
}
function createBitmap(image, compression) {
    var buf = Buffer.alloc(BITMAP_SIZE);
    var _a = image.info, width = _a.width, height = _a.height;
    buf.writeUInt32LE(BITMAP_SIZE, 0);
    buf.writeInt32LE(width, 4);
    buf.writeInt32LE(height * 2, 8);
    buf.writeUInt16LE(1, 12);
    buf.writeUInt16LE(32, 14);
    buf.writeUInt32LE(compression, 16);
    buf.writeUInt32LE(width * height, 20);
    buf.writeInt32LE(0, 24);
    buf.writeInt32LE(0, 28);
    buf.writeUInt32LE(0, 32);
    buf.writeUInt32LE(0, 36);
    return buf;
}
function createDib(image) {
    var _a = image.info, width = _a.width, height = _a.height;
    var imageData = image.data;
    var buf = Buffer.alloc(width * height * 4);
    for (var y = 0; y < height; ++y) {
        for (var x = 0; x < height; ++x) {
            var offset = (y * width + x) * 4;
            var r = imageData.readUInt8(offset);
            var g = imageData.readUInt8(offset + 1);
            var b = imageData.readUInt8(offset + 2);
            var a = imageData.readUInt8(offset + 3);
            var pos = (height - y - 1) * width + x;
            buf.writeUInt8(b, pos * 4);
            buf.writeUInt8(g, pos * 4 + 1);
            buf.writeUInt8(r, pos * 4 + 2);
            buf.writeUInt8(a, pos * 4 + 3);
        }
    }
    return buf;
}
function toIco(images) {
    var header = createHeader(images.length);
    var arr = [header];
    var offset = HEADER_SIZE + DIRECTORY_SIZE * images.length;
    var bitmaps = images.map(function (image) {
        var header = createBitmap(image, COLOR_MODE);
        var dib = createDib(image);
        return Buffer.concat([header, dib]);
    });
    for (var i = 0; i < images.length; ++i) {
        var image = images[i];
        var bitmap = bitmaps[i];
        var dir = createDirectory(image, offset);
        arr.push(dir);
        offset += bitmap.length;
    }
    arr = __spreadArray(__spreadArray([], arr, true), bitmaps, true);
    return Buffer.concat(arr);
}
exports.toIco = toIco;
