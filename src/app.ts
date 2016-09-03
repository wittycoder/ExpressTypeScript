/// <reference path="../typings/index.d.ts" />
import express = require('express');
import {Server} from './server';

let app = express();
var server = new Server(app, 3000);
server.Run();