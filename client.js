const net = require("net");
const stdin = require('./play')
const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243', // IP address here,
    port: 50541 // PORT number here,
    
  });
  conn.on("connect", () => {
    console.log('Connected successfully');
    conn.write('Name: SAD')
  });
  conn.on("data", (data) => {
    console.log(data);
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};
module.exports = {connect}