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
    
    if (nameInput.value == "") {inputName.value = "zzdefault";}
    if (phoneInput.value == "") {phoneInput.value = "zzdefault";}
    if (messageInput.value == "") {messageInput.value = "zzdefault";}
    if (emailInput.value == "") {inputEmail.value = "zzdefault@zzdefault";}
  var inputUser = {value: "zzdefault"};
  var tempo = new Date();

  sendMessageButton2.addEventListener("click", e => {
    inputUser.value = nameInput.value +"_"+ tempo.getMonth()+ tempo.getDate()+ tempo.getHours()+tempo.getMinutes()+tempo.getSeconds();  
    path = inputUser.value;
  	database.ref(path).set({
  		name: nameInput.value,
  		email: emailInput.value,
  		phone: phoneInput.value,
  		message: messageInput.value,
  	});
      document.getElementById("modal-body").innerHTML =
    '<div class="modal-title">\r'+
    '<h2 class="text-center">Grazie per esserti registrato!</h2>\r'+
    '</div>\r'
    ;
  });
