"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var a = "Bilal Riaz";
console.log(a);
var app = /** @class */ (function () {
    function app() {
    }
    app.prototype.test = function () {
        console.log("Type script main class create ki hai");
    };
    return app;
}());
var obj = new app();
obj.test();
