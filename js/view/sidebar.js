var Sidebar = function (container, model, guests) {

    if(document.getElementById('sidebar')){
    var WholeMenu = model.getFullMenu();
    var TotalPrice = model.getTotalMenuPrice();
    var tha_dish='';
    var html="<h6>MY DINNER</h6><p class='input_guests'>People</p><div class='input_guests'><input type='number' min='0' max='40' id='number_guests' value='"+guests+"'></div><div class='side_cost'><p class='side_something1'>Dish Name</p><p class='side_something2'>Cost</p></div>";

    for(dish in WholeMenu){
        tha_dish=WholeMenu[dish];
        console.log(tha_dish)
        var dishPrice = model.getTotalDishPrice(tha_dish.id);
        html=html+"<button class='sidebar_btn' id='btn'><p class='side_name'>"+tha_dish.name+"</p><p class='price'>"+dishPrice+"</p></button>";
    }

    html=html+"<p class='price'>SEK "+TotalPrice+"<p>";
    html=html+"<button id='button' class='btn'>Confirm Dinner</button>";
    document.getElementById('sidebar').innerHTML=html;
    }
	
}