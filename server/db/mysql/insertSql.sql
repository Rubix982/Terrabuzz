INSERT INTO `TERRABUZZ`.`User_Information` (`Handler`, `Username`, `Email`, `Password`, `Activities`, `Location`, `Instagram`, `Facebook`, `LinkedIn`, `Twitter`, `Website`, `Biography`,`Joined_Website` ) VALUES ('@TashikMoin', 'Tashik Moin', 'Tashik.Moin@Terrabuzz.Com', '12345', 'Cricket , Gaming, Football','Karachi','https://www.instagram.com/tashikmoinshaikh/','https://www.facebook.com/TashikMoinSheikh/', 'https://www.linkedin.com/in/tashik','https://twitter.com/TashikMSheikh' , 'Tashik.com' , 'Student, MLSA, MCT', '1000-01-01 00:00:00');
INSERT INTO `TERRABUZZ`.`User_Information` (`Handler`, `Username`, `Email`, `Password`, `Activities`, `Location`, `Instagram`, `Facebook`, `LinkedIn`, `Twitter`, `Website`, `Biography`,`Joined_Website` ) VALUES ('@Hassan', 'Hassan Zahid', 'Hassan@Terrabuzz.Com', '12345', 'Gaming,Football','Karachi','https://www.instagram.com/tashikmoinshaikh/','https://www.facebook.com/TashikMoinSheikh/', 'https://www.linkedin.com/in/tashik','https://twitter.com/TashikMSheikh' , 'Hassan.com' , 'Lord, JS, Node, Fastian', '1000-02-01 00:00:00');
INSERT INTO `TERRABUZZ`.`User_Information` (`Handler`, `Username`, `Email`, `Password`, `Activities`, `Location`, `Instagram`, `Facebook`, `LinkedIn`, `Twitter`, `Website`, `Biography`,`Joined_Website` ) VALUES ('@Saif', 'Saif Ul Islam', 'Saif@Terrabuzz.Com', '12345', 'Cricket , Gaming, Football','Karachi','https://www.instagram.com/tashikmoinshaikh/','https://www.facebook.com/TashikMoinSheikh/', 'https://www.linkedin.com/in/tashik','https://twitter.com/TashikMSheikh' , 'Saif.com' , 'Student, Fastian, AI, DL', '1000-01-03 00:00:00');
INSERT INTO `TERRABUZZ`.`User_Information` (`Handler`, `Username`, `Email`, `Password`, `Activities`, `Location`, `Instagram`, `Facebook`, `LinkedIn`, `Twitter`, `Website`, `Biography`,`Joined_Website` ) VALUES ('@Johndoe', 'John Doe', 'john@Terrabuzz.Com', '12345', 'Cricket , Gaming, Football','Karachi','https://www.instagram.com/tashikmoinshaikh/','https://www.facebook.com/TashikMoinSheikh/', 'https://www.linkedin.com/in/tashik','https://twitter.com/TashikMSheikh' , 'john.com' , 'Student, MLSA, MCT', '1000-04-01 00:00:00');
INSERT INTO `TERRABUZZ`.`Connection` (`Followers`, `Following`) VALUES ( '@Saif', '@TashikMoin' );
INSERT INTO `TERRABUZZ`.`Connection` (`Followers`, `Following`) VALUES ( '@Hassan', '@TashikMoin' );
INSERT INTO `TERRABUZZ`.`Connection` (`Followers`, `Following`) VALUES ( '@Johndoe', '@TashikMoin' );
INSERT INTO `TERRABUZZ`.`Connection` (`Followers`, `Following`) VALUES ( '@TashikMoin', '@Hassan' );
INSERT INTO `TERRABUZZ`.`Connection` (`Followers`, `Following`) VALUES ( '@Saif', '@Hassan' );
INSERT INTO `TERRABUZZ`.`Connection` (`Followers`, `Following`) VALUES ( '@Hassan','@Saif' );
INSERT INTO `TERRABUZZ`.`Academics` (`Name`, `Handler`, `From`, `In`, `Type` ) VALUES ('Tezz University', '@TashikMoin' , '1000-01-03', '2000-01-03', 'Undergraduate' );
INSERT INTO `TERRABUZZ`.`Academics` (`Name`, `Handler`, `From`, `In`, `Type` ) VALUES ('Tezz University', '@Saif' , '1100-01-03', '2200-01-03', 'Undergraduate' );
INSERT INTO `TERRABUZZ`.`Academics` (`Name`, `Handler`, `From`, `In`, `Type` ) VALUES ('Tezz University', '@Hassan' , '3000-01-03', '4000-01-03', 'Undergraduate' );
INSERT INTO `TERRABUZZ`.`Academics` (`Name`, `Handler`, `From`, `In`, `Type` ) VALUES ('MIT', '@Johndoe' , '4000-01-03', '5000-01-03', 'Undergraduate' );
INSERT INTO `TERRABUZZ`.`Organization` (`Name`, `Handler`, `Type` ) VALUES ( 'Microsoft' , '@TashikMoin', 'CEO');
INSERT INTO `TERRABUZZ`.`Organization` (`Name`, `Handler`, `Type` ) VALUES ( 'Amazon' , '@Hassan', 'CEO');
INSERT INTO `TERRABUZZ`.`Organization` (`Name`, `Handler`, `Type` ) VALUES ( 'Google' , '@Saif', 'Founder');
INSERT INTO `TERRABUZZ`.`Organization` (`Name`, `Handler`, `Type` ) VALUES ( 'Microsoft' , '@Johndoe', 'Manager');
INSERT INTO `TERRABUZZ`.`Interest` (`Topic`, `Handler` ) VALUES ( 'C#' , '@TashikMoin' );
INSERT INTO `TERRABUZZ`.`Interest` (`Topic`, `Handler` ) VALUES ( '.NET' , '@TashikMoin' );
INSERT INTO `TERRABUZZ`.`Interest` (`Topic`, `Handler` ) VALUES ( 'Azure' , '@TashikMoin' );
INSERT INTO `TERRABUZZ`.`Interest` (`Topic`, `Handler` ) VALUES ( 'AWS' , '@TashikMoin' );
INSERT INTO `TERRABUZZ`.`Interest` (`Topic`, `Handler` ) VALUES ( 'Tensorflow' , '@Saif' );
INSERT INTO `TERRABUZZ`.`Interest` (`Topic`, `Handler` ) VALUES ( 'JavaScript' , '@Hassan' );
INSERT INTO `TERRABUZZ`.`Interest` (`Topic`, `Handler` ) VALUES ( 'Node' , '@Hassan' );
INSERT INTO `TERRABUZZ`.`Interest` (`Topic`, `Handler` ) VALUES ( 'AWS' , '@Hassan' );
INSERT INTO `TERRABUZZ`.`Interest` (`Topic`, `Handler` ) VALUES ( 'AWS' , '@Saif' );
INSERT INTO `TERRABUZZ`.`Interest` (`Topic`, `Handler` ) VALUES ( 'Tensorflow' , '@TashikMoin' );
INSERT INTO `TERRABUZZ`.`Interest` (`Topic`, `Handler` ) VALUES ( '.NET' , '@Hassan' );












