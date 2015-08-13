//TODO SET UP A FILE THAT BUILDS THE MARKUP LANGUAGE DYNAMICALLY AS PART OF THE CONSTRUCTOR!

//SET ID'S TO CLASS UNIQUE, BOTH IN js AND HTML.

//TODO Build this as an object that can instantiate

//TODO This will use mastertempo temporarily and it will be pushed into master project

//TODO merge relevant methods from synth class to this project, move all sequencer methods


//TODO fix the timing
//TODO add pregain for volume sliders




var context = getContext();

var playing = false;

var osc = new Oscillator();
var osc2 = new Oscillator();

osc.setPreAmpGain(1000);
osc2.setPreAmpGain(1000);

osc.setGain(document.getElementById("osc1Gain").value);
osc2.setGain(document.getElementById("osc2Gain").value);

osc.setWaveForm(document.querySelector('input[name="osc1Led"]:checked').getAttribute("data-waveform"));
osc2.setWaveForm(document.querySelector('input[name="osc2Led"]:checked').getAttribute("data-waveform"));

osc.setOctave(document.querySelector('input[name="osc1OctLed"]:checked').getAttribute("data-position") - 1);
osc2.setOctave(document.querySelector('input[name="osc2OctLed"]:checked').getAttribute("data-position") - 1);

console.log(osc.octave);

function toneGen(oscillator, noteKey, gain)
{
   var freq = calculateFrequency(noteKey + (oscillator.octave * 12));

   freq = calculateFineTune(oscillator.fineTune, freq);

   oscillator.createOscillator();
   oscillator.setFreq(freq);
   oscillator.instance.start(0);
}


function start(noteKey,e) {
   //console.log(e.id);

   //e.className = e.className + " keyDown";
   //event.cancelBubble = true;

   //if(e.id.substring(1,1) == "#")
   //{
   //   document.getElementById(e.id.substring(0,1) + e.id.substring(2,1)).className = "white";
   //}

   //console.log(noteKey);
   if(!playing) {
      playing = true;

      toneGen(osc,noteKey);
      toneGen(osc2,noteKey);
   }
}

function stop(e)
{
   //e.className = e.className.substring(0,5) == "white" ? "white" : "black";

   playing = false;
   //setVolume(0);


   osc.instance.stop();
   osc.gainNode.disconnect();
   osc2.instance.stop();
   osc2.gainNode.disconnect();

}

function calculateFrequency(noteKey)
{
   var concertPitch = 440;
   var A4Key = 49;
   var a = Math.pow(2,(1/12));
   return Math.pow(a,(noteKey - A4Key)) * concertPitch;
}


function calculateFineTune(fineTune, freq)
{
   var pos, positive;
   if(-fineTune>0)
   {
      pos = -fineTune; //Is made positive
      positive = false;

   }
   else
   {
      pos = fineTune; //Already Positive
      positive = true;
   }

   var percentage = freq * (pos/100);
   freq = positive ? freq + percentage : freq - percentage;

   //console.log(fineTune + " " +  freq + "hz before | " + (parseFloat(freq) + parseInt(fineTune)) + "hz after");
   return freq;
}


document.addEventListener('DOMContentLoaded', function ()
{
   document.getElementById("osc1Gain").addEventListener("change", setGain);
   document.getElementById("osc2Gain").addEventListener("change", setGain);

   document.getElementById("osc1FineTune").addEventListener("change", setFineTune);
   document.getElementById("osc2FineTune").addEventListener("change", setFineTune);

   window.addEventListener("keydown",handleKeyPress,false);
   window.addEventListener("keyup",handleKeyPress,false);
});


function handleKeyPress(e)
{
   var keyCode = e.which;
   var id = null;
   var key = null;
   console.log(e, keyCode, e.which);

   switch(keyCode)
   {

      case 90:    key = 28;     break;
      case 83:    key = 29;    break;
      case 88:    key = 30;     break;
      case 68:    key = 31;     break;
      case 67:    key = 32;    break;
      case 86:    key = 33;    break;
      case 71:    key = 34;    break;
      case 66:    key = 35;    break;
      case 72:    key = 36;     break;
      case 78:    key = 37;    break;
      case 74:    key = 38;     break;
      case 77:    key = 39;    break;
      case 188:   key = 40;     break;

      case 81:    id = "A2";     break;
      case 50:    id = "A#2";    break;
      case 87:    id = "B2";     break;
      case 69:    id = "C3";     break;
      case 52:    id = "C#3";    break;
      case 82:    id = "D3";     break;
      case 53:    id = "D#3";    break;
      case 84:    id = "E3";     break;
      case 89:    id = "F3";     break;
      case 55:    id = "F#3";    break;
      case 85:    id = "G3";     break;
      case 56:    id = "G#3";    break;
      case 73:   id = "A3";     break;

      default:
   }

   //var el = document.getElementById(id);

   if(key != null)
   {

      if(e.type == "keydown")
      {
         start(key);

         //el.onmousedown();
         //el.className = el.className.substring(0,5) + " keyDown";
      }
      else
      {
         stop();
         //el.onmouseup();
         //el.className = el.className.substring(0,5);
      }
   }


}




