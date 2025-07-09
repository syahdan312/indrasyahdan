Changing HTML Style
To change the style of an HTML element, use this syntax:

document.getElementById(id).style.property = new style
The following example changes the style of a <p> element:

Example
<html>
<body>

<p id="p2">Hello World!</p>

<script>
document.getElementById("p2").style.color = "blue";
</script>

</body>
</html>