
var MenuView = function (container, model,type) {
    
    

	var menuView = container.find("#menuView");
    var AllDishes = model.getAllDishes(type);
    var tha_dish='';
    var html='';

    
    for(dish in AllDishes){
        tha_dish=AllDishes[dish];
        //alert("image: "+"<img src='"+images/tha_dish.image+"'></img>") 
        html=html+"<img src='images/"+tha_dish.image+"'></img>";
    }
    menuView.html("asedrftgyhjklö");
    document.getElementById('menuView').innerHTML=html;

	
}