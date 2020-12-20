const neo4j = require('neo4j-driver');

const getNeo4jDriver = async () => {
  try {
    const driver = await neo4j.driver('bolt://localhost:7687', neo4j.auth.basic('neo4j', `${process.env.PASSWORD}`));
    const session = await driver.rxSession({
      database: 'neo4j - default',
      defaultAccessMode: neo4j.session.WRITE,
    });
    return session;
  } catch (error) {
    throw new Error(`Unable to setup connection to Neo4j, due to error "${error.message}"`);
  }
};

module.exports.getNeo4jDriver = getNeo4jDriver;
