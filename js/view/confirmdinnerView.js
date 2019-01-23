var ConfirmdinnerView = function (container, model, guests) {
    
    if(document.getElementById('confirmdinnerView')){
        var fullMenu = model.getFullMenu();
        var totalPrice= model.getTotalMenuPrice();
        console.log(fullMenu);
        var tha_dish='';

        //Menyn
        var html="<div class='row text-center' id='my_menu'><p class='col-md-8'>MY DINNER: "+guests+" PEOPLE</p>";
        html=html+"<div class='col-md-4'><button class='button' id='btn'>Go back and edit dinner</button></div></div><div class='row'>";
        //Alla rätter i menyn
        

        for(dish in fullMenu){
            tha_dish=fullMenu[dish];
            var dishPrice = model.getTotalDishPrice(tha_dish.id);
            //alert("image: "+"<img src='"+images/tha_dish.image+"'></img>") 
            console.log(tha_dish);
            html=html+"<div class='col-md-2'><button id='image' class='btn_image'><img src='images/"+tha_dish.image+"'></img>"+"<p class='dish_name_menu'>"+tha_dish.name+"</p></button><p class='price'>"+dishPrice+" SEK</p></div>";
        }
        
        //Total price.
        html=html+"<div class='col-md-2'><p>Total: </p><p class'price'>"+totalPrice+" SEK</p></div></div>";
    
        document.getElementById('confirmdinnerView').innerHTML=html;
        console.log("Hejsan hoppsan");
        }
    
}
 