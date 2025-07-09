AJAX Database Example
The following example will demonstrate how a web page can fetch information from a database with AJAX:

Example

Select a customer:

Customer info will be listed here...

Example Explained - The showCustomer() Function
When a user selects a customer in the dropdown list above, a function called showCustomer() is executed. The function is triggered by the onchange event:

showCustomer
function showCustomer(str) {
  if (str == "") {
    document.getElementById("txtHint").innerHTML = "";
    return;
  }
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    document.getElementById("txtHint").innerHTML = this.responseText;
  }
  xhttp.open("GET", "getcustomer.php?q="+str);
  xhttp.send();
}