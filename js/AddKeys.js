//=====================ADD KEYS====================//

var notes = ["A","A#","B","C","C#","D","D#","E","F","F#","G","G#"];
var note = 0;
var octave = 1;

for(var i=13;i<=49;i++)
{
   var thisNote = notes[note];
   var className = (thisNote.length > 1) ? 'black' : 'white';

   var el = "<div id='" + thisNote + octave + "' class='" + className + "' onmousedown='start("+i+",this);' onmouseup='stop(this);'><p>" + thisNote + "</p></div>";

   if(className == "white")
   {
      document.getElementById("pianoKeys").innerHTML += el;
   }
   else
   {
      //console.log(thisNote.substring(0,1) + octave);
      document.getElementById(thisNote.substring(0,1) + octave).innerHTML += el;
   }

   if(thisNote == "B")
   {
      octave ++;
   }

   if(i%12 == 0)
   {
      note = 0;
   }
   else
   {
      note++;
   }
}