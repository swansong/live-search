##live-search.js by Jon Swanson

This is a free, Apache licensed script for use in any site for any purpose.

This script provides live as-you-type search functionality on the current page.
The every key press in the designated search box results in a search of the
designated terms in the designated items, and the items fade in or out according
to whether or not there is a match.  All you need to do is give your search box
an id of "livesearch", your searchable fields the class "search-this" and the
items that you want to fade in/out if there is no match in its "search-this"
fields a class of "searchable".  "searchable" items that do not contain any
"search-this" fields will never fade out and "search-this" fields that are not
in a "searchable" item will never be searched.  If you want an entire section of
content to disappear if none of the "searchable" items within contain the text
in the "livesearch" box, give the container a class of "searchable-container"

To put it another way:

livesearch (id)

	this is the id you give to your search box.  On every character entered in
	this box, the search will execute.  Case (capitalization) is irrelevant

searchable (class)

	these are the items that you are searching inside of.  Each contains items of
	class "search-this" which the script compares the contents of to the contents
	of the #livesearch box.  It is assumed if none of the .search-this terms
	contained within the .searchable item match, the entire .searchable item does
	not match and disappears.

search-this (class)

	these are the terms within a .searchable item that you would like to search.
	Think of it as labeling things to get indexed by the search engine.  This class
	is a requirement.  If you do not include at least one .search-this, the
	.searchable item will register as having no matches at all for any search term

searchable-container (class) (optional)

	this item contains many .searchable items and disappears when all .searchable
	items within disappear.  This means you can give an entire section of content
	a title, description, whatever you want and it will all go away if none of the
	searchable content itself matches what the user is looking for.  The search
	still works without including this class.
