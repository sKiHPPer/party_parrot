
var MenuView = function (container, model,type) {

    if(document.getElementById('menuView')){
    var AllDishes = model.getAllDishes(type);
    var tha_dish='';
    var html='';

    for(dish in AllDishes){
        tha_dish=AllDishes[dish];
        //alert("image: "+"<img src='"+images/tha_dish.image+"'></img>") 
        html=html+"<div class='col-md-1'><button id='image' class='btn_image'><img class='small_img' src='images/"+tha_dish.image+"' width='100%' height='100%'></img>"+"<p class='dish_name_menu'>"+tha_dish.name+"</p></button></div>";
    }

    document.getElementById('menuView').innerHTML=html;
    }
	
}