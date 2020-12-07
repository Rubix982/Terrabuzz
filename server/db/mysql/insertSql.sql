INSERT INTO `TERRABUZZ`.`userInformation` (
        `handler`,
        `email`,
        `password`,
        `activities`,
        `location`,
        `instagram`,
        `facebook`,
        `linkedIn`,
        `twitter`,
        `website`,
        `biography`,
        `joinedWebsite`
    )
VALUES (
        '@TashikMoin',
        'Tashik.Moin@Terrabuzz.Com',
        '12345',
        'Cricket , Gaming, Football',
        'Karachi',
        'https://www.instagram.com/tashikmoinshaikh/',
        'https://www.facebook.com/TashikMoinSheikh/',
        'https://www.linkedin.com/in/tashik',
        'https://twitter.com/TashikMSheikh',
        'Tashik.com',
        'Student, MLSA, MCT',
        '1000-01-01 00:00:00'
    );
INSERT INTO `TERRABUZZ`.`userInformation` (
        `handler`,
        `email`,
        `password`,
        `activities`,
        `location`,
        `instagram`,
        `facebook`,
        `linkedIn`,
        `twitter`,
        `website`,
        `biography`,
        `joinedWebsite`
    )
VALUES (
        '@Hassan',
        'Hassan@Terrabuzz.Com',
        '12345',
        'Gaming,Football',
        'Karachi',
        'https://www.instagram.com/tashikmoinshaikh/',
        'https://www.facebook.com/TashikMoinSheikh/',
        'https://www.linkedin.com/in/tashik',
        'https://twitter.com/TashikMSheikh',
        'Hassan.com',
        'Lord, JS, Node, Fastian',
        '1000-02-01 00:00:00'
    );
INSERT INTO `TERRABUZZ`.`userInformation` (
        `handler`,
        `email`,
        `password`,
        `activities`,
        `location`,
        `instagram`,
        `facebook`,
        `linkedIn`,
        `twitter`,
        `website`,
        `biography`,
        `joinedWebsite`
    )
VALUES (
        '@Saif',
        'Saif@Terrabuzz.Com',
        '12345',
        'Cricket , Gaming, Football',
        'Karachi',
        'https://www.instagram.com/tashikmoinshaikh/',
        'https://www.facebook.com/TashikMoinSheikh/',
        'https://www.linkedin.com/in/tashik',
        'https://twitter.com/TashikMSheikh',
        'Saif.com',
        'Student, Fastian, AI, DL',
        '1000-01-03 00:00:00'
    );
INSERT INTO `TERRABUZZ`.`userInformation` (
        `handler`,
        `email`,
        `password`,
        `activities`,
        `location`,
        `instagram`,
        `facebook`,
        `linkedIn`,
        `twitter`,
        `website`,
        `biography`,
        `joinedWebsite`
    )
VALUES (
        '@Johndoe',
        'john@Terrabuzz.Com',
        '12345',
        'Cricket , Gaming, Football',
        'Karachi',
        'https://www.instagram.com/tashikmoinshaikh/',
        'https://www.facebook.com/TashikMoinSheikh/',
        'https://www.linkedin.com/in/tashik',
        'https://twitter.com/TashikMSheikh',
        'john.com',
        'Student, MLSA, MCT',
        '1000-04-01 00:00:00'
    );
INSERT INTO `TERRABUZZ`.`connection` (`followers`, `following`)
VALUES ('@Saif', '@TashikMoin');
INSERT INTO `TERRABUZZ`.`connection` (`followers`, `following`)
VALUES ('@Hassan', '@TashikMoin');
INSERT INTO `TERRABUZZ`.`connection` (`followers`, `following`)
VALUES ('@Johndoe', '@TashikMoin');
INSERT INTO `TERRABUZZ`.`connection` (`followers`, `following`)
VALUES ('@TashikMoin', '@Hassan');
INSERT INTO `TERRABUZZ`.`connection` (`followers`, `following`)
VALUES ('@Saif', '@Hassan');
INSERT INTO `TERRABUZZ`.`connection` (`followers`, `following`)
VALUES ('@Hassan', '@Saif');
INSERT INTO `TERRABUZZ`.`academics` (`name`, `handler`, `from`, `in`, `type`)
VALUES (
        'Tezz University',
        '@TashikMoin',
        '1000-01-03',
        '2000-01-03',
        'Undergraduate'
    );
INSERT INTO `TERRABUZZ`.`academics` (`name`, `handler`, `from`, `in`, `type`)
VALUES (
        'Tezz University',
        '@Saif',
        '1100-01-03',
        '2200-01-03',
        'Undergraduate'
    );
INSERT INTO `TERRABUZZ`.`academics` (`name`, `handler`, `from`, `in`, `type`)
VALUES (
        'Tezz University',
        '@Hassan',
        '3000-01-03',
        '4000-01-03',
        'Undergraduate'
    );
INSERT INTO `TERRABUZZ`.`academics` (`name`, `handler`, `from`, `in`, `type`)
VALUES (
        'MIT',
        '@Johndoe',
        '4000-01-03',
        '5000-01-03',
        'Undergraduate'
    );
INSERT INTO `TERRABUZZ`.`organization` (`name`, `handler`, `type`)
VALUES ('Microsoft', '@TashikMoin', 'CEO');
INSERT INTO `TERRABUZZ`.`organization` (`name`, `handler`, `type`)
VALUES ('Amazon', '@Hassan', 'CEO');
INSERT INTO `TERRABUZZ`.`organization` (`name`, `handler`, `type`)
VALUES ('Google', '@Saif', 'Founder');
INSERT INTO `TERRABUZZ`.`organization` (`name`, `handler`, `type`)
VALUES ('Microsoft', '@Johndoe', 'Manager');
INSERT INTO `TERRABUZZ`.`interest` (`topic`, `handler`)
VALUES ('C#', '@TashikMoin');
INSERT INTO `TERRABUZZ`.`interest` (`topic`, `handler`)
VALUES ('.NET', '@TashikMoin');
INSERT INTO `TERRABUZZ`.`interest` (`topic`, `handler`)
VALUES ('Azure', '@TashikMoin');
INSERT INTO `TERRABUZZ`.`interest` (`topic`, `handler`)
VALUES ('AWS', '@TashikMoin');
INSERT INTO `TERRABUZZ`.`interest` (`topic`, `handler`)
VALUES ('Tensorflow', '@Saif');
INSERT INTO `TERRABUZZ`.`interest` (`topic`, `handler`)
VALUES ('JavaScript', '@Hassan');
INSERT INTO `TERRABUZZ`.`interest` (`topic`, `handler`)
VALUES ('Node', '@Hassan');
INSERT INTO `TERRABUZZ`.`interest` (`topic`, `handler`)
VALUES ('AWS', '@Hassan');
INSERT INTO `TERRABUZZ`.`interest` (`topic`, `handler`)
VALUES ('AWS', '@Saif');
INSERT INTO `TERRABUZZ`.`interest` (`topic`, `handler`)
VALUES ('Tensorflow', '@TashikMoin');
INSERT INTO `TERRABUZZ`.`interest` (`topic`, `handler`)
VALUES ('.NET', '@Hassan');