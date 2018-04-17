REM 创建vpn连接

powershell Add-VpnConnection -Name "Test3" -ServerAddress "10.1.1.1" -PassThru


REM ————————————————————————————


REM 删除VPN连接
powershell Remove-VpnConnection -Name "test2"  -Force -PassThru
ipconfig/all

REM ————————————————————————————
REM 连接VPN
rasdial
REM 刷新DNS缓存 ipconfig /flushdns