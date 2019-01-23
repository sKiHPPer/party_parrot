var ConfirmdinnerView = function (container, model, guests) {
    
    if(document.getElementById('confirmdinnerView')){
        var fullMenu = model.getFullMenu();
        var totalPrice= model.getTotalMenuPrice();
        console.log(fullMenu);
        var tha_dish='';

        var html="<div class='big_box_ingredients'><p>MY DINNER: "+guests+" PEOPLE</p>";
        html=html+"<button class='button' id='btn'>Go back and edit dinner</button></div>";
        //Alla rätter i menyn
        
        for(dish in fullMenu){
            tha_dish=fullMenu[dish];
            var dishPrice = model.getTotalDishPrice(tha_dish.id);
            //alert("image: "+"<img src='"+images/tha_dish.image+"'></img>") 
            console.log(tha_dish);
            html=html+"<button id='image' class='btn_image'><img src='images/"+tha_dish.image+"'></img>"+"<p class='dish_name_menu'>"+tha_dish.name+"</p></button><p class='price'>"+dishPrice+" SEK</p>";
        }
        
        //Total price.
        html=html+"<p>Total: </p><p class'price'>"+totalPrice+" SEK</p>";
    
        document.getElementById('confirmdinnerView').innerHTML=html;
        }
    
}
 