const path = require('path');
const fs = require('fs');
const { getNeo4jDriver } = require('./connection.js');

const runNeo4jScript = async () => {
  const session = await getNeo4jDriver();
  const script = fs.readFileSync(path.join(__dirname, './interests.cyp')).toString();
  try {
    await session.run(script);
    console.log('Interest script ran successfully for Neo4j');
  } catch (error) {
    console.log(`Interest script for Neo4j not executed successfully for Neo4j because --> ${error.message}`);
  }
};

module.exports.runNeo4jScript = runNeo4jScript;
