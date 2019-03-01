"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ApiClient = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _requestPromiseNative = require("request-promise-native");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ApiClient = exports.ApiClient = function () {
    function ApiClient() {
        _classCallCheck(this, ApiClient);
    }

    _createClass(ApiClient, [{
        key: "getTasks",
        value: function getTasks() {
            return new Promise(function (resolve, reject) {
                var options = {
                    method: "GET",
                    uri: "https://jsonplaceholder.typicode.com/todos/",
                    json: true
                };

                new _requestPromiseNative.Request(options).then(function (response) {
                    resolve(response);
                }).catch(function (error) {
                    reject(error);
                });
            });
        }
    }]);

    return ApiClient;
}();
//# sourceMappingURL=api-client.js.map