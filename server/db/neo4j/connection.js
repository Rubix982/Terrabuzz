const neo4j = require('neo4j-driver');

const getNeo4jDriver = () => {
  try {
    return neo4j.driver('neo4j://localhost:7687',
      neo4j.auth.basic('neo4j', `${process.env.PASSWORD}`));
  } catch (error) {
    throw new Error(`Unable to setup connection to Neo4j, due to error "${error.message}"`);
  }
};

module.exports.getNeo4jDriver = getNeo4jDriver;
