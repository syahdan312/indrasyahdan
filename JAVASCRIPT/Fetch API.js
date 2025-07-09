A Fetch API Example
The example below fetches a file and displays the content:

Example
fetch(file)
.then(x => x.text())
.then(y => myDisplay(y));