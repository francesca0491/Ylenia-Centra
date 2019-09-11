var firebaseConfig = {
    apiKey: "AIzaSyBQq6CrLSY2ozXzsPHqUIbfXv_9Gp7HZoQ",
    authDomain: "centra-9c704.firebaseapp.com",
    databaseURL: "https://centra-9c704.firebaseio.com",
    projectId: "centra-9c704",
    storageBucket: "",
    messagingSenderId: "700212415521",
    appId: "1:700212415521:web:aaddf344f0a09f17"
  };

  firebase.initializeApp(firebaseConfig);
  const database = firebase.database();
  const ref = database.ref();
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const phoneInput = document.getElementById("phone");
  const messageInput = document.getElementById("message");



text = ""+
myscript.fbSave("uno", "sendMessageButton2",[["name","email","phone", "message"],
['nameInput.value','emailInput.value','phoneInput.value', 'messageInput.value']])+
myscript.variables()+
myscript.script();

document.getElementById("script").innerHTML = text;