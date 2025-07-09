Window Location
The window.location object can be written without the window prefix.

Some examples:

window.location.href returns the href (URL) of the current page
window.location.hostname returns the domain name of the web host
window.location.pathname returns the path and filename of the current page
window.location.protocol returns the web protocol used (http: or https:)
window.location.assign() loads a new document
Window Location Href
The window.location.href property returns the URL of the current page.

Example
Display the href (URL) of the current page:

document.getElementById("demo").innerHTML =
"Page location is " + window.location.href;
Result is:

Page location is https://www.w3schools.com/js/js_window_location.asp
Window Location Hostname
The window.location.hostname property returns the name of the internet host (of the current page).

Example
Display the name of the host:

document.getElementById("demo").innerHTML =
"Page hostname is " + window.location.hostname;