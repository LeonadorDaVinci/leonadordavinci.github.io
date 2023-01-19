var scl=10;//每行每列格子数量
var inc=0.1;
var rows,cols;
var zoff=0;
var particles=[];
var flowfield;
var speed=1;//速度
//数量
let input = document.getElementById("inputBox");
//速度
let input_1 = document.getElementById("inputBox2");
//按钮
let submit = document.getElementById("submit");
submit.onmousedown = function (e) {
  //速度
  speed=parseInt(input_1.value);
  //清空数组
  particles.splice(0,particles.length);
  for(var i=0;i<parseInt(input.value);i++){
    particles[i]=new Particle();
  }
  clear();
}
function setup() {
  createCanvas(400,400);
  
  cols=floor(width/scl);
  rows=floor(height/scl);
  flowfield=new Array(cols*rows);      
  //  for(var i=0;i<500;i++){
  //    particles[i]=new Particle();
  //  }
   
  background(255);
}
function draw() {
  var yoff=0;
  for(var y=0;y<rows;y++){
  var xoff=0;
  for(var x=0;x<cols;x++){
    var index=x+y*cols;
    //乘4是为了放大噪声生成的angle值可以使粒子更加的分散
    var angle=noise(xoff,yoff,zoff)*TWO_PI*4;
     
    var v=p5.Vector.fromAngle(angle);
    v.setMag(2);
    flowfield[index]=v;
    xoff+=inc;
  }  
  yoff+=inc;
  zoff+=0.0005;
  }
  for(var i=0;i<particles.length;i++){
  particles[i].follow(flowfield);
  particles[i].update();
  particles[i].edges();
  particles[i].show();
  }
}
function Particle(){
  this.pos=createVector(random(width),random(height));//起始位置
  this.vel=createVector(0,0);//初速度
  this.acc=createVector(0,0);//初加速度
  this.maxspeed=speed;//速度上限
  this.prevPos=this.pos.copy();
  this.update=function(){
    this.vel.add(this.acc);  
    this.vel.limit(this.maxspeed);    
    this.pos.add(this.vel);     
    this.acc.mult(0);             
  }
  this.follow=function(vectors){
    var x=floor(this.pos.x/scl);
    var y=floor(this.pos.y/scl);
    var index=x+y*cols;
    var force=vectors[index];
    this.applyForce(force);
  }
  this.applyForce=function(force){
    this.acc.add(force);
  }
  this.show=function(){
    stroke(0,5);
    strokeWeight(1);
    //用线连接粒子
    line(this.pos.x,this.pos.y,this.prevPos.x,this.prevPos.y);
    this.updataPrev();
  }
  //更新上一粒子位置
  this.updataPrev=function(){
      this.prevPos.x=this.pos.x;
      this.prevPos.y=this.pos.y;
  }
  //使粒子在画布范围内
  this.edges=function(){
    if(this.pos.x<0)
    {
      this.pos.x=width;
      this.updataPrev();
    }
    if(this.pos.x>width)
    {
      this.pos.x=0;
      this.updataPrev();
    }
    if(this.pos.y<0)
    {
      this.pos.y=height;
      this.updataPrev();
    }
    if(this.pos.y>height)
    {
      this.pos.y=0;
      this.updataPrev();
    }
    
  }
}