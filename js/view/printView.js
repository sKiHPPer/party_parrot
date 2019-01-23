var PrintView = function (container, model, guests) {
    
    if(document.getElementById('printView')){
        var fullMenu = model.getFullMenu();
        console.log(fullMenu);
        var tha_dish='';
        var long_text="<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>"


        var html="<div class='big_box_ingredients'><p>MY DINNER: "+guests+" PEOPLE</p>";
        html=html+"<button class='button' id='btn'>Go back and edit dinner</button></div>";
        //Alla rätter i menyn
        
        for(dish in fullMenu){
            tha_dish=fullMenu[dish];
            //alert("image: "+"<img src='"+images/tha_dish.image+"'></img>") 
            console.log(tha_dish);
            html=html+"<img src='images/"+tha_dish.image+"'></img>"+"<p class='dish_name_menu'>"+tha_dish.name+"</p>"+long_text+"<h5>PREPARATION</h5>"+long_text+long_text;
        }
    
    
        document.getElementById('printView').innerHTML=html;
        }
    
}
 