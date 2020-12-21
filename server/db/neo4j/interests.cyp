// Creating the database
CREATE DATABASE TERRABUZZ IF NOT EXISTS;

// Inserting the interests
CREATE (CSharp:Interest {topic: 'C#'});
CREATE (DotNET:Interest {topic: '.NET'});
CREATE (Azure:Interest {topic: 'Azure'});
CREATE (AWS:Interest {topic: 'AWS'});
CREATE (Tensorflow:Interest {topic: 'Tensorflow'});
CREATE (JavaScript:Interest {topic: 'JavaScript'});
CREATE (Node:Interest {topic: 'Node'});
CREATE (Philosophy:Interest {topic: 'Philosophy'});
CREATE (Food:Interest {topic: 'Food'});
CREATE (FAST:Interest {topic: 'FAST'});
CREATE (Web:Interest {topic: 'Web'});
CREATE (Cloud:Interest {topic: 'Cloud'});
CREATE (Humor:Interest {topic: 'Humor'});
CREATE (Football:Interest {topic: 'Football'});
CREATE (Karachi:Interest {topic: 'Karachi'});

// Inserting handles
CREATE (TashikMoin:Handle {handle: 'TashikMoin'});
CREATE (Saif:Handle {handle: 'Saif'});
CREATE (hassanzhd:Handle {handle: 'hassanzhd'});

// CONNECTING RELATIONSHIPS
// MySQL equivalent
// INSERT INTO `Interest` (`Topic`, `Handle`) VALUES ('C#', 'TashikMoin');
MATCH (Handle:Handle), (Topic:Interest)
WHERE Handle.handle = 'TashikMoin' AND Topic.topic = 'C#'
CREATE (Handle)-[:LIKES]->(Topic);

// MYSQL equivalent
// INSERT INTO `Interest` (`Topic`, `Handle`) VALUES ('.NET', 'TashikMoin');
MATCH (Handle:Handle), (Topic:Interest)
WHERE Handle.handle = 'TashikMoin' AND Topic.topic = '.NET'
CREATE (Handle)-[:LIKES]->(Topic);

// MySQL equivalent
// INSERT INTO `Interest` (`Topic`, `Handle`) VALUES ('Azure', 'TashikMoin');
MATCH (Handle:Handle), (Topic:Interest)
WHERE Handle.handle = 'TashikMoin' AND Topic.topic = 'Azure'
CREATE (Handle)-[:LIKES]->(Topic);

// MySQL equivalent
// INSERT INTO `Interest` (`Topic`, `Handle`) VALUES ('AWS', 'TashikMoin');
MATCH (Handle:Handle), (Topic:Interest)
WHERE Handle.handle = 'TashikMoin' AND Topic.topic = 'AWS'
CREATE (Handle)-[:LIKES]->(Topic);

// MySQL equivalent
// INSERT INTO `Interest` (`Topic`, `Handle`)VALUES ('Tensorflow', 'Saif');
MATCH (Handle:Handle), (Topic:Interest)
WHERE Handle.handle = 'Saif' AND Topic.topic = 'Tensorflow'
CREATE (Handle)-[:LIKES]->(Topic);

// MySQL equivalent
// INSERT INTO `Interest` (`Topic`, `Handle`) VALUES ('JavaScript', 'hassanzhd');
MATCH (Handle:Handle), (Topic:Interest)
WHERE Handle.handle = 'hassanzhd' AND Topic.topic = 'JavaScript'
CREATE (Handle)-[:LIKES]->(Topic);

// MySQL equivalent
// INSERT INTO `Interest` (`Topic`, `Handle`) VALUES ('Node', 'hassanzhd');
MATCH (Handle:Handle), (Topic:Interest)
WHERE Handle.handle = 'hassanzhd' AND Topic.topic = 'Node'
CREATE (Handle)-[:LIKES]->(Topic);

// MySQL equivalent
// INSERT INTO `Interest` (`Topic`, `Handle`)VALUES ('AWS', 'hassanzhd');
MATCH (Handle:Handle), (Topic:Interest)
WHERE Handle.handle = 'hassanzhd' AND Topic.topic = 'AWS'
CREATE (Handle)-[:LIKES]->(Topic);

// MySQL equivalent
// INSERT INTO `Interest` (`Topic`, `Handle`) VALUES ('AWS', 'Saif');
MATCH (Handle:Handle), (Topic:Interest)
WHERE Handle.handle = 'Saif' AND Topic.topic = 'AWS'
CREATE (Handle)-[:LIKES]->(Topic);

// MySQL equivalent
// INSERT INTO `Interest` (`Topic`, `Handle`) VALUES ('Tensorflow', 'TashikMoin');
MATCH (Handle:Handle), (Topic:Interest)
WHERE Handle.handle = 'TashikMoin' AND Topic.topic = 'Tensorflow'
CREATE (Handle)-[:LIKES]->(Topic);

// MySQL equivalent
// INSERT INTO `Interest` (`Topic`, `Handle`) VALUES ('Azure', 'hassanzhd');
MATCH (Handle:Handle), (Topic:Interest)
WHERE Handle.handle = 'hassanzhd' AND Topic.topic = 'Azure'
CREATE (Handle)-[:LIKES]->(Topic);