//--------------------------Getters And Setters--------------------------//



function setGain(e)
{
   var oscillator = this.getAttribute("data-osc");

   switch(oscillator)
   {
      case "1":
         osc.setGain(this.value);
         break;
      case "2":
         osc2.setGain(this.value);
         break;
      default:
   }
}

function setFineTune(e)
{
   var oscillator = this.getAttribute("data-osc");

   switch(oscillator)
   {
      case "1":
         osc.setFineTune(this.value);
         console.log(osc.fineTune);
         break;
      case "2":
         osc2.setFineTune(this.value);
         break;
      default:
   }
}

function setOctave(e)
{
   var oscillator = e.getAttribute("data-osc");
   var position = parseInt(document.querySelector('input[name="osc' + oscillator + 'OctLed"]:checked').getAttribute("data-position"));
   var newPosition = position < 2 ? (position + 1) : 0;
   newPosition = e.id.substring(0,7) == "osc" + oscillator + "Oct" ?  position : newPosition;

   var octaves = [-1,0,+1];

   switch(oscillator)
   {
      case "1":
         osc.setOctave(newPosition - 1);
         console.log("osc1 " + osc.octave);
         break;
      case "2":
         osc2.setOctave(newPosition - 1);
         console.log("osc2 " + osc2.octave);
         break;
      default:
   }

   id = "osc" + oscillator + "OctLed" + newPosition;

   document.getElementById(id).checked = true;
}



function setWaveForm(e)
{
   var oscillator = e.getAttribute("data-osc");
   var position = parseInt(document.querySelector('input[name="osc' + oscillator + 'Led"]:checked').getAttribute("data-position"));


   var newPosition = position < 3 ? (position + 1) : 0;
   newPosition = (e.id.substring(0,7) == "osc" + oscillator + "Led") ?  position : newPosition;

   var waves = ["sine","square","sawtooth","triangle"];


   switch(oscillator)
   {
      case "1":
         osc.setWaveForm(waves[newPosition]);
         console.log("osc1 " + osc.waveForm);
         break;
      case "2":
         osc2.setWaveForm(waves[newPosition]);
         console.log("osc2 " + osc2.waveForm);
         break;
      default:
   }

   id = "osc" + oscillator + "Led" + newPosition;

   document.getElementById(id).checked = true;

}




































var step_columns = [];
var gain_columns = [];
var loop_columns = [];
var i, j,k, column, noteMouseDown, gainMouseDown, ctrlDown, isPlaying, timer;

var currentPatternBank = 0;
var currentPattern = 0;
var currentOctave = 3;

var masterTempo = 120; //Push up to main program.
var loopLength = 16;

var patterns = [];
for(i=0;i<4;i++)
{
   var patternBank = [];
   for(j=0;j<8;j++)
   {
      var pattern = [];
      for(k=0;k<32;k++)
      {
         var noteBank = [28,40];
         pattern.push(noteBank);
      }
      patternBank.push(pattern);
   }
   patterns.push(patternBank);
}

//TODO | Add play button
//TODO | Control by master Tempo {futurability}
//TODO | Add note Tie

console.log(patterns);
console.log(patterns[0][0][0]);

for (i = 0; i < 32; i++)
{
   //Set Up Note Buttons
   column = document.createElement("div");
   column.className = "column";
   for (j = 0; j < 13; j++)
   {
      column.innerHTML = '<div class="grid_button">' +
      '<input id="note' + i + "_" + j + '" type="radio" class="grid_button" data-column="'+ i +'" data-note="' + (j + 1) + '" name="note' + i + '" onclick="storeNote(this)" onchange="storeNote(this)">' +
      '<label for="note' + i + "_" + j + '" onmouseover="mouseOverButton(this)"></label>' +
      '</div>' + column.innerHTML;
   }
   step_columns[i] = column;


   //Set Up Gain Sliders
   column = document.createElement("div");
   column.className = "column";

   column.innerHTML = '<div id="gain'+ i +'">';

   for(j=10;j>=0;j--)
   {
      column.innerHTML += '<div class="gainLabel">' +
      '<input type="radio" id="gain'+ i + "_" + (j*10) +'"  name="gain'+ i +'"  data-percentage="'+ (j*10) +'" data-column="'+ i +'">' +
      '<label class="gain_radio_label" for="gain'+ i + "_" + (j*10) +'" data-percentage="'+ (j*10) +'" data-column="'+ i +'" onmouseover="storeAndSetGain(this)" onclick="storeAndSetGain(this)"><span id="gainSpan'+ i + "_" + (j*10) +'"></span></label>' +
      '</div>';
   }
   column.innerHTML += '</div>';

   gain_columns[i] = column;

   //Set Up Gain Sliders
   column = document.createElement("div");
   column.className = "column";
   column.innerHTML = '<input id="keyNumber' + i + '" type="text" disabled class="loopField">';

   loop_columns[i] = column;
}

