@echo off

echo.
echo 菲菲博客(www.feifeiboke.com)提示：
echo.
echo 接下来我将帮您一键启动VPN服务、并激活NAT组件以支持VPN访问外网...
echo.
pause
echo.
sc config RemoteAccess start= auto
net start RemoteAccess

netsh routing ip nat install
netsh routing ip nat add interface "内部" private
netsh routing ip nat add interface "本地连接" full

echo 执行完毕...
pause >nul