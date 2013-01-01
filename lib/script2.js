 //  var server = "http://www.myidealportion.com/";
   var server = "http://localhost/myidealportion/";
function searchFood(id){
	 console.log(id);
	   $.post(server + "rest/getFood", { id: id, systemId: "" },
      		 function(response) {
		   		
		   		$('#item').html("");
			       	jQuery.each(response, function (index, item)  {
			       		document.getElementById("item").innerHTML=buildFoodItem(item);
			       	});
			       	
			       	back('food', 'item');
		   
	   },
	   "json"
	   );
	   
   }
 

$(document).ready(function(){

   $('#term').focus(function(){
      var full = $("#poster").has("img").length ? true : false;
      if(full == false){
         $('#poster').empty();
      }
   });


   var searchFood = function(){
	   
        var film = $('#term').val();

         if(film == ''){

            $('#poster').html("<h2 class='loading'>Ha! We haven forgotten to validate the form! Please enter something.</h2>");

         } else {

            $('#food').html("<h2 class='loading'>searching food...</h2>");

            
            $.ajax({
                type: "POST",
                url: server + "rest/getCategory",
                data: { value: document.getElementById("term").value, systemId: ""  },
                dataType: "json",
                timeout: 0, // in millisecond
                success: function(response) {
                    $('#food').html("");
	            	jQuery.each(response, function (index, item)  {

	    	             	   var categoryName  = (item.category_name);
	    	             	  document.getElementById("food").innerHTML=document.getElementById("food").innerHTML+"<b>"+categoryName+"</b>"+"<br>";
	    	             	   
	    	             	   var foodItemArray = item.food_item_array;
	    	             	  jQuery.each(foodItemArray, function (index2, foodItem)  {
	    	             		  
	    	             		  var foodLink = "<a href='#' OnClick=\"searchFood('"+foodItem.id+"');\">"+foodItem.name+"</a>";
	    	             		  console.log(foodLink);
	    	             		 document.getElementById("food").innerHTML=document.getElementById("food").innerHTML+foodLink+"<br>";
		    	             	  
	    	             	  });
	    	             	 document.getElementById("food").innerHTML=document.getElementById("food").innerHTML+"<br>";
			    	          
	    	             	
	    	            
	    	        });
                },
                error: function(request, status, err) {
                	console.log(status + "---" + err + "===="+ JSON.stringify(request));
                }
            });
            
            
        
          }

        return false;
   }
   
   
  

   $('#search').click(searchFood);
   $('#term').keyup(function(event){
       if(event.keyCode == 13){
           getPoster();
       }
   });

});