// firebase API
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBzXRfccVrnV0Lo_iwLCqE08tqoYiHIkpg",
    authDomain: "contactform-f12c8.firebaseapp.com",
    databaseURL: "https://contactform-f12c8.firebaseio.com",
    projectId: "contactform-f12c8",
    storageBucket: "contactform-f12c8.appspot.com",
    messagingSenderId: "589420758377",
    appId: "1:589420758377:web:6c47d848437055bdb469f8",
    measurementId: "G-QSZSW4K4VH"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

firebase.initializeApp(config);


// Reference messages collection
var messagesRef = firebase.database().ref('messages');

document.getElementById('contactForm').addEventListener('submit', submitForm);

// submit form
function submitForm(e){
    e.preventDefault();

    var name = getInputVal('name');
    var company = getInputVal('company');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var message = getInputVal('message');

    // save message
    saveMessage(name, company, email, phone, message);

    // show alert
    document.querySelector('.alert').style.display = 'block';

    // hide alert after 3 sec
    setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
    }, 3000);

    // clear form
    document.getElementById('contactForm').reset();
}

// function to get form valid
function getInputVal(id){
    return document.getElementById(id).value;
}

// function to save messages to firebase
function saveMessage(name, company, email, phone, message){
    var newMesageRef = messagesRef.push();
    newMesageRef.set({
        name: name,
        company: company,
        email: email,
        phone: phone,
        message: message
    });
}