//An object that holds all of the color scheme selections for the page
var layoutColors = {
	tangela: { lightest: "#94d5f6", dominant: "#417b94", middle: "#5aa4cd", darkest: "#204152"},
	vulpix: { lightest: "#ffde94", dominant: "#bd4a29", middle: "#de7329", darkest: "#5a3100"},
	butterfree: { lightest: "#eeeeff", dominant: "#5a4173", middle: "#bdbde6", darkest: "#313152"},
	dewgong: { lightest: "#e6e6f6", dominant: "#d5cdee", middle: "#9ca4bd", darkest: "#415262"},
	oddish: { lightest: "#c5e67b", dominant: "#8bac31", middle: "#7394a4", darkest: "#29394a"},
	murkrow: { lightest: "#41629c", dominant: "#314162", middle: "#b49c20", darkest: "#292941"},
	seaking: { lightest: "#f6f6ff", dominant: "#e67341", middle: "#c54129", darkest: "#52525a"},
	rhyhorn: { lightest: "#e6e6ee", dominant: "#8383ac", middle: "#5a5a7b", darkest: "#393952"},
	vaporeon: { lightest: "#ffffff", dominant: "#5ac5e6", middle: "#83deff", darkest: "#104a62"},
	pinsir: { lightest: "#eee6cd", dominant: "#c5ac8b", middle: "#836a52", darkest: "#5a4131"},
	sharpedo: { lightest: "#e6def6", dominant: "#395294", middle: "#5273bd", darkest: "#293952"},
	/*snorlax: { lightest: "", dominant: "", middle: "", darkest: ""},
	furrett: { lightest: "", dominant: "", middle: "", darkest: ""},
	umbreon: { lightest: "", dominant: "", middle: "", darkest: ""},
	steelix: { lightest: "", dominant: "", middle: "", darkest: ""},
	heracross: { lightest: "", dominant: "", middle: "", darkest: ""},
	ursaring: { lightest: "", dominant: "", middle: "", darkest: ""},
	lumineon: { lightest: "", dominant: "", middle: "", darkest: ""},
	pineco: { lightest: "", dominant: "", middle: "", darkest: ""},*/
}
	
 
//Replace unordered list of links with a dropdown menu on small screen sizes
//Create a select and append to #navbar
var $select = $("<select id='navMenu'><option>Nav</option></select>");
$(".navbar").append($select);

//Go through each of the navbar links
$(".navbar a").each(function(){
  var $anchor = $(this);
  //Add option tags
  var $option = $("<option></option>");

  //Deal with selected options depending on current page
  if($anchor.parent().hasClass("selected")) {
    $option.prop("selected", true);
	//$option.css("display", "none");
  }
  //Option's value is set to the href value
  $option.val($anchor.attr("href"));
  //Option's text becomes the link's text
  $option.text($anchor.text());
  //Add option to the select element
  $select.append($option);
});  // End navbar link function

//Bind change listener to the select
$select.change(function(){
  //Go to select's location
  window.location = $select.val();
});
//===========END NAV MENU REPLACEMENT ========================================


//Change colorScheme via select menu ////////////////////////////////////////////////////////////////
//Target the colorscheme selection menu for the change listener
$( "#colorscheme" ).change(function () {
	var str = "<p>Changed CSS layout to: ";  //optional testing text
	var selected = this.value;
	
	str += selected;  //optional testing text
	//Call the setLayoutColors function to change CSS to selected input's values
	setLayoutColors( selected );
	$( "#content" ).append( str ); // the rest of the optional testing text

})// end change() function

// Find the corresponding color object in the layoutColors color reference
function searchColorLayout ( pokemon ) {
	for ( var key in layoutColors ) {
		if (layoutColors.hasOwnProperty(key)) {
			//alert(key + " -> " + layoutColors[key]);      //for testing purposes only
			if( layoutColors[key] === layoutColors[pokemon])
				return layoutColors[key]; 
		} // look through the object of objects to find an object with matching name, so you can object while you object -Xzibit
	} // end for loop
} //end searchColorLayout function


// Apply the selected color layout to the different areas on the page
function setLayoutColors ( poke ) {
	//$( "#content" ).append( poke );                    // for testing purposes
	var newColor = searchColorLayout( poke );
	
	$("body").css("background-color", newColor.dominant );
	$("a").css("color", newColor.lightest );
	$("#content, select, #navMenu").css({ "background-color": newColor.lightest, "color": newColor.darkest });
	$("#interaction").css("background-color", newColor.middle ).css("color", newColor.darkest );  
	$("hr").css("color", newColor.darkest );
	//$("li > a:hover").css("color", newColor.dominant ); //finding it hard to select pseudo class a:hover
	//$("h1").css("background-color", newColor.middle );  //looks a little wonky with some colors atm
	
	/*$("#footer").css("color", newColor.darkest);  //not in use atm
	$("#page").css("background-color", "#732000");  //set #pagebg to transparent for now */
}


// Add a row of text to the #interaction area, can't find a way to make changes persist, seems crappy
$("#butt1").click( function () {
	var str = "<p>";
	var someMessage = document.getElementById("newText").value;
	str += someMessage + "</p>";
	
	$( str ).insertAfter( ".insertContent" );
})

/*function removeRow(input) {         // may not need if previous function won't work permanently
    document.getElementById('interaction').removeChild( input.parentNode );  // not correct anyway
}*/ 


//NOT GOING TO USE THIS SECTION UNLESS USER LOGIN CAN BE HANDLED
//Check to see if user is logged in, if so then...
	
	//If user is already logged in, when logged in flag loggedIn = 1;
		//replace Login link with link to their account info, or a welcome #name message there.
		//else ( display the normal link for the popup to let them login so they can post shit )
	//userSignup, display if user is not logged in, keep an array of current members, 
		//check to see if new desired member name is already taken by cycling through current memberlist, 
		//making each name lowercase, and if it's === do not make a new member, return that it's taken. 
		//Also check for valid @something.com email address.
