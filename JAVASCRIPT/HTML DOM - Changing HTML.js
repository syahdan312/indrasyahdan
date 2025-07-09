Changing HTML Content
The easiest way to modify the content of an HTML element is by using the innerHTML property.

To change the content of an HTML element, use this syntax:

document.getElementById(id).innerHTML = new HTML
This example changes the content of a <p> element:

Example
<html>
<body>

<p id="p1">Hello World!</p>

<script>
document.getElementById("p1").innerHTML = "New text!";
</script>

</body>
</html>
Example explained:

The HTML document above contains a <p> element with id="p1"
We use the HTML DOM to get the element with id="p1"
A JavaScript changes the content (innerHTML) of that element to "New text!"
This example changes the content of an <h1> element:

Example
<!DOCTYPE html>
<html>
<body>

<h1 id="id01">Old Heading</h1>

<script>
const element = document.getElementById("id01");
element.innerHTML = "New Heading";
</script>

</body>
</html>