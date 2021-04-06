# Features
* Redirect file data from one url to another url

# Installation

`npm i get-file-then-post`

# Usage

```javascript
const getFileThenPost = require('get-file-then-post');

getFileThenPost({
    getUrl: "npmjs.com/file.exe",
    postUrl: "npmjs.com/uploadFile",
    fileName: "file.exe"
});
```

# Options

**getUrl** *- url from which the file data gets requested*\
Type: String\
Required: true\
\
**postUrl** *- url to which the requested file data (type: arraybuffer) gets postet*\
Type: String\
Required: true\
\
**fileName** *- naming with which the file gets postet*\
Type: String\
Default: 'file'