
var DishView = function (container, model, dish_id, guests) {

    if(document.getElementById('dishView')){

        var long_text="<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>"
        var dish= model.getDish(dish_id);
        var dishPrice = model.getTotalDishPrice(dish_id);

        //Ruta med dish name, bild och latinsk text. Samt en tillbaka knapp.
        var html="<div class='col-md-5'><h4>"+dish.name+"</h4><img src='images/"+dish.image+"' width='90%' height='20%'></img>"+long_text+"<button id='backSearch' class='back_btn'>back to search</button>";
        html=html+"<h4>PREPARATION</h4><p class='preparation'>"+dish.description+"</p></div>";
        //Rutan med ingredienser osv.
        html=html+"<div class='col-md-5'><div class='big_box_ingredients'><p>INGREDIENTS FOR "+guests+" PEOPLE</p><div class='small_box_ingredients'>";
        console.log(dish.ingredients);
        console.log('hej');

        for(ingredient in dish.ingredients){
            console.log(ingredient);
            tha_ingredient=dish.ingredients[ingredient];
            console.log(tha_ingredient);
            //alert("image: "+"<img src='"+images/tha_dish.image+"'></img>") 
            html=html+"<p>"+(guests*tha_ingredient.quantity)+" "+tha_ingredient.unit+" "+tha_ingredient.name+" SEK "+(guests*tha_ingredient.price)+"</p>";

        }
        html=html+"</div><button class='button' id='btn'>Add to menu</button><p class='price'> SEK "+dishPrice+"</p></div></div>";
        //Preparation delen
    
        document.getElementById('dishView').innerHTML=html;
        }
    
}
 
