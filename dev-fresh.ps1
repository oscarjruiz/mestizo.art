$ErrorActionPreference = "Stop"

Write-Host "Limpiando cache..." -ForegroundColor Yellow
if (Test-Path -LiteralPath ".next") {
    Remove-Item -Recurse -Force -LiteralPath ".next"
    Write-Host "  .next eliminado" -ForegroundColor Green
} else {
    Write-Host "  .next no encontrado, omitiendo" -ForegroundColor Gray
}
if (Test-Path -LiteralPath "node_modules\.cache") {
    Remove-Item -Recurse -Force -LiteralPath "node_modules\.cache"
    Write-Host "  node_modules\.cache eliminado" -ForegroundColor Green
}

Write-Host ""
Write-Host "Iniciando servidor de desarrollo..." -ForegroundColor Cyan
npx next dev --turbo
