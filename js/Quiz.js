class Quiz{
    constructor(){

    }

    getState(){
        var gameStateRef = database.ref("gameState")
        gameStateRef.on("value",(data)=>{
            gameState = data.val()
        })
    }

    update(state){
        database.ref('/').update({
            gameState : state 
        })
    }

    async start(){
        if(gameState === 0){
            contestant = new Contestant();
            var contestantCountRef = await database.ref('contestantCount').once("value");
            if(contestantCountRef.exists()){
                contestantCount = contestantCountRef.val();
                contestant.getCount();
            }
            question = new Question();
            question.display();
        }
    }

    play(){
        question.hide()
        background("pink")
        textSize(25)
        fill("blue")
        text("Result of the quiz.",340,220)
        Contestant.getContestantInfo()
        if(allContestants !== undefined){
            var display_answers = 230
            textSize(15)
            fill("orange")
            text("NOTE : Contestant who answered correct there names are in green color.",150,240)
            for (var plr in allContestants){
                var correctAnswer = "2"
                if(correctAnswer === allContestants[plr].answer){
                    fill("green")
                }else {
                    fill("red")
                }
                display_answers+=30
                textSize(15)
                text(allContestants[plr].name+" : "+allContestants[plr].answer,150,display_answers)
            }
        }
    }
    
}