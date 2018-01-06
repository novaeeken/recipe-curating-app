$(document).ready(function() {

	// store the question and all answer elements in a variable so they are globally accessable 
	let Q1question = $(".input-preview-Q1"),
		Q2question = $(".input-preview-Q2"),
		Q3question = $(".input-preview-Q3"),
		Q4question = $(".input-preview-Q4"),
		Q5question = $(".input-preview-Q5"),
		Q1answers = $(".input-Q1"),
		Q2answers = $(".input-Q2"),
		Q3answers = $(".input-Q3"),
		Q4answers = $(".input-Q4"),
		Q5answers = $(".input-Q5");

	//hide all answers to all questions
	let allAnswers = new TimelineMax();
	allAnswers.set(Q1answers, {scale: 1.2, alpha: 0})
	.set(Q2answers, {scale: 1.2, alpha: 0}) 
	.set(Q3answers, {scale: 1.2, alpha: 0})
	.set(Q4answers, {scale: 1.2, alpha: 0})
	.set(Q5answers, {scale: 1.2, alpha: 0})


	// PRESET FUNCTIONS

	function moveAnswers(answers, stagger, scale, alpha) {
		// when the question is active, give the answers a class of unhidden
		answers.toggleClass("unhidden");

		// make questions appear or disappear 
		TweenMax.staggerTo(answers, stagger, {
			scale: scale,
			alpha: alpha,
			ease: Elastic.easeOut
		}, .1); 
	};

	function animateAnswers(tlanswers, question, answer_siblings, clickedObject, dataClickedObject) {
		// after clicked on option, remove class active for all other fields  
		answer_siblings.removeClass("active");

		// make other answers dissapear and move the chosen one up
		tlanswers.to(answer_siblings, .25, {
			alpha: 0
		})
		.to(clickedObject, .25, {
			scale: 1.2
		})
		.to(clickedObject, .25, {
			top: 0,
		})
		.set(question, {
			display: "none"
		})
		.to(clickedObject, .25, {
			scale: 1,
		})
		.to(clickedObject, .5, {
			backgroundColor: "#ffffff"
		})
		.set(question, {
			color: "#fff",
			text: dataClickedObject,
			display: "block"
		})
		.to(clickedObject, .25, {
			alpha: 0
		})
	}

/* ---------------------------------------------------------------------------
	QUESTION ONE
------------------------------------------------------------------------------*/

	// when the question is clicked 
	Q1question.on("click", function(){
	
		// store the complete Q1 object in a variable
		let clicked = $(this);
		// make the question-section active
		clicked.toggleClass("active");
		
		if(clicked.hasClass("active")){
			// make the answers appear
 			moveAnswers(Q1answers, 1.25, 1, 1);
		} else {
			// make the answers go away 
			moveAnswers(Q1answers, 1, 1.2, 0);
		}
	});

	// When one of the answer-entries is clicked 
	Q1answers.on("click", function() {

		let tlQ1answers = new TimelineMax({
			onComplete: done
		});

		// store the specific clicked element into 'clicked'
		let clicked = $(this),
			// store the others into the variable 'siblings'
			siblings = clicked.siblings(".input"),
			// store the actual value of the clicked answer
			data = clicked.data("val"),
			top = clicked.css("top");

		// after clicked on option, remove class active for all other fields and move chosen one up  
		animateAnswers(tlQ1answers, Q1question, siblings, clicked, data);

		// make question section look non-active
		function done() {
			Q1question.removeClass("active");
			// make the chosen answer the active preview
			clicked.css("top", top).addClass("active");

			TweenMax.set(Q1answers, {
				scale: 1.2,
				alpha: 0,
				backgroundColor: "#fff"
			});
		}
	});

/* ---------------------------------------------------------------------------
	QUESTION TWO
------------------------------------------------------------------------------*/


	Q2question.on("click", function(){
	
		let clicked = $(this);
		clicked.toggleClass("active");
		
		if(clicked.hasClass("active")){
 			moveAnswers(Q2answers, 1.25, 1, 1);
		} else {
			moveAnswers(Q2answers, 1, 1.2, 0);
		}
	});

	Q2answers.on("click", function() {

		let tlQ2answers = new TimelineMax({
			onComplete: done
		});

		let clicked = $(this),
			siblings = clicked.siblings(".input"),
			data = clicked.data("val"),
			top = clicked.css("top");

		animateAnswers(tlQ2answers, Q2question, siblings, clicked, data);

		function done() {
			Q2question.removeClass("active");
			clicked.css("top", top).addClass("active");

			TweenMax.set(Q2answers, {
				scale: 1.2,
				alpha: 0,
				backgroundColor: "#fff"
			});
		}
	});

/* ---------------------------------------------------------------------------
	QUESTION THREE
------------------------------------------------------------------------------*/

	Q3question.on("click", function(){
	
		let clicked = $(this);
		clicked.toggleClass("active");
		
		if(clicked.hasClass("active")){
 			moveAnswers(Q3answers, 1.25, 1, 1);
		} else {
			moveAnswers(Q3answers, 1, 1.2, 0);
		}
	});

	Q3answers.on("click", function() {

		let tlQ3answers = new TimelineMax({
			onComplete: done
		});

		let clicked = $(this),
			siblings = clicked.siblings(".input"),
			data = clicked.data("val"),
			top = clicked.css("top");

		animateAnswers(tlQ3answers, Q3question, siblings, clicked, data);

		function done() {
			Q3question.removeClass("active");

			clicked.css("top", top).addClass("active");

			TweenMax.set(Q3answers, {
				scale: 1.2,
				alpha: 0,
				backgroundColor: "#fff"
			});
		}
	});

/* ---------------------------------------------------------------------------
	QUESTION FOUR
------------------------------------------------------------------------------*/

	Q4question.on("click", function(){
	
		let clicked = $(this);
		clicked.toggleClass("active");
		
		if(clicked.hasClass("active")){
 			moveAnswers(Q4answers, 1.25, 1, 1);
		} else {
			moveAnswers(Q4answers, 1, 1.2, 0);
		}
	});

	Q4answers.on("click", function() {

		let tlQ4answers = new TimelineMax({
			onComplete: done
		});

		let clicked = $(this),
			siblings = clicked.siblings(".input"),
			data = clicked.data("val"),
			top = clicked.css("top");

		animateAnswers(tlQ4answers, Q4question, siblings, clicked, data);

		function done() {
			Q4question.removeClass("active");
			clicked.css("top", top).addClass("active");

			TweenMax.set(Q4answers, {
				scale: 1.2,
				alpha: 0,
				backgroundColor: "#fff"
			});
		}
	});

/* ---------------------------------------------------------------------------
	QUESTION FIVE
------------------------------------------------------------------------------*/

	Q5question.on("click", function(){
	
		let clicked = $(this);
		clicked.toggleClass("active");
		
		if(clicked.hasClass("active")){
 			moveAnswers(Q5answers, 1.25, 1, 1);
		} else {
			moveAnswers(Q5answers, 1, 1.2, 0);
		}
	});

	Q5answers.on("click", function() {

		let tlQ5answers = new TimelineMax({
			onComplete: done
		});

		let clicked = $(this),
			siblings = clicked.siblings(".input"),
			data = clicked.data("val"),
			top = clicked.css("top");

		animateAnswers(tlQ5answers, Q5question, siblings, clicked, data);

		function done() {
			Q5question.removeClass("active");
			clicked.css("top", top).addClass("active");

			TweenMax.set(Q5answers, {
				scale: 1.2,
				alpha: 0,
				backgroundColor: "#fff"
			});
		}
	});
});