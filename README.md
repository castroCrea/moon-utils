# Moon Utils

<span class="badge-npmversion"><a href="https://npmjs.org/package/@moonjot/moon-utils" title="View this project on NPM"><img src="https://img.shields.io/npm/v/@moonjot/moon-utils.svg" alt="NPM version" /></a></span>
<span class="badge-npmdownloads"><a href="https://npmjs.org/package/@moonjot/moon-utils" title="View this project on NPM"><img src="https://img.shields.io/npm/dm/@moonjot/moon-utils.svg" alt="NPM downloads" /></a></span>


Moon Jot utils function to develop plugins

# Description

`{{START_NOTE}}` and `{{END_NOTE}}` will define a note entity, encompassing everything that is placed inside. For a note to be created, there must be a pre-defined path within the `{{START_NOTE}}` and `{{END_NOTE}}`. To define this path, it can be inserted between `{{PATH}}` and `{{END_PATH}}`.

Example:
```md
{{START_NOTE}}
{{PATH}}/Note/title.md{{END_PATH}}
The following text has been capture with Moon Jot : {{CONTENT}}
{{END_NOTE}}
```

`{{CONTENT}` is the content of the Moon Jot Launcher at the moment you save it.

For more options, check the concept right afterwards.

# Concept

You can create a template in Obsidian that allows you to formulate your own note format, based on the data we have gathered with Moon Jot.

# List of the data and anchor for template

## Must have

### Create a note

All that is embedded inside will be checked out as a note to be created.
```
{{START_NOTE}}{{END_NOTE}}
```

### Add a path to your note
You must add a path to the `{{START_NOTE}}`; otherwise, your note will not be created.
```
{{PATH}}{{END_PATH}}
```

example:
```
{{PATH}}
{{IF TITLE}}/Notes/{{TITLE}}.md{{END_IF TITLE}}
{{IF SOURCE.TITLE}}/Notes/{{SOURCE. TITLE}}.md{{END_IF SOURCE.TITLE}}
/Notes/ideas.md
{{END_PATH}}
```
If you do that, it will check the first one. If it's not good, it will take the second one. 
If the second one isn't good either, it will take the last one. 
If the path is empty at the end, it will not create the note.

## Condition

### Is defined

You can insert content based on a condition.
Currently, the condition only checks if something exists or does not exist.
```
{{IF ...}}Write something{{END_IF ...}}

// Example:
{{PATH}}
{{IF TITLE}}{{TITLE}}.md{{END_IF TITLE}}
{{END_PATH}}
```

### You can also do some condition with equality

#### === undefined
```
{{IF SOURCE.RANDOM === undefined}}content{{END_IF SOURCE.RANDOM}}
```

#### === some text
```
{{IF SOURCE.TEXT === some text}}content{{END_IF SOURCE.TEXT}}
```

#### !== some text
```
{{IF SOURCE.TEXT !== some text}}content{{END_IF SOURCE.TEXT}}}
```

#### .includes(something)
```
{{IF SOURCE.TEXT.includes(some t)}}content{{END_IF SOURCE.TEXT}}
```
#### .startWidth(something)
```
{{IF SOURCE.TEXT.startWidth(- [ ])}}content{{END_IF SOURCE.TEXT}}
```

## Date

You can format the date as YYYY-MM-DD HH:mm:ss.
```
{{DATE}}YYYY-MM-DD{{END_DATE}}
{{DATE}}HH:mm{{END_DATE}}

// Example:
{{PATH}}/Journal/{{DATE}}YYYY-MM-DD{{END_DATE}}.md{{END_PATH}}
```

## Property

There are many properties that you can use.

### Basic for all devices

```
{{CONTENT}} // What you wrote in the text editor.
{{TITLE}}   // You add the title in the text editor on the first line with # Some title.
``` 

### From the context 

```
{{SOURCE.DESCRIPTION}} // The source description.

{{PEOPLE.0.NAME}} // The person captured names
{{PEOPLE.1.NAME}} // The person captured names
```


# Develop on Moon

Check the doc here https://github.com/castroCrea/moon/blob/main/doc/Plugin_Development.md

Check also the tutorial video https://youtu.be/dvoalnWBwv4 📹

# Installation

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