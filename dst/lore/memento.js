"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.name = 'memento';
exports.cost = 0;
exports.undecorated = true;
exports.code = function (canon) {
    var MSG = canon.MSG;
    var magik = magikcraft.io;
    var defaultKey = 'memory.default';
    function getItem(key) {
        if (key === void 0) { key = defaultKey; }
        if (magik.durablePlayerMap.containsKey(key)) {
            return magik.durablePlayerMap.get(key);
        }
        else {
            return undefined;
        }
    }
    function _setItem(key, value) {
        if (!value) {
            value = key;
            key = defaultKey;
        }
        magik.durablePlayerMap.put(key, value);
        if (value instanceof Java.type("org.bukkit.Location")) {
            canon.displayLocalMsg("I remembered this place as " + key);
        }
        else {
            canon.displayLocalMsg("I remembered " + value + " as " + key);
        }
    }
    var _localStorage = _setItem;
    // What is this madness? 100% backward-compatibility.
    // The exported object has the same signature as the old memento, and now also
    // has setItem and getItem methods.
    _localStorage.setItem = _setItem;
    _localStorage.getItem = getItem;
    return _localStorage;
};
