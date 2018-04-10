var net =require('net')
var ip=require('ip')
var server = net.createServer(function (socket) {
    console.log(ip.address())
    socket.end("goodbye\n");
  });

  // grab a random port.
  server.listen(80,function() {
    address = server.address();
    //console.log(ip.address());
    console.log("opened server on %j", address);
  });