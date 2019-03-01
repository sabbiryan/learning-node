const Config = require('../../.compiled/config/config').Config;
const UsersRouter = require('../../.compiled/routers/users-router').UsersRouter;
const UserService = require("../../.compiled/services/user-service").UserService;

describe("UsersRouter", () => {
    it("throws error if config not defined", () => {
        expect(() => new UsersRouter(null)).toThrow(new Error("Config not defined"));
    })

    it("calls config.getUserService", () => {
        var config = new Config();
        spyOn(config, "getUserService").and.returnValue(new UserService());
        var router = new UsersRouter(config);
        expect(config.getUserService).toHaveBeenCalledTimes(1);
    })
})