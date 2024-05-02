# Moon Plugin Sample - Plugin Development

<span class="badge-npmversion"><a href="https://npmjs.org/package/@moonjot/moon-sample-plugin" title="View this project on NPM"><img src="https://img.shields.io/npm/v/@moonjot/moon-sample-plugin.svg" alt="NPM version" /></a></span>
<span class="badge-npmdownloads"><a href="https://npmjs.org/package/@moonjot/moon-sample-plugin" title="View this project on NPM"><img src="https://img.shields.io/npm/dm/@moonjot/moon-sample-plugin.svg" alt="NPM downloads" /></a></span>


Moon Jot is base on a plugin system that make easy to develop your own integration and workflows

# Develop on Moon

Check the doc here https://github.com/castroCrea/moon/blob/main/doc/Plugin_Development.md


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
```bash
yarn pub
```