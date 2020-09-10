var mysql = require('mysql');

var dbconnInfo = {
    host: 'plus-market-db.cuypzfyecqxg.ap-northeast-2.rds.amazonaws.com',
    user: 'admin',
    password: 'plus1234',
    database: 'capdi'
};


var connection = {
    init: () => {
        return mysql.createConnection(dbconnInfo);
    },

    open: (con) => {
        con.connect(function(err) {
            if (err) {
                console.error("mysql connection error : " + err);
            } else {
                console.info("mysql connection successfully.");
            }
        });
    }
};


module.exports = connection;