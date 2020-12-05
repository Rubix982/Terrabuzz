const neo4j = require('neo4j-driver');

const driver = neo4j.driver('bolt://neo4j', neo4j.auth.basic('neo4j', `${process.env.PASSWORD}`));
const session = driver.session();

module.exports.session = session;
