$(document).ready(() => {
    const max_fields = 10;
    const wrapper = $(".input_fields");
    const add_button = $(".add_field_button");
    const submit_button = $(".submit_btn");
    const question = $("#question");
    const answer = $(".answer");

    let x = 1;

    console.log($(wrapper));
    $(add_button).click(e => {
        console.log(e);
        if (x < max_fields) {
            x++;
            $(wrapper).append('<div><input type="text" class="form-container answer" placeholder="Answer"><a href="#" class="remove_field"><button class="remove-btn"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16"><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/></svg></button>');
        }
    });

    $(wrapper).on("click", ".remove_field", function(e) {
        $(this).parent("div").remove(); x--;
    });


    $(submit_button).click(e => {
        const questionval = validateQuestion();

        if (questionval == true) {
            console.log(`question: ${question[0].value}`);
            const answer = $(".answer");
            const answerval = validateAnswer();

            if (answerval == true) {
                for (x = 0; x < answer.length; x++) {
                    console.log(`answer: ${answer[x].value}`);
                }
            }
        }
    });

    function validateQuestion() {
        const x = question[0].value;

        if (x == "") {
            alert("Question must be filled out.");
			$('#question').addClass('error');
            return false;
        }
        return true;
    }

    function validateAnswer() {
        const x = [answer[0].value];

        if (x == "") {
            alert("At least 1 answer must be filled out.");
			$('.answer').addClass('error');
            return false;
        }
        return true;
    }

	$(".answer").click(function() {
		$('.answer').removeClass('error');
	});
});
