const mysql=require("mysql");
module.exports=mysql.createConnection({
    host:"192.168.0.152",
    port: 3306,
    user:"root",
    password:"",
    database:"controlpedidos"
});