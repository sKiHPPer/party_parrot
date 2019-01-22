var Sidebar = function (container, model) {

    if(document.getElementById('sidebar')){
    var WholeMenu = model.getFullMenu();
    var TotalPrice = model.getTotalMenuPrice();
    var tha_dish='';
    var html="<h6>MY DINNER</h6><p>People</p><div class='input-guests'><input type='number' min='0' max='40' id='number_guests' value='3'></div><p class='side_something'>Dish Name</p><p class='side_something'>Cost</p>";

    for(dish in WholeMenu){
        tha_dish=WholeMenu[dish];
        html=html+"<button class='button' id='btn'><p>"+tha_dish.name+"</p><p class='price'>"+tha_dish.price+"</p></button>";
    }

    html=html+"<p class='price'>SEK "+TotalPrice+"<p>";
    html=html+"<button id='button' class='btn'>Confirm Dinner</button>";
    document.getElementById('sidebar').innerHTML=html;
    }
	
}