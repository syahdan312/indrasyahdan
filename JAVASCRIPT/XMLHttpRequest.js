Send a Request To a Server
To send a request to a server, we use the open() and send() methods of the XMLHttpRequest object:

xhttp.open("GET", "ajax_info.txt", true);
xhttp.send();
Method	Description
open(method, url, async)	Specifies the type of request

method: the type of request: GET or POST
url: the server (file) location
async: true (asynchronous) or false (synchronous)
send()	Sends the request to the server (used for GET)
send(string)	Sends the request to the server (used for POST)
The url - A File On a Server
The url parameter of the open() method, is an address to a file on a server:

xhttp.open("GET", "ajax_test.asp", true);