// const path = require('path');
// const fs = require('fs');
const neo4j = require('neo4j-driver');
// const { getNeo4jDriver } = require('./connection.js');

const runNeo4jScript = async () => {
  // const rxDriver = getNeo4jDriver();
  // const rxSession = rxDriver.rxSession();
  // const script = fs.readFileSync(path.join(__dirname, './interests.cyp')).toString();
  // // let writeTxResultPromise;
  // try {
  //     await rxSession.writeTransaction(async (txc) => {
  //     var result = await txc.run(script)
  //     console.log(result);
  //   });
  //   // await rxSession
  //   //   .writeTransaction(txc =>
  //   //     txc
  //   //       .run(`CREATE (TashikMoin:Handle {handle: 'TashikMoin'});`)
  //   //       .then(() => { console.log('Interest script ran successfully for Neo4j'); })
  //   //   )
  //   //   .subscribe({
  //   //     next: data => console.log(data),
  //   //     complete: () => console.log('completed'),
  //   //     error: error => console.log(error)
  //   //   })
  //   await rxDriver.close();
  // } catch (error) {
  //   console.log(`Interest script for Neo4j not
  // executed successfully for Neo4j because --> ${error.message}`);
  // }

  const driver = neo4j.driver('bolt://localhost',
    neo4j.auth.basic('neo4j', `${process.env.PASSWORD}`), {
      encrypted: 'ENCRYPTION_OFF',
      trust: 'TRUST_ALL_CERTIFICATES',
    });
  const session = driver.session();
  const personName = 'Alice';

  try {
    const result = await session.run(
      'CREATE (a:Person {name: $name}) RETURN a',
      { name: personName },
    );

    const singleRecord = result.records[0];
    const node = singleRecord.get(0);

    console.log(node.properties.name);
  } finally {
    await session.close();
  }
  // on application exit
  await driver.close();
};

module.exports.runNeo4jScript = runNeo4jScript;
