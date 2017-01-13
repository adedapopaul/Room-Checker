var rooms = {
	"room85":{
		"availability":true
	},
	"room86":{
		"availability":true
	},
	"room87":{
		"availability":true
	},
	"room88":{
		"availability":true
	},
	"room89":{
		"availability":true
	},
	"room90":{
		"availability":true
	},
	"room91":{
		"availability":true
	},
	"room92":{
		"availability":true
	},
	"room93":{
		"availability":true
	},
	"room94":{
		"availability":true
	},
	"room95":{
		"availability":true
	},
	"room96":{
		"availability":true
	},
	"room97":{
		"availability":true
	},
	"room98":{
		"availability":true
	},
	"room99":{
		"availability":true
	},
	"room100":{
		"availability":true
	},
	"room101":{
		"availability":true
	},
	"room102":{
		"availability":true
	},
	"room103":{
		"availability":true
	},
	"room104":{
		"availability":true
	}
}

 function setCookie(roomId) {
 	document.cookie = "roomId="+roomId;
 }

 function checkCookie() {
 	if (document.cookie) {
 		var roomCookie = document.cookie.split('=')
 		return roomCookie[1];
 	}
 	else {
 		return false;
 	}
 }

 function respondToClick(roomid) {
 	if(document.getElementById(roomid).checked) {
 		selectRoom(roomid);
 	}
 	else {
 		unselectRoom(roomid);
 	}
 }

 function selectRoom(roomId) {
 	setCookie(roomId);
 	rooms[roomId].availability=false;
 	for (var roomid in rooms) {
 		if(document.getElementById(roomid).checked) {
 			continue;
 		}
 		else {
 			document.getElementById(roomid).disabled = true;
 		}
 	}
 }

 function unselectRoom(roomId) {
 	document.cookie="roomId=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
 	rooms[roomId].availability = true;
 	document.getElementById('engaged').innerHTML='';
 	for (var roomid in rooms) {
 		if(rooms[roomid].availability==true){
 			document.getElementById(roomid).disabled = false;
 		}		
 	}
 }

 function checkUser() {
 	var roomId = checkCookie();
 	if (roomId) {
 		document.getElementById('engaged').innerHTML="You've already occupied "+roomId+" !";
 		for (var roomid in rooms) {
 			if (roomid == roomId) {
 				document.getElementById(roomid).checked = true;
 			}
 			else {
 				document.getElementById(roomid).disabled = true;
 			}	
 		}
 	}
 	else {
 		for (var roomid in rooms) {
 			if (rooms[roomid].availability==false) {
 				document.getElementById(roomId).disabled = true;
 			}
 		}
 	}
 }