# Moon Plugin Sample - Plugin Development

<span class="badge-npmversion"><a href="https://npmjs.org/package/@moonjot/moon-sample-plugin" title="View this project on NPM"><img src="https://img.shields.io/npm/v/@moonjot/moon-sample-plugin.svg" alt="NPM version" /></a></span>
<span class="badge-npmdownloads"><a href="https://npmjs.org/package/@moonjot/moon-sample-plugin" title="View this project on NPM"><img src="https://img.shields.io/npm/dm/@moonjot/moon-sample-plugin.svg" alt="NPM downloads" /></a></span>


Moon Jot is base on a plugin system that make easy to develop your own integration and workflows

# Develop on Moon

Add this with the path to your plugins to `/Users/{USER_NAME}/Library/Application Support/moon.jot/moon-settings.json` in the you `settings.plugins.list` array
```json
{
  "id": 1000000000000,
  "name": "Name of the app",
	"packageName": "{PATH_TO}/moon-sample-plugin", // path to the plugin
	"description": "Sample app",
	"fromPath": true, // if you packages name is develop locally
	"devMode": true, // allow auto refresh before each use
  "npmRegistryUrl": "https://npm.pkg.github.com", // if you use GITHUB as registry (otherwise you can remove that if npm)
  "npmRegistryConfig": {
    "auth": {
      "token": "GITHUB_TOKEN_IF_DEV_PRIVATE" // if GITHUB is the registry
    }
  }
}
```

Run `yarn watch` in your plugin root, it will be auto build.
Open the settings to update the plugin
Then open the launcher to test it
You can also check the logs if you use them here
Use moon.log in `/Users/{USER_NAME}/Library/Application Support/moon.jot/moon.log`

## Useful commands


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