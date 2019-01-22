var Sidebar = function (container, model) {

    if(document.getElementById('sidebar')){
    var WholeMenu = model.getFullMenu();
    var TotalPrice = model.getTotalMenuPrice();
    var tha_dish='';
    var html="<h6>MY DINNER</h6><p>People</p><p class='side_something'>Dish Name</p><p class='side_something'>Cost</p>";

    for(dish in WholeMenu){
        tha_dish=WholeMenu[dish];
        html=html+"<p>"+tha_dish.name+"</p>";
    }

    html=html+"<p class='price'>SEK "+TotalPrice+"<p>";
    html=html+"<button id='button' class='btn'>Confirm Dinner</button>";
    document.getElementById('sidebar').innerHTML=html;
    }
	
}