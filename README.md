# Moon Plugin Sample

## Installation

```bash
yarn
```

## Build before publishing

```bash
yarn build
```

## For dev mode run 

```bash
yarn watch
```

This wil build the app each time you do a change

### on you app add to you `settings.plugins.list`

```json
{
	"id": 2,
	"packageName": "{PATH_TO}/moon-sample-plugin", // path to the plugin
	"description": "Sample app",
	"fromPath": true, // if you packages name is develop locally
	"devMode": true, // allow auto refresh before each use
	"npmRegistryUrl": "https://npm.pkg.github.com", // if you use GITHUB as registry (otherwise you can remove that if npm)
	"npmRegistryConfig": {
		"auth": {
			"token": "TOKEN" // if GITHUB is the registry
		}
	}
}
```

## Publishing

First remove current git origin
```bash
git remote remove origin
```

Add you repo origin and change also **credential** iin `package.json`

Then
```bach
yarn pub
```