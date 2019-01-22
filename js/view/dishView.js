
var DishView = function (container, model, dish_id, guests) {

    if(document.getElementById('dishView')){

        var long_text="<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>"
        var dish= model.getDish(dish_id);
        var html="<h4>"+dish.name+"</h4><img src='images/"+dish.image+"'></img>"+long_text;
        var total_price=0;

        //Rutan med ingredienser osv.
        html=html+"<div class='big_box_ingredients'><p>INGREDIENTS FOR "+guests+" PEOPLE</p><div class='small_box_ingredients'>"
        console.log(dish.ingredients);
        console.log('hej');

        for(ingredient in dish.ingredients){
            console.log(ingredient);
            tha_ingredient=dish.ingredients[ingredient];
            console.log(tha_ingredient);
            total_price=total_price+(guests*tha_ingredient.price);
            //alert("image: "+"<img src='"+images/tha_dish.image+"'></img>") 
            html=html+"<p>"+(guests*tha_ingredient.quantity)+tha_ingredient.unit+tha_ingredient.name+" SEK "+(guests*tha_ingredient.price)+"</p>";

        }
        html=html+"</div><button class='button' id='btn'>Add to menu</button><p>SEK "+total_price+"</p></div>";
        //Preparation delen
        html=html+"<h4>PREPARATION</h4><p class='preparation'>"+dish.description+"</p>";
    
        document.getElementById('dishView').innerHTML=html;
        }
    
}
 
