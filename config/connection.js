var mysql = require("mysql");
var connection = mysql.createConnection({
  port: 8889,
  host: "localhost",
  user: "root",
  password: "root",
  database: "burgers_db"
});

connection.connect(function(err) {
  if (err)throw err;
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
