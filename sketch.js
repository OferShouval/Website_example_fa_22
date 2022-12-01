//the pixel array

var video;
var videoScale = 16;
function setup() {


  createCanvas(640, 480);

  video = createCapture(VIDEO);
  video.size(width/videoScale, height/videoScale);


  background(50);

  //pixelDensity(1);


}

function draw() {
  background(0,255,100);

video.loadPixels()
// loadPixels()

for(var x = 0; x < video.width; x++){
  for(var y = 0; y < video.height; y++){

    var index = (x+y*video.width)*4;
    var r = video.pixels[index]
    var g = video.pixels[index+1]
    var b = video.pixels[index+2]
    var a = video.pixels[index+3]

    var bright = (r+g+b)/3;

    var rectSize = map(bright, 0,255,0,videoScale)

    fill(100,0,0)



    rect(x*videoScale,y*videoScale,rectSize,rectSize)



    // pixels[index] = 255; //red
    // pixels[index+1] = 0; //green
    // pixels[index+2] = 0; //blue
    // pixels[index+3] = 255;//alpha


  }

}
// updatePixels()

}
