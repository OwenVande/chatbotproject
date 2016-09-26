var question;
var input;
var time = new Date();
var hour = time.getUTCHours();
var minutes = time.getUTCMinutes();
var response = "FRIEND BOT: Hello";
function run1() {
input = document.getElementById("input").value;

var a = input.search(/how are you/i);
var b = input.search(/what time is it/i);
var c = input.search(/what is your name/i);
var d = input.search(/how old are you/i);
var e = input.search(/show me a picture/i);

/*    if(hour > 12){
  hour = hour - 7;
  minutes += " AM"
}
else{
  minutes += " PM"
}     */


question = "USER: " + input + "<br>"
document.getElementById("chat-area").innerHTML += question;

if(input == "hi" || input == "hello" || input == "Hi" || input == "Hello"){ //hello response
   document.getElementById("chat-area").innerHTML += response + "<br>";
}
else if(a > -1){
  response = "FRIEND BOT: Good";
  document.getElementById("chat-area").innerHTML += response + "<br>";  //how are you?
  response = "FRIEND BOT: Hello";
}

else if(b > -1){
  //response = "FRIEND BOT: " + hour + ":" + minutes;
  document.getElementById("chat-area").innerHTML += "FRIEND BOT: " + Date() + "<br>"; //what time is it?
  response = "FRIEND BOT: Hello";
}

else if(c > -1){
  response = "FRIEND BOT: My name is FRIEND BOT. I am here to chat with you when you are lonely. I am your robotic friend."; //what is your name?
  document.getElementById("chat-area").innerHTML += response + "<br>";
  response = "FRIEND BOT: Hello";
}

else if(d > -1){
  response = "FRIEND BOT: I was created on  September 19, 2016.";
  document.getElementById("chat-area").innerHTML += response + "<br>"; //how old are you?
  response = "FRIEND BOT: Hello";
}

else if(e > -1){
  var x = document.createElement("IMG");
  x.setAttribute("src", "http://cdn.funnyisms.com/c6269df2-fc86-42e9-8aa3-28943c490e19.jpg");
  x.setAttribute("width", "350");
  x.setAttribute("alt", "img");
  document.getElementById("chat-area").innerHTML += "FRIEND BOT: ";
  document.getElementById("chat-area").appendChild(x);
  document.getElementById("chat-area").innerHTML += "<br>";
}

else{
  response = "FRIEND BOT: I don't under stand what you said there. Say something else that I might  understand.";
  document.getElementById("chat-area").innerHTML += response + "<br>"; //how old are you?
  response = "FRIEND BOT: Hello";
}

document.getElementById("input").value = null;
}
