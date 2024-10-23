import mysql from'mysql';
const config = {
    host:'mysql.sqlpub.com',
    user:'userbylb',
    password:'2PEcacbnzYLLGOH5',
    port:3306,
    database:'chainblock',
}

const connection = mysql.createConnection(config);
connection.connect();
export default connection;