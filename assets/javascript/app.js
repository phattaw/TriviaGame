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
        trivia_info: "Barbados often attempts to take Hermes wife Labarbara from him but to no avail."
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
    {
        
        question: "What did Fry's dad name him after?",
        answers: [  "Screwdriver",
                    "A King",
                    "A grandparent",
                    "An uncle"
                 ],
        trivia_info: "How about Philip after the screwdriver? Whatever, I picked dinner last night...more morphine please."
    },
    {
        
        question: "What does Professor Farnsworth say is strange about Zoidberg?",
        answers: [  "He wears sandals",
                    "He's a smelly lobster",
                    "He's a doctor",
                    "He's incompetent"
                 ],
        trivia_info: "This comes in the second episode of the series, The Series Has Landed. Dr. Zoidberg has to do a checkup on Fry and is surprised to find out that he has only one mouth."
    },
    {
        question: "What rank is the bureaucrat that runs Cookieville Minimum Security Orphanarium?",
        answers: [  "135",
                    "10",
                    "69",
                    "1"
                 ],
        trivia_info: "His badge can be read in Leela's Homeworld, season 4. It is worth noting that the man in question has not been promoted in over 20 years."
    },
    {
        question: "In 'Parasites Lost', what does Fry eat that had the parasites?",
        answers: [  "Egg Salad Sandwich",
                    "A Hot Dog",
                    "Horse Coke",
                    "Cignoid Pizza"
                 ],
        trivia_info: "He got the sandwich in a truck stop bathroom, for 25 cents at the start of the episode."
    },
    {
        question: "How much did Fry pay for Ted Danson's skeleton?",
        answers: [  "$10,000",
                    "$300,000",
                    "$1,000,000",
                    "$50"
                 ],
        trivia_info: "Leela mentions this at the auction. If he paid $300,000 that would have been plain dumb!"
    },
    {
        question: "What celebration was going on when Fry fell into the cryogenic chamber and was frozen?",
        answers: [  "New Year's Eve",
                    "Mardi Gras",
                    "Fourth of July",
                    "Christmas"
                 ],
        trivia_info: "This happened in the very first episode, Fry is frozen on New Year's Eve and stays that way for 1000 years."
    },
    {
        question: "Which of these were not on the checklist of animals that the Planet Express crew was supposed to rescue?",
        answers: [  "Nibblonian",
                    "Hermaphlamingo",
                    "Parasitic Puppy",
                    "Molotov Cockatoo"
                 ],
        trivia_info: "This was in Loves Labours Lost In Space where the Planet Express crew goes to rescue animals from a planet that is about to implode from being mined hollow. Nibbler (a Nibblonian) was not on the list, but they rescued him anyway and he ended up saving their lives."
    },
    {
        question: "Where did Fry meet Bender?",
        answers: [  "A suicide booth",
                    "Strip Club",
                    "A bar",
                    "Horse Track"
                 ],
        trivia_info: "Bender wanted to kill himself after he learned that the girders he bent were used in suicide booths."
    },
    {
        question: "What language is said to be dead in the English version of the show?",
        answers: [  "French",
                    "German",
                    "Chinese",
                    "Russian"
                 ],
        trivia_info: "The professor mentions that his universal translator can only translate into an 'obscure, dead language.' It then translates 'hello' into 'bonjour.' When the episode aired in France, the dead language was changed to German."
    },
]

var current_question;
var past_questions = [];
var current_timer_ref;
var answer_order = [];
var correct_answers = 0;

initializeGame();

function initializeGame() {
    
    correct_answers = 0;
    past_questions = trivia_questions.slice();

    let question_idx = Math.floor(Math.random() * past_questions.length);
    current_question = past_questions.splice(question_idx, 1);

    populateTriviaQuestion(current_question[0]);
    $("#trivia_info").text("");

}

function populateTriviaQuestion(trivia_ref) {
    answer_order = [];
    var answer_indexes = [0, 1, 2, 3];
    let i = 0;

    do {
        let rnd_indx = Math.floor(Math.random() * answer_indexes.length);
        let answer = answer_indexes.splice(rnd_indx, 1);
        answer_order.push(answer[0]);
        $("#answer" + i++).text(trivia_ref.answers[answer[0]]);
    
    } while(answer_indexes.length > 0);

    $("#question").text(trivia_ref.question);

}

function gameOver() {
    alert("Too slow! You were eaten by nibblonians!")
    $(".answers").hide();
}

$("#start_over").on("click", function() {
    initializeGame(1);
    clearTimeout(current_timer_ref);
    current_timer_ref = setTimeout( gameOver, 90000);
    $(".answers").show();

});

$("#answer0").on("click", function() {
    evaluate_answer(0);

});

$("#answer1").on("click", function() {
    evaluate_answer(1);

});

$("#answer2").on("click", function() {
    evaluate_answer(2);

});

$("#answer3").on("click", function() {
    evaluate_answer(3);

});

function evaluate_answer(index) {

    if(answer_order[index] === 0) {
        $("#trivia_info").text("Correct! " + current_question[0].trivia_info);
        correct_answers++;
    } else {
        $("#trivia_info").text("Wrong! " + current_question[0].answers[0] + " was the correct answer! " + current_question[0].trivia_info);
    }

    if(past_questions.length) {
        let question_idx = Math.floor(Math.random() * past_questions.length);
        current_question = past_questions.splice(question_idx, 1);
    
        populateTriviaQuestion(current_question[0]);
    
    } else {
        clearTimeout(current_timer_ref);
        $("#trivia_info").text("Congratulations for answering all the questions in 30 seconds! You got " + correct_answers + " out of " + trivia_questions.length + " right!");
        $(".answers").hide();
    }

}


