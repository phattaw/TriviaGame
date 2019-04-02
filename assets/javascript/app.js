// Futurama trivia game


const trivia_questions = [
    {
        question: "What did Hermes represent earth for in the Olympics?",
        answers: [  "The Limbo",
                    "Wrestling",
                    "Competitive Manwich Eating",
                    "Multitasking Competition"
                 ],
        trivia_info: "He gave up doing the limbo after his biggest fan died from trying to limbo under a bar too low."
    },
    {
        question: "Who is Hermes rival?",
        answers: [  "Barbados Slim",
                    "Professor Farnsworth",
                    "Fry",
                    "Bender"
                 ],
        trivia_info: ""
    },
    {
        question: "In 'Bendin' in the Wind', what musician brings Bender on tour with him as a washboard player?",
        answers: [  "Beck",
                    "Truckstop honeymoon",
                    "Crosby, Stills and Nash",
                    "Simon and Garfunkle"
                 ],
        trivia_info: "Beck and Bender meet in the hospital, after Bender is paralyzed by the can opener."
    },
    {
        question: "What real-life person was a robot, according to Calculon?",
        answers: [  "David Duchovny",
                    "Kevin Bacon",
                    "Leonard Nimoy",
                    "Weird Al Yankovic"
                 ],
        trivia_info: " Calculon recounts about how over the years he had been all of history's greatest robot actors, Duchovny being one of them. Clark and Shatner, though not robots, appeared on the show as themselves."
    },
]

var current_question_index;
var past_question_indexes = [];
var current_timer_ref;
var answer_order = [];

initializeGame();

function initializeGame() {
    past_question_indexes = [];
    current_question_index = Math.floor(Math.random() * trivia_questions.length);

    past_question_indexes.push(current_question_index);
    populateTriviaQuestion(trivia_questions[current_question_index]);

}

function populateTriviaQuestion(trivia_ref) {
    answer_order = [];
    var answer_indexes = [0, 1, 2, 3];
    var rnd_indx;
    var answer;

    do {
        rnd_indx = Math.floor(Math.random() * answer_indexes.length);
        answer = answer_indexes.splice(rnd_indx, 1);
        answer_order.push(answer[0]);
        $("#answer" + answer[0]).text(trivia_ref.answers[answer[0]]);
    
    } while(answer_indexes.length > 0);

    $("#question").text(trivia_ref.question);

}

function gameOver() {
    alert("Too slow! You were eaten by nibblonians!")
}

$("#start_over").on("click", function() {
    initializeGame(1);
    clearTimeout(current_timer_ref);
    current_timer_ref = setTimeout( gameOver, 30000);

});

$("#answer1").on("click", function() {
    evaluate_answer(0);

});

$("#answer2").on("click", function() {
    evaluate_answer(1);

});

$("#answer3").on("click", function() {
    evaluate_answer(2);

});

$("#answer4").on("click", function() {
    evaluate_answer(3);

});

function evaluate_answer(index) {

    current_question_index = Math.floor(Math.random() * trivia_questions.length);

    past_question_indexes.push(current_question_index);

}


