create database TERRABUZZ;
use TERRABUZZ;
CREATE TABLE `TERRABUZZ`.`User_Information` (
  `Handler` VARCHAR(40) NOT NULL,
  `Username` VARCHAR(40) NOT NULL,
  `Email` VARCHAR(45) NOT NULL,
  `Password` VARCHAR(45) NOT NULL,
  `Activities` VARCHAR(45) NULL,
  `Location` VARCHAR(45) NULL,
  `Instagram` VARCHAR(150) NULL,
  `Facebook` VARCHAR(150) NULL,
  `LinkedIn` VARCHAR(150) NULL,
  `Twitter` VARCHAR(150) NULL,
  `Website` VARCHAR(150) NULL,
  `Biography` VARCHAR(45) NULL,
  `Joined_Website` DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
  PRIMARY KEY (`Handler`),
  UNIQUE INDEX `Email_UNIQUE` (`Email` ASC) );
CREATE TABLE `TERRABUZZ`.`Connection` (
  `Followers` VARCHAR(40) NOT NULL,
  `Following` VARCHAR(40) NOT NULL,
  PRIMARY KEY (`Followers`, `Following`),
  CONSTRAINT `Handler_Followers_Connections`
    FOREIGN KEY (`Followers`)
    REFERENCES `TERRABUZZ`.`User_Information` (`Handler`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `Handler_Following_Connections`
    FOREIGN KEY (`Following`)
    REFERENCES `TERRABUZZ`.`User_Information` (`Handler`)
    ON DELETE CASCADE
    ON UPDATE CASCADE);
CREATE TABLE `TERRABUZZ`.`Academics` (
   `Name` varchar(40) NOT NULL,
   `Handler` varchar(40) NOT NULL,
   `From` date DEFAULT NULL,
   `In` date DEFAULT NULL,
   `Type` varchar(45) DEFAULT NULL,
   PRIMARY KEY (`Name`,`Handler`),
   CONSTRAINT `Handler_Academics` FOREIGN KEY (`Handler`) REFERENCES `User_Information` (`Handler`) ON DELETE CASCADE ON UPDATE CASCADE
 );
CREATE TABLE `TERRABUZZ`.`Organization` (
  `Name` VARCHAR(40) NOT NULL,
  `Handler` VARCHAR(40) NOT NULL,
  `Type` VARCHAR(45) NULL,
  PRIMARY KEY (`Name`, `Handler`),
  CONSTRAINT `Handler_Organization`
    FOREIGN KEY (`Handler`)
    REFERENCES `TERRABUZZ`.`User_Information` (`Handler`)
    ON DELETE CASCADE
    ON UPDATE CASCADE);
CREATE TABLE `TERRABUZZ`.`Interest` (
  `Topic` VARCHAR(40) NOT NULL,
  `Handler` VARCHAR(40) NOT NULL,
  PRIMARY KEY (`Topic`, `Handler`),
  INDEX `Handler_idx` (`Handler` ASC),
  CONSTRAINT `Handler_Interest`
    FOREIGN KEY (`Handler`)
    REFERENCES `TERRABUZZ`.`User_Information` (`Handler`)
    ON DELETE CASCADE
    ON UPDATE CASCADE);





















