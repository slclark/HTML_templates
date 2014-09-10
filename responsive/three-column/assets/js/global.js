$(document).ready(function() {
	
	
     // for small screen menu
     // grab items in nav and create a select box
     var ary = new Array();
     var obj = $("nav li");
     $.each(obj, function(i, val){
	    var valueToPush = {};
     	valueToPush.value = $(this).find('a').attr('href');
     	valueToPush.text = $(this).find('a').html();
     	ary.push(valueToPush);
     });
     
     var sel = $('<select>').appendTo('nav');
     $(ary).each(function() {
	 	sel.append($("<option>").attr('value',this.val).text(this.text));
	 });
	 
	
     
    $("nav select").change(function() {
      window.location = $(this).find("option:selected").val();
    });
    
    
    
    function checkResize(){
	    if (jQuery(window).width() < 500) {
        	smallNav();
    	}  else {
	    	largeNav();
    	}
	}
	
	function smallNav(){
	 // for small screen display this
	 $('nav select').css('display','block');
     // for small screen hide normal nav
	 $('nav ul').css('display','none');
	}
	function largeNav(){
	 // for large screen display this
	 $('nav select').css('display','none');
     // for large screen hide normal nav
	 $('nav ul').css('display','block');
	}
	
	//init
	checkResize();
	
	// check size on resize
	jQuery(window).resize(function () { 
		checkResize();
	});
	
});