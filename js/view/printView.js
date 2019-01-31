var PrintView = function (container, model) {

    if (document.getElementById('printView')) {
        var fullMenu = model.getFullMenu();
        var guests = model.getNumberOfGuests();
        var tha_dish = '';
        var long_text = "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>"


        //Menyn
        var html = "<div class='row text-center' id='my_dinner'><p class='col-md-8'>MY DINNER: " + guests + " PEOPLE</p>";
        html = html + "<div class='col-md-4'><button class='button' id='btn'>Go back and edit dinner</button></div></div><div class='row'>";
        //Alla rätter i menyn

        for (dish in fullMenu) {
            tha_dish = fullMenu[dish];
            //alert("image: "+"<img src='"+images/tha_dish.image+"'></img>") 
            html = html + "<div class='row'><img class='col-md-4' src='images/" + tha_dish.image + "'></img>" + "<div class='col-md-4'><h4 class='dish_name_menu'>" + tha_dish.name + "</h4>" + long_text + "</div><div class='col-md-4'><h4>PREPARATION</h4>" + long_text + long_text + "</div></div>";
        }


        document.getElementById('printView').innerHTML = html;
    }

}
