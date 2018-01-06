//make loader screen invisible
$('.loader-wrapper').toggle();

// hide all questions and button, except Q1
$('.Q2').toggle(); 
$('.Q3').toggle(); 
$('.Q4').toggle(); 
$('.Q5').toggle();
$('#submit-btn').toggle(); 

$(document).ready(function() {

	// when first question is answered 
	$('.input-Q1, #input-Q1').on("click", function() {
		setTimeout( () => { $('.Q2').toggle(); }, 1800);
	})

	// when second question is answered 
	$('.input-Q2, #input-Q2').on("click", function() {
		setTimeout( () => { $('.Q3').toggle(); }, 1800);
	})

	// when third question is answered 
	$('.input-Q3, #input-Q3').on("click", function() {
		setTimeout( () => { $('.Q4').toggle(); }, 1800);
	})

	// when forth question is clicked
	$('.input-preview-Q4').on("click", function() {
		$("#quiz").animate({height: "900px"}, 700);
	})

	// when forth question is answered 
	$('.input-Q4, #input-Q4').on("click", function() {
		setTimeout( () => { $('.Q5').toggle(); }, 1800);
	})

	// when last question is clicked
	$('.input-preview-Q5').on("click", function() {
		$("#quiz").animate({height: "1050px"}, 700);
	})

	// when last question is answered 
	$('.input-Q5, #input-Q5').on("click", function() {
		setTimeout( () => { 
			$('#submit-btn').toggle(); 
			$("#quiz").animate({height: "700px"}, 700);
		}, 1800);	 
	})

	// if form is submitted
	$('#submit-btn').on("click", function() {
		// make loader animation visible
		$('.loader-wrapper').toggle(); 
	});

});
