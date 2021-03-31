$(document).ready(function() {
	var max_fields = 10;
	var wrapper = $(".input_fields"); 
	var add_button = $(".add_field_button");
	
	var x = 1;
	$(add_button).click(function(e){ 
		e.preventDefault();
		if(x < max_fields){ 
			x++; 
			$(wrapper).append('<div><input type="text" class="form-container" name="answer"/><a href="#" class="remove_field">Remove</a></div>');
		}
	});
	
	$(wrapper).on("click",".remove_field", function(e){ 
		e.preventDefault(); $(this).parent('div').remove(); x--;
	})
});

//fix collapsible btn
// var collapseElementList = [].slice.call(document.querySelectorAll('.collapse'))
// var collapseList = collapseElementList.map(function (collapseEl) {
//   return new bootstrap.Collapse(collapseEl)
// })