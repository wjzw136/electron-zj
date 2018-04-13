REM @echo off
REM  preparation

sc config sharedaccess start= disabled
net stop SharedAccess
sc config remoteaccess start= auto
net start RemoteAccess
net start lanmanserver
net start RemoteRegistry

REM build vpn

REM netsh ras set user vpnuser permit
netsh ras ip add range 10.10.1.1 10.10.10.10
netsh ras ip set addrassign pool
netsh routing ip nat install
netsh routing ip nat add interface 本地连接 full
netsh routing ip nat add interface 内部 private

REM netsh routing ip igmp install
REM netsh routing ip igmp add interface 内部 igmpprototype=IGMPRTRV3 ifenabled=enable

REM robustvar=2 startupquerycount=2 startupqueryinterval=31 genqueryinterval=125

REM genqueryresptime=10 lastmemquerycount=2 lastmemqueryinterval=1000 accnonrtralertpkts=YES
REM netsh routing ip igmp add interface name="本地连接" igmpprototype=IGMPPROXY ifenabled=enable