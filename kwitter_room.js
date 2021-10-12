user_name=localStorage.getItem("user_name");
document.getElementById("user_name".inerHTML="welcome" + user_name+"!");


function addroom(){
      Roome_name=document.getElementById("Roome_name".value);
      fireBase.database().ref("/").child("Roome_name").update({
            purpose: "adding Roome name"
      });
      localStorage.setItem("Room_name", Roome_name)
      window.location="kwitter_page.HTML"
      
      
}

      
function getdata() {firebase.database().ref("/").on('value',function(snapshot){ document.getElementById("output").inerHTML=
                  Roome_names=childkey;
                  console.log("Room Name - "+ Roome_names);
            row = "<div class='Roome_name' id="+Roome_names+"onclick='redirectToRoomName(this.id)' >#"+Roome_names +"</div><hr>";
            document.getElementById("output").inerHTML += row;
      });
      

}
function redarect_to_roomname(name){
      console.log(name);
      localStorage.setItem("Roome_name",name);
      window.location="kwitterpage.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("Roome_name");
      window.location="kwitter.Html";
}

function send(){
      msg = document.getElementById("msg").value;
      fireBase.database().ref(Roome_name).push({
            name: username, 
            message: msg,
            like:0
      });
      document.getElementById("msg").value="";