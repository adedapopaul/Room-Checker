
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

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function checkRoom() {

    if (document.cookie === null) {

        document.getElementById("search").style.display = "none";

    }

    else {
        document.getElementsByClass("room-group").style.display = "none";
    }
    // check if cookie is null
    // else return room number

    //Get room number

    // if room is available return room number 
    // if room is not available return null 



}

function showAvalRoom() {      
        var avalRoom = getCookie(avalRoom).toString();    
      for (var room of avalRoom.split()) 
        {         
            document.getElementsByName(room).enable = false ;
       } 
};


function search(roomno) {
    var 
    var avalRooms = getCookie(availableRoom) ;
        if (avalRooms === " "){
        setCookie(availableRoom, roomno.toString());
    }

   else {
        avalRooms += ',' + roomno.toString();

       setCookie(availableRoom, avalRooms.toString());
    }
    location.reload();
}f