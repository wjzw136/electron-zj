@echo off

echo.
echo �ƷƲ���(www.feifeiboke.com)��ʾ��
echo.
echo �������ҽ�����һ������VPN���񡢲�����NAT�����֧��VPN��������...
echo.
pause
echo.
sc config RemoteAccess start= auto
net start RemoteAccess

netsh routing ip nat install
netsh routing ip nat add interface "�ڲ�" private
netsh routing ip nat add interface "��������" full

echo ִ�����...
pause >nul