@echo off
cd c://
cd windows
cd system32
cd ras
copy nul temp.txt


echo [Canada] >>temp.txt
echo MEDIA=rastapi >>temp.txt
set  a=Port=VPN2-0
echo %a%>>temp.txt
echo Device=WAN Miniport (IKEv2) >>temp.txt
set  b=DEVICE=vpn
echo %b%>>temp.txt
echo PhoneNumber=222.200.98.237 >>temp.txt


type temp.txt >>rasphone.pbk
del temp.txt
rasdial Canada vpn hit2014.nb


route add -p 222.200.98.237 mask 255.255.255.255 222.200.98.237 metric 2
#diasble class route
pause



vpn断开连接

@echo off
cd c://
cd windows
cd system32
cd ras
copy nul temp.txt
rasdial Canada /disconnect
type temp.txt >>rasphone.pbk
del temp.txt