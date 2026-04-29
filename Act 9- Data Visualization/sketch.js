//I made a bar graph on weather all the data here is from a reliable source.
//no fake information according to the requirements.
let table;

function preload(){
  table = loadTable('weather.csv','csv','header');
}

function setup() {
  createCanvas(500,400);
  background(120,162,210);

  let barWidth = 32;
//storing data from excel sheet it will get the string/text for "type" and numeric data for "events".
  for(let i=0; i<table.getRowCount(); i++){

    let type = table.getString(i,'Type');
    let events = table.getNum(i,'Event');

    let x = 20 + i*(barWidth+27);

    let h = map(events,0,10,0,height);

    fill(254,255,175);
    rect(x,height-h-30,barWidth,h);
//alignment of text
    fill(0);
    textAlign(CENTER);
    textSize(10);

    text(type,x+barWidth/2,height-15);
    text(events,x+barWidth/2,height-50);
  }
}