#2 The Big Picture
For a chrome extension, need 4 files:
1. manifest
1. html
1. css
1. js

Then you bundle these into a `.crx` zipped file and sent to the Chrome Web Store

#3 Overview
##Extension types
###1. Browser Action (BA)
- Stay's in the tool bar
- Accessible at all times

###2. Page Action (PA)
- Stay in tool bar but grey-ed out
- Accessible on certain pages that the developer chooses

###3. Neither BA or PA
- Runs in the background

#4 Manifest file
## Main parts
- Contains information about the extension
- Is in JSON format
- Mandatory components:
  1. Manifest version
  2. Name of the extension
  3. Version of the extension

- We are going to make a "Hello World" with html, css, js, manifest and some icons
- Bare minimal manifest file:
```JSON
{
  "manifest_version": 2,
  "name": "Hello World",
  "version": "1.0",
}
```
Each time you update, can change the version number
See projects for the remaining parts of the manifest

## icons
Icons must be 128x128 px, 48x48px, 16x16px
```JSON
{
  "manifest_version": 2,
  "name": "Hello World",
  "version": "1.0",
  "description": "A hello world! extension",
  "icons": {
    "128": "icon28.png",
    "48": "icon48.png",
    "16": "icon16.png"
  }
}
```
## specifiying type of extension:
Here we show it's a browser_action
Also includes a default icon for the toolbar
```JSON
{
  "manifest_version": 2,
  "name": "Hello World",
  "version": "1.0",
  "description": "A hello world! extension",
  "icons": {
    "128": "icon28.png",
    "48": "icon48.png",
    "16": "icon16.png"
  },
  "browser_action": {
    "default_icon": "icon16.png",
    "default_popup": "popup.html"
  }
}
```
#5 HTML file
1. Made an html file with hello, world.
1. Got to chrome://extensions/ in chrome browser
1. Click on 'developer mode'
1. Click 'Load unpacked extensions'

#6 JS file
1. js scripts should not be in the html (it's frowned upon)
1. instead, should be outside in their own files, so call them with the `<script>` tag and src

#7 jquery
1. Here he puts the jQuery file in the directory to be served and calls it like the other .js file

#8 css
1. css can be in all three places - within element, within html doc, or separate file, we will use separate file
