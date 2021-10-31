module.exports = {
  database:{
    connectionLimit : 5, //for testing
    //socketPath : '/Applications/MAMP/Library/bin/mysql',
    port: '3306',
    host: process.env.DB_HOST || 'localhost', // variables de entorno
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || '1234',
    database: process.env.DB_DATABASE || 'database_links',
    debug: false
  }
};
