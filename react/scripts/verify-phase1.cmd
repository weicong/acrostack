@echo off
REM Phase 1 verification: npm install, npm run dev
REM Run from: app/react/ (parent of scripts/)
cd /d "%~dp0.."
echo === Phase 1 Verification ===
echo.
echo [1/2] Running npm install...
call npm install
if errorlevel 1 (
  echo npm install FAILED
  exit /b 1
)
echo.
echo [2/2] Running npm run dev (Ctrl+C to stop)...
call npm run dev