/**
 * Set the Keys for the Keyboard Helper
 */
for(i=13;i>0;i--)
{
   if(i==2 || i==4 || i==7 || i==9 || i==11)
   {
      document.getElementById("keys").innerHTML += '<div class="blackKey"></div>';
   }
   else
   {
      document.getElementById("keys").innerHTML += '<div class="whiteKey"></div>';
   }
}


for (i = 0; i < 32; i++)
{
   document.getElementById("loops").appendChild(loop_columns[i]);
   document.getElementById("steps").appendChild(step_columns[i]);
   document.getElementById("gains").appendChild(gain_columns[i]);
}



/**
 * Functions
 */

function setLoopBar()
{
   var loopLength = document.getElementById("loopLength").value;

   for (i = 0; i < loopLength; ++i)
   {
      document.getElementById("keyNumber" + i).style.background = "chartreuse";
      document.getElementById("keyNumber" + i).style.color = "chartreuse";
   }

   for(i=loopLength; i<32;++i)
   {
      document.getElementById("keyNumber" + i).style.background = "black";
      document.getElementById("keyNumber" + i).style.color = "black";
   }
}

function setLoopSpinner()
{
   document.getElementById("loopLength").value = loopLength;
}

function setNoteColors()
{

   for(i=0;i<32;i++)
   {
      if(document.querySelector('input[name="note'+ i +'"]:checked') !=  null)
      {
         document.querySelector('input[name="note'+ i +'"]:checked').checked = false;
      }

      var storedNote = patterns[currentPatternBank][currentPattern][i][0];
      var octave = Math.floor(((storedNote-4) + 12)/12);
      var note = storedNote - 4 - (12 * octave) + 12;

      if(currentOctave == octave)
      {
         document.getElementById("note"+i+"_"+note).checked = true;
      }
      if(currentOctave == octave - 1 && note == 0)
      {
         document.getElementById("note"+i+"_"+(note+12)).checked = true;
      }

   }
}
function setGainColors()
{

   for(i=0;i<32;i++)
   {
      var storedGain = patterns[currentPatternBank][currentPattern][i][1];

      document.getElementById("gain"+i+"_"+storedGain).checked = true;

      var column = i;
      var percentage = parseInt(storedGain);


      document.getElementById("gain" + column + "_" + percentage).checked = true;

      if(document.getElementById("gainSpan"+ column + "_" + 100).style.background = "chartreuse")
      {
         document.getElementById("gainSpan"+ column + "_" + 100).style.background = "black";
      }
      for(j=percentage;j>=0;j-=10)
      {
         document.getElementById("gainSpan"+ column + "_" + j).style.background = "chartreuse";
      }
      for(j=percentage;j<100;j+=10)
      {

         document.getElementById("gainSpan"+ column + "_" + j).style.background = "black";
      }
   }
}


function storeNote(e, column, notePos)
{
   if(e.id == "")
   {
      e.setAttribute("data-note", notePos);
      e.setAttribute("data-column", column);
   }

   var oct = parseInt(document.getElementById("octaveRange").value);
   var note = parseInt(e.getAttribute("data-note"));

   var noteKey = note + 3 + (12 * oct) - 12;

   document.getElementById("keyNumber" + e.getAttribute("data-column")).setAttribute("data-storedNote", noteKey);

   patterns[currentPatternBank][currentPattern][e.getAttribute("data-column")][0] = noteKey;

}

function mouseOverButton(e)
{
   if(noteMouseDown)
   {
      e = document.getElementById(e.getAttribute("for"));
      e.checked = true;
      storeNote(e);
   }
}


//function handleKeyPress(e)
//{
//   if(e.type == "keydown")
//   {
//      if(e.which == 17)
//      {
//         ctrlDown = true;
//      }
//   }
//   else
//   {
//      if(e.which == 17)
//      {
//         ctrlDown = false;
//      }
//   }
//}

function setPattern(e)
{
   stopPlaying();
   document.getElementById("seqPatternLed" + e.getAttribute("data-position")).checked = true;
   currentPattern = e.getAttribute("data-position") - 1;
   setNoteColors();
   setGainColors();
}

