 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyDumOAuXF-uZczJDGdSnU1FXBV0vcxz8tk",
    authDomain: "tours-af9d4.firebaseapp.com",
    databaseURL: "https://tours-af9d4.firebaseio.com",
    projectId: "tours-af9d4",
    storageBucket: "tours-af9d4.appspot.com",
    messagingSenderId: "1074021989905"
  };
  firebase.initializeApp(config);

  //Reference messages collection
  var messagesRef = firebase.database().ref('messages');

  //Listen for form submit
  document.getElementById('contact_form').addEventListener('submit', submitForm);

  //Submit form
  function submitForm(e){
      e.preventDefault();

      //Get values
      var form_name = getInputVal('form_name');
      var form_email = getInputVal('form_email');
      var form_phone = getInputVal('form_phone');
      var form_subject = getInputVal('form_subject');
      var form_message = getInputVal('form_message');

      //Save message
      saveMessage(form_name, form_email, form_phone, form_subject, form_message);

  }

  //Function to get form values
  function getInputVal(id){
      return document.getElementById(id).value;
  }

  //Save message to firebase
  function saveMessage(form_name, form_email, form_phone, form_subject, form_message){
      var newMessageRef = messagesRef.push();
      newMessageRef.set({
          form_name : form_name,
          form_email : form_email,
          form_phone : form_phone,
          form_subject : form_subject,
          form_message : form_message
      });
  }