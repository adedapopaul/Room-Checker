
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    var username = getCookie("username");
    if (username != "") {
        alert("Welcome again " + username);
    } else {
        username = prompt("Please enter your name:", "");
        if (username != "" && username != null) {
            setCookie("username", username, 365);
        }
    }
}


function checkRoom() {

	if (document.cookie === null) {

		document.getElementById("myP1").style.display = "none";

	}

	else {
		return 'room not available';
	}
	// check if cookie is null
	// else return room number

	//Get room number

	// if room is available return room number 
	// if room is not available return null	

	var checkedValue = null; 
    
    if(inputElements[i].checked){
           checkedValue = inputElements[i].value;
 
    }

}