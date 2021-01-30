var canvas;
var gameState = 0,
    contestantCount = 0,
    database, quiz, question, contestant;
var allContestants = [];
var answer;

function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}

function draw(){
 // background("pink");

  if(contestantCount === 4){
    quiz.update(1)
  }

  if(gameState === 1){
    quiz.play()
  }
  
}
