CREATE DATABASE TERRABUZZ;
USE TERRABUZZ;
CREATE TABLE `UserInformation` (
  `Handle` VARCHAR(40) NOT NULL,
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
  `ProfilePicture` VARCHAR(15) DEFAULT 'boy(3).svg',
  `JoinedWebsite` DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
  PRIMARY KEY (`Handle`),
  UNIQUE INDEX `EmailUNIQUE` (`Email` ASC)
);
CREATE TABLE `Connection` (
  `Followers` VARCHAR(40) NOT NULL,
  `Following` VARCHAR(40) NOT NULL,
  PRIMARY KEY (`Followers`, `Following`),
  CONSTRAINT `HandleFollowersConnections` FOREIGN KEY (`Followers`) REFERENCES `UserInformation` (`Handle`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `HandleFollowingConnections` FOREIGN KEY (`Following`) REFERENCES `UserInformation` (`Handle`) ON DELETE CASCADE ON UPDATE CASCADE
);
CREATE TABLE `Academics` (
  `Name` varchar(40) NOT NULL,
  `Handle` varchar(40) NOT NULL,
  `From` date DEFAULT NULL,
  `In` date DEFAULT NULL,
  `Type` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`Name`, `Handle`),
  CONSTRAINT `HandleAcademics` FOREIGN KEY (`Handle`) REFERENCES `UserInformation` (`Handle`) ON DELETE CASCADE ON UPDATE CASCADE
);
CREATE TABLE `Organization` (
  `Name` VARCHAR(40) NOT NULL,
  `Handle` VARCHAR(40) NOT NULL,
  `Type` VARCHAR(45) NULL,
  PRIMARY KEY (`Name`, `Handle`),
  CONSTRAINT `HandleOrganization` FOREIGN KEY (`Handle`) REFERENCES `UserInformation` (`Handle`) ON DELETE CASCADE ON UPDATE CASCADE
);
CREATE TABLE `Interest` (
  `Topic` VARCHAR(40) NOT NULL,
  `Handle` VARCHAR(40) NOT NULL,
  PRIMARY KEY (`Topic`, `Handle`),
  INDEX `Handleidx` (`Handle` ASC),
  CONSTRAINT `HandleInterest` FOREIGN KEY (`Handle`) REFERENCES `UserInformation` (`Handle`) ON DELETE CASCADE ON UPDATE CASCADE
);