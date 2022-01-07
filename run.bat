@echo off
rmdir /s /q cache
TIMEOUT /T 1
FXServer.exe +exec server.cfg +set svgui_disable true +set sv_projectName "Source Ready" "sample" +set sv_enforceGameBuild 2372