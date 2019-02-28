//works on firefox and chrome only
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;


//create speech recognitioin

var speecRec = new SpeechRecognition();


// speecRec.interimResults = false;
// speecRec.maxAlternatives = 1;


console.log(speecRec);





// // start recording
document.getElementById("mic").onclick = function()
{
  console.log("clicked mic")

  speecRec.start();
  console.log('Recording sound');
}







// //stop recording and log results
document.getElementById("stop").onclick = function()
{


  speecRec.stop();

  console.log("stopped recording");

}



//  change background color based on speech input
speecRec.onresult = function(event)
  {
     console.log("recieved");
    var retrivedColor = event.results[0][0].transcript;
    console.log(retrivedColor);

   document.getElementById("back").style.background = retrivedColor;

  }
