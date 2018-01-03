$(document).ready(function() {

  /* ---------------------------------------------------------------------------
        QUESTION ONE
  ------------------------------------------------------------------------------*/

  let inputPreview = $(".input-preview-Q1"),
      // store all input elements in this variable
      input = $(".input-Q1");

  // responsible for hiding input options when page is loaded    
  TweenMax.set(input, {
    scale: 1.2,
    // setting opacity to 0
    alpha: 0
  });

  // when the question is clicked 
  inputPreview.on("click", function(){
    
    // store this question element in variable
    let that = $(this);
    console.log(that);
    
    // make the question-section active 
    that.toggleClass("active");
    
    if(that.hasClass("active")){
      // when the question is active, give the inputs a class of unhidden
      input.toggleClass("unhidden");

      // when the question is active, make input fields visible
      TweenMax.staggerTo(input, 1.25, {
        scale: 1,
        alpha: 1,
        ease: Elastic.easeOut
      }, .1);   
    }
    // otherwise, make inputs dissapear again 
    else {
      input.toggleClass("unhidden");

      TweenMax.staggerTo(input, 1, {
        scale: 1.2,
        alpha: 0,
        ease: Elastic.easeOut
      }, .1);
    }
  });

  // When one of the input entries is clicked 
  input.on("click", function() {

    let tlInput = new TimelineMax({
      onComplete: done
    });

    // store the specific clicked element into 'that'
    let that = $(this),
      // store the others into the variable 'siblings'
      siblings = that.siblings(".input"),

      // store the actual value of clicked input
      data = that.data("val"),
      top = that.css("top");

    // after clicked on option, remove class active for all other fields  
    siblings.removeClass("active");

    // make inputs dissapear and move the chosen one up
    tlInput.to(siblings, .25, {
        alpha: 0
      })
      .to(that, .25, {
        scale: 1.2
      })
      .to(that, .25, {
        top: 0,
      })
      .set(inputPreview, {
        display: "none"
      })
      .to(that, .25, {
        scale: 1,
      })
      .to(that, .5, {
        backgroundColor: "#ffffff"
      })
      .set(inputPreview, {
        color: "#fff",
        text: data,
        display: "block"
      })
      .to(that, .25, {
        alpha: 0
      })

    // make question section look non-active
    function done() {
      inputPreview.removeClass("active");
      // make the chosen input active 
      that.css("top", top).addClass("active");

      TweenMax.set(input, {
        scale: 1.2,
        alpha: 0,
        backgroundColor: "#fff"
      });
    }

  });
});