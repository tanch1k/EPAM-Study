document.addEventListener("DOMContentLoaded", function(e){
	var links = document.getElementsByTagName('a');
	
	for (var i = 0; i < links.length; i++) {
		links[i].onclick = function(number) {
			return function() {
				console.log(number);
			};
		} (i);
	}	
});
