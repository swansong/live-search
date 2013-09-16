/****************************************************************************	
*	Live search, by Jon Swanson      										*
*	this js requires jQuery		 	 										*
*	to use, give items you want to search a class of "searchable"			*
*	and elements you want to search a class of "search-this"				*
*	if you have things organized by section and you want the section		*
*	to disappear if all searchable items within don't match the search term	*
*   give the section a class of "searchable-container"						*
****************************************************************************/

$(document).ready(function() {
	$("#livesearch").keyup(function () {
		executeSearch($(this).val().toLowerCase());
	});
});

function executeSearch(term) {
	var searchables = $('.searchable'), holder, $this, found;
	for (var i = 0, slength = searchables.length; i < slength; i++) {
		$this = $(searchables[i]);
		holder = $this.find('.search-this');
		found = false;
		for (var j = 0, hlength = holder.length; j < hlength; j++) {
			if ($(holder[j]).text().toLowerCase().indexOf(term) != -1) {
				j = hlength;
				found = true;
			}
		}
		if (!found) {
			$this.fadeOut();
			$this.addClass("no-match");
		}
		else if ($this.hasClass("no-match")) {
			$this.fadeIn();
			$this.removeClass("no-match");
		}
	}
	var sections = $(".searchable-container"), secholder;
	for (var l = 0, seclength = sections.length; l < seclength; l++) {
		secholder = $(sections[l]);
		if (secholder.find('.searchable').not('.no-match').length == 0) {
			secholder.fadeOut();
			secholder.addClass('no-match');
		}
		else if (secholder.hasClass('no-match')) {
			secholder.fadeIn();
			secholder.removeClass('no-match');
		}
	}		
}
