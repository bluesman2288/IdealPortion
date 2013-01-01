function back(hide,show){
	
	document.getElementById(hide).style.display='none';
	document.getElementById(show).style.display='block';
	
}


function buildFoodItem(item){
	
		var output = "";
		var id = item.id;
		var name = item.name;
	
		var servingOutput=parseServings(item.servings);
	    output+="<a href='#' OnClick=\"back('item','food');\">Back</a><br>";
		output+=" <table class='hor-minimalist-b'>";
		output+=" <tr>";
		output+=" <th>";
		output+= name;
		output+=" </th>";
		output+=" </tr>";
		
		output+="<tr>";
		output+="<td>";
		output+="<input id='lastIndex' type='hidden' value='div1'>";
		output+="<b>Portion type:</b>";
		output+=createSelect(item.servings);
		output+="</td>";
		output+="</tr>";
		
		output+="<tr>";
		output+="<td>";
		output+="<input id='lastIndex' type='hidden' value='div1'>";
		output+="</td>";
		output+="</tr>";

		output+=" <tr>";
		output+=" <td>";
		output+= servingOutput;
		output+=" </td>";
		output+=" </tr>";
		output+=" </table>";
		
		
		return output;
	
}

function getFrame(url){
	
	output="<iframe src='"+url+"' width='345' height='345' frameborder=0>";
	output+="<p>Your browser does not support iframes.</p>";
	output+="</iframe>";
	
	return output;
}

function roundNumber(num){
	
	return parseFloat(num).toFixed(2);
}

function parseServings(servings){
	var servingOutput = "";
	
	jQuery.each(servings, function (index, item)  {
		
		
		var servingName = item.serving_name;
		var servingIndex = item.serving_index;
		var calories =  roundNumber(item.calories);
		var fatCal = roundNumber(item.fat_cal);
		var proteinCal = roundNumber(item.protein_cal);
		var carbCal = roundNumber(item.carb_cal);
		var url = item.url_address;
		
		var display = "none";
		
		if(servingIndex==1)display="block";
		
		var fat = roundNumber(item.fat);
		var protein = roundNumber(item.protein) ;
		var carbohydrate = roundNumber(item.carbohydrate);
		
		//servingOutput+=calories + "<br>" + protein + "<br>" + carbohydrate + "<br>" + fat  + "<br>" ;
		
		servingOutput+="<div id='div"+servingIndex+"' style='display:"+display+"' style='width:400px;'>";
	
		servingOutput+="<div class='table'>";
		servingOutput+=" <div class='tr'>";
		servingOutput+="	<div class='td' style='height:18px;'>";
		//servingOutput+="		 	<b>Ideal Portion: </b>";
		 	
		servingOutput+=" 	</div>";
		servingOutput+=" 		 <div style='clear: both;'></div>";
		servingOutput+=" </div>";
		servingOutput+=" <div class='tr'> ";
		servingOutput+="     <div class='td'>  ";
		servingOutput+="		<b>Calories:</b> ";
		servingOutput+= calories;	
		servingOutput+="	 </div>";
		servingOutput+="	 <div style='clear: both;'></div>";
			 
		servingOutput+="  </div>";
		  
		servingOutput+="   <div class='tr'>";
		servingOutput+="     <div class='td'>  ";
		servingOutput+="		<b>Fat:</b> ";
		servingOutput+= fatCal + " calories (" + fat + "g)";	 	
		servingOutput+=" </div>";
		servingOutput+= "<div style='clear: both;'></div>";
			
		servingOutput+=" </div>";
		  
		servingOutput+=" <div class='tr'>";
		servingOutput+=" <div class='td'>  ";
		servingOutput+=" <b>Protein:</b> ";

		servingOutput+= proteinCal + " calories (" + protein + "g)";
		servingOutput+=" </div>";
		servingOutput+=" <div style='clear: both;'></div>";

		servingOutput+="    </div>";
		servingOutput+="     <div class='tr'>";
		servingOutput+="      <div class='td'>  ";
		servingOutput+=" <b>Carb:</b> ";

		servingOutput+= carbCal + " calories (" + carbohydrate + "g)";

		servingOutput+=" </div>";
		servingOutput+=" <div style='clear: both;'></div>";

		servingOutput+="    </div>";

		servingOutput+=" </div>";

		servingOutput+=getFrame(url);	
		servingOutput+=" </div>";
		
		
		servingOutput+=" </div>";
		
		
	});
	
	return servingOutput;
	
	
	
}


function createSelect(items){
	var output="";

	output+="<select onChange='showNutrient(this.value);'>";

	jQuery.each(items, function (index, item)  {
		var servingName = item.serving_name;
		var servingIndex = item.serving_index;
	output+="<option value='div"+servingIndex+"'>"+servingName+"</option>";
	
	
	});

	output+="</select>";

	return output;
}




function showNutrient(index){

var lastIndex=document.getElementById('lastIndex').value;

console.log(lastIndex);
document.getElementById(lastIndex).style.display='none';

document.getElementById(index).style.display='block';

document.getElementById('lastIndex').value=index;
}