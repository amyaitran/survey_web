$(document).ready(function () {
	var max_fields = 10;
	var wrapper = $(".input_fields");
	var add_button = $(".add_field_button");
	var submit_button = $(".submit_btn");
	var question = $("#question");


	var x = 1;
	console.log($(wrapper));
	$(add_button).click(function (e) {
		console.log(e);
		if (x < max_fields) {
			x++;
			$(wrapper).append('<div><input type="text" class="form-container answer"><a href="#" class="remove_field">Remove</a></div>');
		}
	});

	$(wrapper).on("click", ".remove_field", function (e) {
		$(this).parent('div').remove(); x--;
	})



	$(submit_button).click(function (e) {
		var questionval = validateQuestion();
		if (questionval == true) {
			console.log('question: ' + question[0].value);
			var answer = $(".answer");
			for (x = 0; x < answer.length; x++) {
				console.log('answer: ' + answer[x].value);
			}
		}
		else { }
	});

	function validateQuestion() {
		var x = question[0].value;
		if (x == "") {
			alert("Question must be filled out");
			return false;
		}
		return true;
	}
});


