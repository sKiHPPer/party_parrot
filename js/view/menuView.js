
var MenuView = function (container, model,type) {

    if(document.getElementById('menuView')){
    var AllDishes = model.getAllDishes(type);
    var tha_dish='';
    var html='';

    for(dish in AllDishes){
        tha_dish=AllDishes[dish];
        //alert("image: "+"<img src='"+images/tha_dish.image+"'></img>") 
        html=html+"<div class='btn_dish'><button id='image' class='btn_image'><img src='images/"+tha_dish.image+"'></img>"+"<button id='dish_name' class='btn_name'><p class='dish_name_menu'>"+tha_dish.name+"</p></button></button></div>";
    }

    document.getElementById('menuView').innerHTML=html;
    }
	
}