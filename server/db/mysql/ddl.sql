create database TERRABUZZ;
use TERRABUZZ;
CREATE TABLE `UserInformation` (
  `Handler` VARCHAR(40) NOT NULL,
  `Username` VARCHAR(40) NOT NULL,
  `Email` VARCHAR(45) NOT NULL,
  `Password` VARCHAR(100) NOT NULL,
  `Activities` VARCHAR(45) NULL,
  `Location` VARCHAR(45) NULL,
  `Instagram` VARCHAR(150) NULL,
  `Facebook` VARCHAR(150) NULL,
  `LinkedIn` VARCHAR(150) NULL,
  `Twitter` VARCHAR(150) NULL,
  `Website` VARCHAR(150) NULL,
  `Biography` VARCHAR(45) NULL,
  `JoinedWebsite` DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
  PRIMARY KEY (`Handler`),
  UNIQUE INDEX `EmailUNIQUE` (`Email` ASC)
);
CREATE TABLE `Connection` (
  `Followers` VARCHAR(40) NOT NULL,
  `Following` VARCHAR(40) NOT NULL,
  PRIMARY KEY (`Followers`, `Following`),
  CONSTRAINT `HandlerFollowersConnections` FOREIGN KEY (`Followers`) REFERENCES `UserInformation` (`Handler`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `HandlerFollowingConnections` FOREIGN KEY (`Following`) REFERENCES `UserInformation` (`Handler`) ON DELETE CASCADE ON UPDATE CASCADE
);
CREATE TABLE `Academics` (
  `Name` varchar(40) NOT NULL,
  `Handler` varchar(40) NOT NULL,
  `From` date DEFAULT NULL,
  `In` date DEFAULT NULL,
  `Type` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`Name`, `Handler`),
  CONSTRAINT `HandlerAcademics` FOREIGN KEY (`Handler`) REFERENCES `UserInformation` (`Handler`) ON DELETE CASCADE ON UPDATE CASCADE
);
CREATE TABLE `Organization` (
  `Name` VARCHAR(40) NOT NULL,
  `Handler` VARCHAR(40) NOT NULL,
  `Type` VARCHAR(45) NULL,
  PRIMARY KEY (`Name`, `Handler`),
  CONSTRAINT `HandlerOrganization` FOREIGN KEY (`Handler`) REFERENCES `UserInformation` (`Handler`) ON DELETE CASCADE ON UPDATE CASCADE
);
CREATE TABLE `Interest` (
  `Topic` VARCHAR(40) NOT NULL,
  `Handler` VARCHAR(40) NOT NULL,
  PRIMARY KEY (`Topic`, `Handler`),
  INDEX `Handleridx` (`Handler` ASC),
  CONSTRAINT `HandlerInterest` FOREIGN KEY (`Handler`) REFERENCES `UserInformation` (`Handler`) ON DELETE CASCADE ON UPDATE CASCADE
);