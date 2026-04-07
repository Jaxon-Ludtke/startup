const dns = require('dns');
dns.setServers(['8.8.8.8', '1.1.1.1']);

const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;

const client = new MongoClient(url);
const db = client.db('dealflow');
const userCollection = db.collection('user');
const scenarioCollection = db.collection('scenario');

(async function testConnection() {
  try {
    await db.command({ ping: 1 });
    console.log(`DB connected to ${config.hostname}`);
  } catch (ex) {
    console.log(`Connection failed to ${url} because ${ex.message}`);
    process.exit(1);
  }
})();

  function getUser(email) {
  return userCollection.findOne({ email });
}

function getUserByToken(token) {
  return userCollection.findOne({ token });
}

async function createUser(user) {
  await userCollection.insertOne(user);
}

async function updateUser(user) {
  await userCollection.updateOne({ email: user.email }, { $set: user });
}

async function getScenarios(email) {
  return scenarioCollection.find({ email }).sort({ _id: -1 }).toArray();
}

async function addScenario(scenario) {
  await scenarioCollection.insertOne(scenario);
}

async function deleteScenario(id, email) {
  return scenarioCollection.deleteOne({ id, email });
}

module.exports = {
  getUser,
  getUserByToken,
  createUser,
  updateUser,
  getScenarios,
  addScenario,
  deleteScenario,
};
