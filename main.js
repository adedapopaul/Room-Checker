function getCookie(cname) {

    if ( localStorage.getItem(cname)) {
        return null
    } else {
        return localStorage.getItem(cname).toString();
    }
    
    
}

function setCookie(cname, cvalue) {
    localStorage.setItem(cname, cvalue);
}

function checkout() {
	setCookie("userRoom" ,null);
    location.reload();
}

function checkin(roomNo,roomTitle) {
        var availableRooms =getCookie("availableRooms");
		if ( !getCookie("userRoom")) {
                // alert(roomNo.toString());
               var reply = window.confirm("Do you wish to check out from  " + roomTitle.toString() +   " "+roomNo.toString());
                if (reply == true) {
                    setCookie("userRoom" ,roomNo.toString());
                    // to update unavailble rooms
                     if (!availableRooms) {
                        availableRooms = roomNo.toString();
                     } else {
                        availableRooms += ',' + roomNo.toString();
                     }
                    
                    setCookie("availableRooms" ,availableRooms.toString());
                    document.getElementById('result').innerHTML = "You have successfully check into "  + roomTitle.toString() +  " "+ roomNo.toString();

                }
                else 
                {
                    document.getElementById('result').innerHTML = "You can only stay in a room";
                }
        } else {
                 //alert(roomNo.toString());
                setCookie("userRoom" ,roomNo.toString());

                // to update unavailble rooms
                if (availableRooms === '') {
                        availableRooms = roomNo.toString();
                     } else {
                        availableRooms += ',' + roomNo.toString();
                     }
                setCookie("availableRooms" ,availableRooms.toString());
                document.getElementById('result').innerHTML = "You have successfully check into " + roomTitle.toString() +  " "+ roomNo.toString();

        }
        
			
			
	
}

function showAvalRoom() { 
    var availableRooms =getCookie("availableRooms") ;
               if (availableRooms === '') {
                    availableRooms = '';
               } 
        //an array for test,
      var availableRoomsToArray =  [1,7,14,20]; //availableRooms.split(",");
      
       if ( availableRoomsToArray.length > 0) {
            var roomno;
        for (var i =0 ; i < availableRoomsToArray.length; i++ ) 
        {         
            roomno = availableRoomsToArray[i].toString();
            document.getElementById(roomno).disabled = true ;
            document.getElementById(roomno).style.backgroundColor  = "#939393";
        }
         //location.reload();
       }
};


