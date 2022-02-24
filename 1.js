var SpeechRecognition=window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();


function n9(){
  document.getElementById("cow").innerHTML='CORRECT!!!';
  window.location="setest";
  speak();
  }

function speak(){
  var synth=window.speechSynthesis;
  speak_data="CORRECT";
var utterThis=new SpeechSynthesisUtterance(speak_data);
synth.speak(utterThis);
}

function n5(){
  
  document.getElementById("cow").innerHTML='WRONG TRY AGAIN';
  speak5();
}
function speak5(){
  var synth=window.speechSynthesis;
  speak_data="wrong try again";
var utterThis=new SpeechSynthesisUtterance(speak_data);
synth.speak(utterThis);
}

function n3(){
  document.getElementById("cow").innerHTML='WRONG TRY AGAIN';
}
