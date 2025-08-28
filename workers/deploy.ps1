# deploy.ps1 - simple: load .env and deploy
$envFile = Join-Path $PSScriptRoot ".env"
if (Test-Path $envFile) {
  Get-Content $envFile | ForEach-Object {
    if ($_ -match '^\s*([^#][^=]+)=(.*)$') {
      $k = $matches[1].Trim()
      $v = $matches[2].Trim()
      $env:$k = $v
    }
  }
} else {
  Write-Error ".env not found at $envFile"
  exit 1
}

#Deploy wrangler
wrangler deploy