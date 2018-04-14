// var net =require('net')
// var url=require('url')
// var ip=require('ip')
// var server = net.createServer(function (socket,sd) {
//     console.log(ip.address())
//     console.log(sd.connection.remoteAddress)
//     socket.end("goodbye\n");
//   });

//   // grab a random port.
//   server.listen(8888,"127.0.0.1",function() {
//     address = server.address();
//     //console.log(ip.address());
//     console.log("opened server on %j", address);
//   });


const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req.url)
  res.end(console.log('dd'));
});
server.on('clientError', (err, socket) => {
  socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
});
server.listen(8888,"127.0.0.1",function() {
  //address = server.address();
  //console.log(ip.address());
  console.log("opened server on %j", "127.0.0.1");
});
