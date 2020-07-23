const mysql=require("mysql");
module.exports=mysql.createConnection({
    host:"192.168.56.1",
    port: 3306,
    user:"root",
    password:"",
    database:"controlpedidos"
});