class Question{

    constructor(){
        this.title = createElement("h1");
        this.input1 = createInput("Enter Your Name Here..");
        this.input2 = createInput("Enter Correct Option..");
        this.button = createButton("SUBMIT");
        this.question = createElement("h3");
        this.option1 = createElement("h4");
        this.option2 = createElement("h4");
        this.option3 = createElement("h4");
        this.option4 = createElement("h4");
    }

    hide(){
        this.input1.hide()
        this.input2.hide()
        this.button.hide()
    }

    display(){
        this.title.html("MyQuiz Game")
        this.title.position(350,0)

        this.question.html("Question:-Which Hollywood actor has named his daughter INDIA?")
        this.question.position(150,80)
        this.option1.html("1:Chris Hemsworth")
        this.option1.position(150,100)
        this.option2.html("2:Chris Evans")
        this.option2.position(150,120)
        this.option3.html("3:Scarlett Johansson")
        this.option3.position(150,140)
        this.option4.html("4:Mark Ruffalo")
        this.option4.position(150,160)

        this.input1.position(150,230)
        this.input2.position(350,230)

        this.button.position(300,300)
        this.button.mousePressed(() => {
            this.input1.hide()
            this.input2.hide()
            this.button.hide()

            contestant.name = this.input1.value()
            contestant.answer = this.input2.value()

            contestantCount+=1
            contestant.index = contestantCount
            contestant.update()
            contestant.updateCount(contestantCount)
        })
    }
}