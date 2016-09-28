$(document).ready(function() {
	
    $.getJSON('topSpots.json',function(topSpotsSanDiego) {
      
        $.each(topSpotsSanDiego.topspots,function(index,top){

              $("#table tbody").append("<tr><td>"+ top.name+ "</td><td>" + top.description + "</td><td>"  +

              	'<a href=https://www.google.com/maps?q='+ top.location[0]+','+top.location[1] + '<button class="btn btn-primary" >Click to see location in Google Maps</>' +  "</td></tr>");
              
               
         });	
    });
});



