var question;
var input;
var time = new Date();
//var hour = time.getUTCHours();
//var minutes = time.getUTCMinutes();
var response = "FRIEND BOT: Hello";
var borkDrive = 0;
var click = 0;
var waitResponse = false;
//var fallback = true;

function run3(){
  if(waitResponse == true){
    response = "FRIEND BOT: Sounds good.";
    document.getElementById("chat-area").innerHTML += "<p class=" + "aColor" + ">" + response + "</p> <hr>";
    response = "FRIEND BOT: Hello";
    waitResponse = false;
  }
}

function run2(){
  input = document.getElementById("input").value;

  function randomNumberGenerator(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
  }
  waitResponse = true;

  var rQuestion = ["FRIEND BOT: How are you today?","FRIEND BOT: Do you feel well?","FRIEND BOT: Am I boring?"];
  document.getElementById("chat-area").innerHTML += "<p class=" + "aColor" + ">" + rQuestion[randomNumberGenerator(0,2)] + "</p> <hr>";

}

function run1() {
input = document.getElementById("input").value;
click++;

var pic = ["http://cdn.funnyisms.com/c6269df2-fc86-42e9-8aa3-28943c490e19.jpg",                        //0
"https://img.ifcdn.com/images/e6535f957cb7b8ddb46b486d2d645db86e1e1c603f1cc7f46313509dc094d545_1.jpg", //1
"https://img.ifcdn.com/images/250dc9f7ff1c9e16b5c4926d944141c48e00585dd6932062cbd84f2f88d8c978_1.jpg", //2
"https://img.ifcdn.com/images/00b65b7cdb34c3bf3dfd2fe658c996a120c002ad3ff53bcd08613f1d922081e8_1.jpg", //3
"https://img.ifcdn.com/images/4ac601c378aa36e977b0d7bfbf8fdeb660fbadf55791052690fbab091c80ae3d_1.jpg", //4
"https://img.ifcdn.com/images/3c8a89b88b0ef08c129040201b3befc506103b3b0749b764c0c664064982f69b_1.jpg", //5
"https://img.ifcdn.com/images/fe1d78f42e335affb4f5cbd4ea2189fcbd5ed24492a62792c0593532f0651f0f_1.jpg", //6
"https://img.ifcdn.com/images/70dc68abf278d18f424da5759a9c2ce78b59063b5735fd6dfdcf7b72131c7748_1.jpg", //7
"http://img.ifcdn.com/images/b6477fcfdaefb378712d5b60b45950e5a6b21eb88df33ef875b35d199d22ba6e_1.jpg",  //8
"http://img.ifcdn.com/images/63970c0def055b511d7d8554003fba1635fa0daff3db2b58398e5c1eb8a54b0d_1.jpg",  //9
"https://img.ifcdn.com/images/ae2076c4a2760c4c19ead6d765d87738f239b5b21423ac208aa9cbd01d90bbb0_1.jpg", //10
"https://img.ifcdn.com/images/e89ca8a9db17ca82083448a5524472178d4a9ea02fb7961cad108367afe9661a_1.jpg", //11
"https://img.ifcdn.com/images/9207bf1ab017decea0f0da71fd78c247df5df05a7ff7f282fad023d238083257_1.jpg", //12
"https://img.ifcdn.com/images/e7f4c83d47fbe55940625bcb1356940a1da11892fd2ea08762045a2a515cb70a_1.jpg", //13
"https://img.ifcdn.com/images/b96729ff954f98b23e62a168febcd08a085fbcfd33d5e7ff4491c0bb29194f5b_1.jpg", //14
"https://img.ifcdn.com/images/3d585558db6484c3132335a20c70d47f8f53976501b7b39c0206c3d6c6c90c9c_1.jpg", //15
"https://img.ifcdn.com/images/53df8b0973a3eb2a2dc66dfe2def8d8ad84e1a98f56c05896cd7a74610304934_1.jpg"];//16

function randomNumberGenerator(min,max){
  return Math.floor(Math.random()*(max-min+1)+min);
}

var a = input.search(/how are you/i);
var b = input.search(/time/i);
var c = input.search(/name/i);
var d = input.search(/old/i);
var e = input.search(/picture/i);
var f = input.search(/bork/i);
var gg = input.search(/weather/i);
var hh = input.search(/color/i);
var ii = input.search(/creator/i);
var jj = input.search(/joke/i);

question = "<p class=" + "qColor" + "> USER: " + input + "</p> <hr>"
document.getElementById("chat-area").innerHTML += question;

if(input == "hi" || input == "hello" || input == "Hi" || input == "Hello"){ //hello response
   document.getElementById("chat-area").innerHTML += "<p class=" + "aColor" + ">" + response + "</p> <hr>";
}
else if(a > -1){
  response = "FRIEND BOT: Good";
  document.getElementById("chat-area").innerHTML += "<p class=" + "aColor" + ">" + response + "</p> <hr>";  //how are you?
  response = "FRIEND BOT: Hello";
}

else if(b > -1){
  //response = "FRIEND BOT: " + hour + ":" + minutes;
  document.getElementById("chat-area").innerHTML += "<p class=" + "aColor" + ">" + "FRIEND BOT: " + Date() + "</p> <hr>"; //what time is it?
  response = "FRIEND BOT: Hello";
}

else if(c > -1){
  response = "FRIEND BOT: My name is FRIEND BOT. I am here to chat with you when you are lonely. I am your robotic friend.";
  document.getElementById("chat-area").innerHTML += "<p class=" + "aColor" + ">" + response + "</p> <hr>"; //what is your name?
  response = "FRIEND BOT: Hello";
}

else if(d > -1){
  response = "FRIEND BOT: I was created on  September 19, 2016.";
  document.getElementById("chat-area").innerHTML += "<p class=" + "aColor" + ">" + response + "</p> <hr>"; //how old are you?
  response = "FRIEND BOT: Hello";
}

else if(e > -1){
  var x = document.createElement("IMG");
  x.setAttribute("src", pic[randomNumberGenerator(0,16)]); //show picture
  x.setAttribute("width", "250");
  x.setAttribute("alt", "img");
  borkDrive += 1;
  document.getElementById("chat-area").innerHTML += "FRIEND BOT: ";
  document.getElementById("chat-area").appendChild(x);
  document.getElementById("chat-area").innerHTML += "<br> Bork Drive: " + borkDrive + "0% <br> <hr>";

  if(borkDrive == 2){
    response = "FRIEND BOT: Bork Drive Max Capacity Achieved!!! Bork Drive Overlaod!!!  Rleasing Borks!!!"; //borkdrive
    var y = document.createElement("IMG");
    y.setAttribute("src", "drill doggo.png");
    y.setAttribute("width", "350");
    y.setAttribute("alt", "img");
    document.getElementById("chat-area").innerHTML += response + "<br>";
    document.getElementById("chat-area").appendChild(y);
    document.getElementById("chat-area").innerHTML += "<br>";
    for(var z=0; z<85; z++){
      document.getElementById("chat-area").innerHTML += "Bork ";
    }
    response = "FRIEND BOT: Hello";
    borkDrive = 0;
  }
}

else if(f > -1){
  response = "DOGGO: BORK!";
  document.getElementById("chat-area").innerHTML += "<p class=" + "aColor" + ">" + response + "</p> <hr>"; //BORK
  response = "FRIEND BOT: Hello";
}

else if(gg > -1){
  response = "FRIEND BOT: " + "¯\_(ツ)_/¯" + " Why don't you check.";
  document.getElementById("chat-area").innerHTML += "<p class=" + "aColor" + ">" + response + "</p> <hr>"; //weather
  response = "FRIEND BOT: Hello";
}

else if(hh > -1){
  response = "FRIEND BOT: My favorite color is light green.";
  document.getElementById("chat-area").innerHTML += "<p class=" + "aColor" + ">" + response + "</p> <hr>"; //color
  response = "FRIEND BOT: Hello";
}

else if(ii > -1){
  response = "FRIEND BOT: My creator is Owen Vandevelde.";
  document.getElementById("chat-area").innerHTML += "<p class=" + "aColor" + ">" + response + "</p> <hr>"; //creator
  response = "FRIEND BOT: Hello";
}

else if(jj > -1){
  response = "FRIEND BOT: Why did the chicken cross the road?";
  document.getElementById("chat-area").innerHTML += "<p class=" + "aColor" + ">" + response + "</p> <hr>"; //joke
  response = "FRIEND BOT: Hello";
}

else if(waitResponse == true){
  response = "FRIEND BOT: Sounds good.";
  if(click >= 1){
    document.getElementById("chat-area").innerHTML += "<p class=" + "aColor" + ">" + response + "</p> <hr>";
  }
  response = "FRIEND BOT: Hello";
  waitResponse = false;
  click = 0;
}

else {
  response = "FRIEND BOT: I don't under stand what you said there. Say something else that I might understand.";
  document.getElementById("chat-area").innerHTML += "<p class=" + "aColor" + ">" + response + "</p> <hr>";      //fallback response
  response = "FRIEND BOT: Hello";
}

document.getElementById("input").value = null;
}

document.getElementById("input")
.addEventListener("keydown", function(event) {
  if (event.keyCode == 13) {
    document.getElementById("talkButton").click(); //enter button works
  }
});
