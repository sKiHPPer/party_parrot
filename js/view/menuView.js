
var MenuView = function (container, model) {
	
	var menuView = container.find("#menuView");
    var AllDishes = model.getAllDishes('starter');

    for(dish in AllDishes){
        var image=dish.image;
        
    }
	menuView.html("asedrftgyhjklö");
    
    alert('hello');
	
}