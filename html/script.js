// Main Function
function commandProcessor(e) {

	//Check if the enter key is pressed
	if (e.keyCode == 13) {

     
		document.getElementById('injected').innerHTML = "";
		var i = document.getElementById("txtBox").value
		var xhr = new XMLHttpRequest();
		xhr.open("GET", "http://192.168.43.35/cgi-bin/backend.py?cmd=" + i, false)
		xhr.send();
		var output = xhr.responseText;
		document.getElementById("injected").innerHTML = output;
		     
		//Clear input text box
		document.getElementById('txtBox').value = "";
	}
}
