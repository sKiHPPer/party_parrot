
var MenuView = function (container, model,type) {

    if(document.getElementById('menuView')){
    var AllDishes = model.getAllDishes(type);
    var tha_dish='';
    var html='';

    for(dish in AllDishes){
        tha_dish=AllDishes[dish];
        //alert("image: "+"<img src='"+images/tha_dish.image+"'></img>") 
        html=html+"<button id='image' class='btn_image'><img src='images/"+tha_dish.image+"'></img>"+"<p class='dish_name_menu'>"+tha_dish.name+"</p></button>";
    }

    document.getElementById('menuView').innerHTML=html;
    }
	
}