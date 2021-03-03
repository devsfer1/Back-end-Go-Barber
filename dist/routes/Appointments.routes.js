"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var appointmentsRouter = express_1.Router();
// POST http://localhost:3333/appointments
appointmentsRouter.post('/', function (req, res) {
    return res.json({ message: 'Hello World' });
});
exports.default = appointmentsRouter;
