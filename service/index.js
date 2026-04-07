const express = require('express');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const uuid = require('uuid');
const DB = require('./database.js')

const app = express();
const port = 4000;
const authCookieName = 'token';

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

async function requireLogin(req, res, next) {
  const user = await findUser('token', req.cookies[authCookieName]);

  if (!user) {
    res.status(401).send({ msg: 'You need to be logged in to do that' });
    return;
  }

  req.user = user;
  next();
}


apiRouter.get('/auth/check', requireLogin, (req, res) => {
  res.send({ email: req.user.email });
});

apiRouter.get('/scenarios', requireLogin, (req, res) => {
  const myScenarios = scenarios.filter(s => s.email === req.user.email);
  res.send(myScenarios);
});

apiRouter.post('/scenario', requireLogin, (req, res) => {
  const newScenario = {
    id: uuid.v4(), 
    email: req.user.email, 
    name: req.body.name,
    cashflow: req.body.cashflow,
    cashinvested: req.body.cashinvested,
    coc: req.body.coc,
  };

  scenarios.unshift(newScenario); 
  res.send(newScenario);
});

apiRouter.delete('/scenario/:id', requireLogin, (req, res) => {
  const index = scenarios.findIndex(s => s.id === req.params.id && s.email === req.user.email);
  if (index === -1) {
    res.status(404).send({ msg: 'Scenario not found' });
    return;
  }

  scenarios.splice(index, 1);
  res.status(204).end();
});

app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

async function createUser(email, password) {
  const hashedPassword = await bcrypt.hash(password, 10);

  const user = {
    email: email,
    password: hashedPassword, 
    token: uuid.v4(), 
  };

  users.push(user);
  return user;
}

async function findUser(field, value) {
  if (!value) return null;
  return users.find(u => u[field] === value);
}

function setAuthCookie(res, token) {
  res.cookie(authCookieName, token, {
    secure: true,
    httpOnly: true,
    sameSite: 'strict',
  });
}

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
