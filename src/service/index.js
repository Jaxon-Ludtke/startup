const express = require('express');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const uuid = require('uuid');

const app = express();
const port = 4000;
const authCookieName = 'token';

let users = [];
let scenarios = [];

app.use(express.json());

app.use(cookieParser());

app.use(express.static('public'));

const apiRouter = express.Router();
app.use('/api', apiRouter);