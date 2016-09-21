var question;
var input;
var response = "FRIEND BOT: Hello";

function run1() {
input = document.getElementById("input").value;

var n = input.search(/how are you/i);

if(input == "hi" || input == "hello" || input == "Hi" || input == "Hello"){
   document.getElementById("chat-area").innerHTML += response + "<br>";
}
else if(n > -1){
  response = "FRIEND BOT: Good";
  document.getElementById("chat-area").innerHTML += response + "<br>";
  response = "FRIEND BOT: Hello";
}

question = "USER: " + input + "<br>"
document.getElementById("chat-area").innerHTML += question;

document.getElementById("input").value = null;
}
