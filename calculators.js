

function generateUrl(answer1, answer2, answer3, answer4, answer5) {

		let baseUrl = "https://www.ah.nl/allerhande/recepten-zoeken/__/N-26vq";
		let lastPart = "";

		//stressvolle dag 
		if(answer1 === "stress") {

			if(answer2 === "") {

			} else if()

		} else if(answer1 === "hungry") {

			// add filter
			baseUrl += "Z26vn";

		} else if(answer1 === "great") {
			// do nothing


		} else if(answer1 === "sad") {
			
			lastPart = "?Ntt=pizza";
			// need alcoholic drinks as well
		}
	}

module.exports = {
	generateUrl: generateUrl
}