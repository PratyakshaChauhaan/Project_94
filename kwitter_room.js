// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpDpm-3ewrKTFsk7GdK4U2NFBcq4NBRLo",
  authDomain: "letschat-web-app---1-6aa9e.firebaseapp.com",
  databaseURL: "https://letschat-web-app---1-6aa9e-default-rtdb.firebaseio.com",
  projectId: "letschat-web-app---1-6aa9e",
  storageBucket: "letschat-web-app---1-6aa9e.appspot.com",
  messagingSenderId: "533891094290",
  appId: "1:533891094290:web:54720a468dc40ce82905cb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

      user_name = localStorage.getItem("user_name");
      
      document.getElementById("user_name").innerHTML = "Welcome "+user_name+"!";

function add_room()
{
    room_name = document.getElementById(" room_name").value;

    localStorage.setItem("roomname", room_name);
 
    window.location="kwitter_page.html";

    firebase.database().rel("/").child(room_name).update({
    purpose:"Adding Room Name"
    });
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML +=row;
      //End code
      });});}
getData();


function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name" , name);
window.location = "kwitter_page.html"; 
}

function logout()
{
    window.location="index.html";
}