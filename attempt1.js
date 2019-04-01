// An Array of Bubble objects
var bubbles;
// A Table object
var table;
//A data object
var data;

function preload() {
  data = loadJSON("data/policy_data.json");
  console.log("preload")
  
}

function setup() {
  createCanvas(800, 800);
  loadData();
  background(0);
  console.log("setup")
}

function draw() {
  // Display all bubbles
  for (var i = 0; i < bubbles.length; i++) {
    bubbles[i].display();
    bubbles[i].rollover(mouseX, mouseY);
    console.log("for.loop.display.draw")
  }

}

function loadData() {

  // The size of the array of Bubble objects is determined by the total number of rows in the CSV
  bubbles = []; 
  data = {};
  var bubbleData = data.policy_data;
  console.log("loadData")


  // You can access iterate over all the rows in a table
  for (var i = 0; i < bubbleData.length; i++) {

        var x = bubbleData[i].x;
        var y = bubbleData[i].y;
        var d = bubbleData[i].diameter;
        var n = bubbleData[i].name;
        var r = bubbleData[i].r;
        var g = bubbleData[i].g;
        var b = bubbleData[i].b;
        var e = bubbleData[i].explain;
        console.log("for.loop.loadData")

      
    // Make a Bubble object out of the data read
    bubbles[i] = new Bubble(x, y, d, n, r, g, b, e);
  }
}

class Bubble {
    constructor(x, y, diameter, s, r, g, b, e) {
      this.x = Number(x);
      this.y = Number(y);
      this.diameter = Number(diameter);
      this.name = s;
      this.r = Number(r);
      this.g = Number(g);
      this.b = Number(b);
      this.e = e;
      this.over = false;
      console.log("bubble.class")
    }

  // Checking if mouse is over the Bubble
  rollover(px, py) {
    var d = dist(px, py, this.x, this.y);
    if (d < this.r) {
      this.over = true;
    } else {
      this.over = false;
      console.log("rollover")
    }
  }

  // Display the Bubble
  display() {
    stroke(50);
    strokeWeight(2);
    fill(this.r, this.g, this.b);
    ellipse(this.x, this.y, this.diameter, this.diameter);
    textAlign(CENTER);
    noStroke();
    fill(120);
    text(this.name, this.x-this.diameter/4, this.y-this.diameter/4)
    if (this.over) {
      fill(255);
      rect(this.x+this.diameter, this.y+this.diameter, 200, 400);
      textAlign(CENTER);
      noStroke();
      fill(120);
      text(this.e, this.x, this.y + this.diameter/2 + 20);
      console.log("display")
    }
  }
}