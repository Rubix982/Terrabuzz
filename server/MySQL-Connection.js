const MySQL = require('mysql');
const Connection = MySQL.createConnection({
	host: '40.68.60.224',
	user: '',
	password: '',
	database: 'Terrabuzz_MySQL'
});

const MySQLConnection = connection.connect( Error => {
	if(Error){
	    console.log("MySQL Not Connected");
	}
	else{
	    console.log("Connected MySQL Successfully");
    }
});

module.exports = MySQLConnection;
