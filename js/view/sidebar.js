var Sidebar = function (container, model,type) {

    var menuView = container.find("#sidebar");
    if(document.getElementById('sidebar')){
    var AllDishes = model.getAllDishes(type);
    var tha_dish='';
    var html='';

    for(dish in AllDishes){
        tha_dish=AllDishes[dish];
        //alert("image: "+"<img src='"+images/tha_dish.image+"'></img>") 
        alert("Hej");
    }

    document.getElementById('sidebar').innerHTML=html;
    }
	
}