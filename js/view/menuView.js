


var MenuView = function (container, model) {

    if(document.getElementById('menuView')){
    var AllDishes = model.getAllDishes("starter");
    var tha_dish='';
    var html='';

    for(dish in AllDishes){
        tha_dish=AllDishes[dish];
        //alert("image: "+"<img src='"+images/tha_dish.image+"'></img>") 
        html=html+"<button id='image' class='btn_image'><img class='small_img' src='images/"+tha_dish.image+"' width='114' height='114'></img>"+"<p class='dish_name_menu'>"+tha_dish.name+"</p></button>";
    }

    document.getElementById('menuView').innerHTML=html;
    }
	
}