function setPatternBank(e)
{
   document.getElementById("seqPatternBankLed" + e.getAttribute("data-position")).checked = true;
   currentPatternBank = e.getAttribute("data-position") - 1;
   currentPattern = 0;
   document.getElementById("seqPatternLed1").checked = true;
   setNoteColors();
   setGainColors();
}


function storeAndSetGain(e, mousePress)
{
   var column = e.getAttribute("data-column");
   var percentage = parseInt(e.getAttribute("data-percentage"));

   if(gainMouseDown || mousePress)
   {
      stopPlaying();
      document.getElementById("gain" + column + "_" + percentage).checked = true;

      if(document.getElementById("gainSpan"+ column + "_" + 100).style.background = "chartreuse")
      {
         document.getElementById("gainSpan"+ column + "_" + 100).style.background = "black";
      }
      for(i=percentage;i>=0;i-=10)
      {
         document.getElementById("gainSpan"+ column + "_" + i).style.background = "chartreuse";
      }
      for(i=percentage;i<100;i+=10)
      {
         document.getElementById("gainSpan"+ column + "_" + i).style.background = "black";
      }
      patterns[currentPatternBank][currentPattern][column][1] = percentage;
   }
}


function play()
{
   isPlaying = true;
   beatLength = ((60 / masterTempo) / loopLength)*10000;
   document.getElementById("playButton").className = "pressed";
   //Do play functions here

   start(28);
   stop();

   i=0;

   function myTimeoutFunction()
   {
      doStuff(i);
      if(i<loopLength-1)
      {
         i++;
      }
      else
      {
         i=0;
      }
   }

   //myTimeoutFunction();
   timer = setInterval(myTimeoutFunction, beatLength);


   function doStuff(noteKey)
   {
      stop();
      osc.setPreAmpGain(patterns[currentPatternBank][currentPattern][i][1] * 10);
      osc2.setPreAmpGain(patterns[currentPatternBank][currentPattern][i][1] * 10);
      //osc2.setPreAmpGain(1000);
      start(patterns[currentPatternBank][currentPattern][i][0]);
      document.getElementById("keyNumber" + i).style.background = "blue";

      var key = (i==0)?loopLength-1:i-1;
      document.getElementById("keyNumber" + key).style.background = "chartreuse";
      //console.log(patterns[currentPatternBank][currentPattern][i][0]);
   }
}

function stopPlaying()
{
   stop();
   document.getElementById("playButton").className = "";
   for(i=0;i<loopLength;i++)
   {
      document.getElementById("keyNumber" + i).style.background = "chartreuse";
   }

   clearInterval(timer);
   isPlaying = false;
}

function checkIfPlaying()
{
   if(!isPlaying)
   {
      play();
   }
   else
   {
      stopPlaying();
   }
}

/**
 * Listeners To Be Added After Dom Content Load
 */
document.addEventListener('DOMContentLoaded', function ()
{
   setLoopBar();


   document.getElementById("spinnerUp").onmousedown = function ()
   {
      if(document.getElementById("loopLength").value < 32)
      {
         document.getElementById("loopLength").value++;
         setLoopBar();
         loopLength = document.getElementById("loopLength").value;
      }
      stopPlaying();
   };

   document.getElementById("spinnerDown").onmousedown = function ()
   {
      if(document.getElementById("loopLength").value > 0)
      {
         document.getElementById("loopLength").value--;
         setLoopBar();
         loopLength = document.getElementById("loopLength").value;
      }
      stopPlaying();
   };

   document.getElementById("loop8").onmousedown = function ()
   {
      document.getElementById("loopLength").value = 8;
      setLoopBar();
      loopLength = 8;
      stopPlaying();
   };

   document.getElementById("loop16").onmousedown = function ()
   {
      document.getElementById("loopLength").value = 16;
      setLoopBar();
      loopLength = 16;
      stopPlaying();
   };

   document.getElementById("loop32").onmousedown = function ()
   {
      document.getElementById("loopLength").value = 32;
      setLoopBar();
      loopLength = 32;
      stopPlaying();
   };

   document.getElementById("steps").onmousedown = function ()
   {
      noteMouseDown = true;
   };

   document.getElementById("steps").onmouseup = function ()
   {
      noteMouseDown = false;
   };
   document.getElementById("gains").onmousedown = function ()
   {
      gainMouseDown = true;
   };

   document.getElementById("gains").onmouseup = function ()
   {
      gainMouseDown = false;
   };

   document.getElementById("steps").onmouseleave = function ()
   {
      noteMouseDown = false;
   };

   window.addEventListener("keydown",handleKeyPress,false);
   window.addEventListener("keyup",handleKeyPress,false);



   document.getElementById("octaveRange").onchange = function()
   {
      currentOctave = this.value;
      setNoteColors();
      setGainColors();
   };

   setNoteColors();

   setGainColors();
   setLoopSpinner();
});
