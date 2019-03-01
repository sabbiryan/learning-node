// const express = require("express");

// var app = express();

// app.get("/", (req, res) => res.send("Hello world"));

// app.listen(3000, () => console.log("Running on port 3000"));

import { Config } from "./config/config";
import { Server } from "./servers/server";
import { UsersRouter } from "./routers/users-router";
import { UserService } from "./services/user-service";

var config = new Config()
    .setPort(3000)
    .addTransient("UserService", UserService);

new Server(config)
    .addRouter("/api/users", new UsersRouter(config))
    .start();