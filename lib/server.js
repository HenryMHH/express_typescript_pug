"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = express_1.default();
var index_1 = __importDefault(require("./route/index"));
var login_1 = __importDefault(require("./route/login"));
app.set('views', 'src/views');
app.set('view engine', 'pug');
app.use('/', index_1.default);
app.use('/login', login_1.default);
app.listen('3333', function () { return console.log('ok'); });
