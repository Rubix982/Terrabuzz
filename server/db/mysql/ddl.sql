create database TERRABUZZ;
use TERRABUZZ;  
CREATE TABLE `userInformation` (
  `handler` VARCHAR(40) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `activities` VARCHAR(45) NULL,
  `location` VARCHAR(45) NULL,
  `instagram` VARCHAR(45) NULL,
  `facebook` VARCHAR(45) NULL,
  `linkedIn` VARCHAR(45) NULL,
  `twitter` VARCHAR(45) NULL,
  `website` VARCHAR(45) NULL,
  `biography` VARCHAR(45) NULL,
  `joinedWebsite` DATETIME NULL,
  PRIMARY KEY (`handler`),
  UNIQUE INDEX `Email_UNIQUE` (`email` ASC)
);

CREATE TABLE `connection` (
  `followers` VARCHAR(40) NOT NULL,
  `following` VARCHAR(40) NOT NULL,
  PRIMARY KEY (`followers`, `following`),
  CONSTRAINT `handlerFollowersConnections` FOREIGN KEY (`followers`) REFERENCES `userInformation` (`handler`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `HandlerFollowingConnections` FOREIGN KEY (`following`) REFERENCES `userInformation` (`handler`) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE `academics` (
  `name` varchar(40) NOT NULL,
  `handler` varchar(40) NOT NULL,
  `from` date DEFAULT NULL,
  `in` date DEFAULT NULL,
  `type` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`name`, `handler`),
  CONSTRAINT `handlerAcademics` FOREIGN KEY (`handler`) REFERENCES `userInformation` (`handler`) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE `organization` (
  `name` VARCHAR(40) NOT NULL,
  `handler` VARCHAR(40) NOT NULL,
  `type` VARCHAR(45) NULL,
  PRIMARY KEY (`name`, `handler`),
  CONSTRAINT `handlerOrganization` FOREIGN KEY (`Handler`) REFERENCES `userInformation` (`handler`) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE `interest` (
  `topic` VARCHAR(40) NOT NULL,
  `handler` VARCHAR(40) NOT NULL,
  PRIMARY KEY (`topic`, `handler`),
  INDEX `Handler_idx` (`handler` ASC),
  CONSTRAINT `handlerInterest` FOREIGN KEY (`handler`) REFERENCES `userInformation` (`handler`) ON DELETE CASCADE ON UPDATE CASCADE
);