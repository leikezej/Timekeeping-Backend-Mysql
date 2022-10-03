"use strict";

var _require = require("../middleware"),
    verifySignUp = _require.verifySignUp,
    userLogger = _require.userLogger;

var controller = require("../controllers/auth.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Headers", 'Access-Control-Allow-Origin: *', "x-access-token, Origin, Content-Type, Accept");
    next();
  });
  app.post("/api/auth/signup", [verifySignUp.checkDuplicateNameOrEmail, verifySignUp.checkRolesExisted, userLogger.getUserIp], controller.signup);
  app.post("/api/auth/signin", [userLogger.getUserIp, userLogger.getLoggedUser], controller.signin);
  app.get("/api/auth/loggedUser", controller.loggedUser);
  app.post("/api/auth/signout", controller.signout);
  app.post("/api/auth/logout", controller.logout);
  app.post("/api/auth/logouts", controller.logouts);
  app.post("/api/auth/refreshtoken", controller.refreshToken);
  app.post("/api/auth/forgotPassword", controller.forgotPassword);
  app.post("/api/auth/resetPassword", controller.resetPassword);
  app.post("/api/auth/submitOtp", controller.submitOtp);
  app.post("/api/auth/sendOtp", controller.sendOtp);
  app.post('/api/auth/send-otp', controller.sendOtp);
  app.post('/api/auth/submit-otp', controller.submitOtp);
};