var salsaGeneral;
var JennyBedstuyTSdraw;

//var words = ["direct", "one", "blessin'", "sunrise", "darkest", "feeling", "two", "slowly", "fit me", "nibble", "ears", "Baby",
  //"lie", "three", "arms", "silence", "hours", "stare", "body", "loving", "kiss", "four", "error", "feelings", "asleep", "illogical","imagine", "five","six","seven"
//];

var link;
//VARIABLES FOR AUDIO
//var JennyBedstuyDraw;
var JennyBedstuyAudio;
var mySound;

//POSITIONS FOR THE VOICES
var DeliPosition;
var Subway1Position;
var Subway2Position;
var Subway3Position;
var Subway4Position;
var LaundryPosition;
var JennyPosition;
var ParkPosition;
var value = 0;
var canvas;


function preload() {
  //loading the sounds that will sound when mouse over the particular draw;
  //mySound = loadSound('./Assets/SC_sounds_MP3_interviews/Deli01.mp3');
  //MapDraw=loadImage("./Assets/Images for Web/Map_color_1920x1415.png");
  //console.log("is this image loading");
  //JennyBedstuyAudio=loadSound("./Assets/SC_sounds_MP3_interviews/Jenny01.mp3");
  //console.log("is this sound loading?");
  //DeliAudio=loadSound("./Assets/SC_sounds_MP3_interviews/Deli01.mp3");
  //LaundryAudio=loadSound("./Assets/SC_sounds_MP3_interviews/Laundry01.mp3");
  // Get the most recent earthquake in the database
 //var commu_words_JsonFile = './commuWords.json';

}

function setup() {
  JennyBedstuyDraw=select("#JennyBedstuy");
  console.log("IS THIS IMAGE LOADING????");

  console.log("IS THIS ellipse display????");
  //JennyBedstuyDraw.mouseOver(playVoice);
  //ellipse (200,200,200,200);

}

function draw() {
  //var cnv = createCanvas(windowWidth,windowHeight);
  //background(255,0,0);

  //positioning the canvas UP.
  //var x = (windowWidth - width) / 2;
  //var y = (windowHeight - height) / 2;
  //cnv.position(x, y+144);

  // DisplayingMapDraw for Background
  /*image(MapDraw, 0, 0);
  DeliPosition= rect(890,755,85,50);
  Subway1Position= rect(7,33,335,88);
  Subway2Position= rect(380,28,480,92);
  Subway3Position= quad(900, 60, 1410, 155, 1410, 250, 900, 155 );
  Subway4Position=quad(1440, 180, 1790, 235, 1790, 340, 1440, 270 );
*/

}

/*function mousePressed() {

 //JennyBedstutLineTS.setVolume(0.1);
 //JennyBedstutLineTS.play();

  //randomWord();

}

/*function randomWord() {
  console.log("hello");
  //textFont(helvetica,[28])
  textSize(27);
  fill(random(213,153),random(43,93),random(32,34));
  text(words[floor(random(0,25))], random(50,900), random(50,750));
  //text(numbers[floor(random(0,6))], random(100,900), random(100,900));
}

/*function playVoice() {
  mySound.setVolume(0.1);
  mySound.play();
  noloop();
  mySound.pause()
    mySound.stop()
} */
