function getLocalHistory(cname) {

    if ( localStorage.getItem(cname)) {
        return null
    } else {
        return localStorage.getItem(cname).toString();
    }
    
    
}

function setLocalHistory(cname, cvalue) {
    localStorage.setItem(cname, cvalue);
}

function checkout() {
    setLocalHistory("userRoom" ,null);
    location.reload();
}

function checkin(roomNo,roomTitle) {
        var availableRooms =getLocalHistory("availableRooms");
        if ( !getLocalHistory("userRoom")) {
                // alert(roomNo.toString());
               var reply = window.confirm("Do you wish to check out from  " + roomTitle.toString() +   " "+roomNo.toString());
                if (reply == true) {
                    setLocalHistory("userRoom" ,roomNo.toString());
                    // to update unavailble rooms
                     if (!availableRooms) {
                        availableRooms = roomNo.toString();
                     } else {
                        availableRooms += ',' + roomNo.toString();
                     }
                    
                    setLocalHistory("availableRooms" ,availableRooms.toString());
                    document.getElementById('result').innerHTML = "You have successfully check into "  + roomTitle.toString() +  " "+ roomNo.toString();

                }
                else 
                {
                    document.getElementById('result').innerHTML = "You can only stay in a room";
                }
        } else {
                 //alert(roomNo.toString());
                setLocalHistory("userRoom" ,roomNo.toString());

                // to update unavailble rooms
                if (availableRooms === '') {
                        availableRooms = roomNo.toString();
                     } else {
                        availableRooms += ',' + roomNo.toString();
                     }
                setLocalHistory("availableRooms" ,availableRooms.toString());
                document.getElementById('result').innerHTML = "You have successfully check into " + roomTitle.toString() +  " "+ roomNo.toString();

        }
        
            
            
    
}

function showAvalRoom() { 
    var availableRooms =getLocalHistory("availableRooms") ;
               if (availableRooms === '') {
                    availableRooms = '';
               } 
        //an array to mock the expected list of unavailable rooms
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


