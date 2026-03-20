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

apiRouter.post('/auth/create', async (req, res) => {
  const existingUser = await findUser('email', req.body.email);

  if (existingUser) {
    res.status(409).send({ msg: 'That email is already taken' });
    return;
  }

  const newUser = await createUser(req.body.email, req.body.password);
  setAuthCookie(res, newUser.token);
  res.send({ email: newUser.email });
});

apiRouter.post('/auth/login', async (req, res) => {
  const user = await findUser('email', req.body.email);

  if (!user) {
    res.status(401).send({ msg: 'No account found with that email' });
    return;
  }

  const passwordMatches = await bcrypt.compare(req.body.password, user.password);

  if (!passwordMatches) {
    res.status(401).send({ msg: 'Wrong password' });
    return;
  }

  user.token = uuid.v4();
  setAuthCookie(res, user.token);
  res.send({ email: user.email });
});

apiRouter.delete('/auth/logout', async (req, res) => {
  const user = await findUser('token', req.cookies[authCookieName]);

  if (user) {
    delete user.token;
  }

  res.clearCookie(authCookieName);
  res.status(204).end();
});

