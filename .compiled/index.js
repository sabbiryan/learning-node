"use strict";

var _apiClient = require("./api-client");

var apiClinet = new _apiClient.ApiClient();

apiClinet.getTasks().then(function (data) {
    console.log("I got back " + data.length + " rows");
}).catch(function (error) {
    console.log("Something went horribly wrong: " + error);
});
//# sourceMappingURL=index.js.map