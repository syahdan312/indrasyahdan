What is a Web Worker?
When executing scripts in an HTML page, the page becomes unresponsive until the script is finished.

A web worker is a JavaScript that runs in the background, independently of other scripts, without affecting the performance of the page. You can continue to do whatever you want: clicking, selecting things, etc., while the web worker runs in the background.

Browser Support
The numbers in the table specify the first browser versions that fully support Web Workers:

Chrome 4	IE 10	Firefox 3.5	Safari 4	Opera 11.5
Jan 2010	Sep 2012	Jun 2009	Jun 2009	Jun 2011
Web Workers Example
The example below creates a simple web worker that count numbers in the background:

Example
Count numbers:
Start Worker Stop Worker