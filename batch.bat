echo off
for /R "C:\wamp64" %%I in ("whiteboard*.exe") do if /I "%%~nxI" == "whiteboard.exe" "%%I" createdatabase closeimmediately
exit