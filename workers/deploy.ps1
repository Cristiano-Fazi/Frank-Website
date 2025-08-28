# load .env and deploy
$envFile = Join-Path $PSScriptRoot ".env"
if (-not (Test-Path $envFile)) {
  Write-Error ".env not found at $envFile"
  exit 1
}

Get-Content $envFile | ForEach-Object {
  # skip empty lines and comments
  if ($_ -match '^\s*$' -or $_ -match '^\s*#') { return }
  if ($_ -match '^\s*([^=]+?)\s*=(.*)$') {
    $k = $matches[1].Trim()
    $v = $matches[2].Trim()
    # set environment variable for this process
    Set-Item -Path ("Env:" + $k) -Value $v
  }
}

# Deploy wrangler
wrangler deploy