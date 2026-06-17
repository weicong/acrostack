@echo off
REM Phase 2 verification: Login flow, protected routes
REM Run from: app/react/ (parent of scripts/)
REM Prerequisites: Backend (HttpApi.HostWithIds) must be running for full login test
cd /d "%~dp0.."
echo === Phase 2 Verification ===
echo.
echo [1/3] Running npm install...
call npm install
if errorlevel 1 (
  echo npm install FAILED
  exit /b 1
)
echo.
echo [2/3] Running npm run build...
call npm run build
if errorlevel 1 (
  echo npm run build FAILED
  exit /b 1
)
echo.
echo [3/3] Start dev server to manually verify:
echo   - Login: Click Login on Home, complete OAuth flow
echo   - Protected routes: Navigate to /dashboard without login - should redirect to auth
echo   - Menu: Sidebar items respect permissions
echo.
echo Run: npm run dev
echo Then test with backend at https://localhost:44300 (or your API port)
pause
