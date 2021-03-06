"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Exmemento is a memory storage getter, modelled on localStorage.getItem.
 * It takes an optional key to retrieve from memory. If no key is supplied, then '__default' is used.
 */
exports.name = 'exmemento';
exports.cost = 0;
exports.code = function (canon) { return function (key) {
    if (key === void 0) { key = 'memory.default'; }
    var magik = magikcraft.io;
    if (magik.durablePlayerMap.containsKey(key)) {
        return magik.durablePlayerMap.get(key);
    }
    return undefined;
}; };
