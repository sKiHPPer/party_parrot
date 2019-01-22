var Sidebar = function (container, model,type) {

    var menuView = container.find("#sidebar");
    if(document.getElementById('sidebar')){
    var AllDishes = model.getFullMenu();
    var tha_dish='';
    var html='<h6>MY DINNER</h6><p>People</p>';

    for(dish in AllDishes){
        tha_dish=AllDishes[dish];
        //alert("image: "+"<img src='"+images/tha_dish.image+"'></img>") 
        console.log("Hej");
    }

    document.getElementById('sidebar').innerHTML=html;
    }
	
}