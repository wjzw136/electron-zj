var SerialPort = require("serialport");  //引入模块

var portName = 'COM1'; //定义串口名

var port = new SerialPort(

 portName, 
//  {

//    baudRate: 9600,  //波特率

//    dataBits: 8,    //数据位

//    parity: 'none',   //奇偶校验

//    stopBits: 1,   //停止位

//    flowControl: false

// },
 false);
port.write('main screen turn on', function(err) {
  if (err) {
    return console.log('Error on write: ', err.message);
  }
  console.log('message written');
});

// Open errors will be emitted as an error event
port.on('error', function(err) {
  console.log('Error: ', err.message);
})
// serialPort.open(function(error){

//    if(error){

//      console.log("打开端口"+portName+"错误："+error);

//    }else{ 

//     console.log("打开端口成功，正在监听数据中");

//      serialPort.on('data',function(data){

//         if(!isNaN(parseFloat(data))){

//         console.log('重量显示:'+ parseFloat(data)+"g");

//         }

      

//      })

//    }

// });
