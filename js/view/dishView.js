
var DishView = function (container, model, dish_id) {

    if(document.getElementById('dishView')){

        var long_text="<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>"
        var dish= model.getDish(dish_id);
        var html="<h5>"+dish.name+"<img src='images/"+dish.image+"'></img>"+long_text;
    
    
        document.getElementById('dishView').innerHTML=html;
        }
    
}
 
