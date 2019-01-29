


class MenuView {
    constructor(container, model){
        //div tag som allt i search baren ligger i.
        this.div = document.createElement("div");
        this.div.className = "search_bars menuTable";
        //Rubrik för searchbar
        this.h6 = document.createElement("h6");
        this.h6.innerHTML = "FIND A DISH";
        //Input grej till searchbaren. den man skriver in i.
        this.input = document.createElement("");
        this.input.className = "three_bar";
        this.input.type = "text";
        this.input.placeholder = "Enter key words";
        //Input där man väljer alternativ.
        this.select = document.createElement("select");
        this.select.className = "three_bar";
        this.select.id = "sel1";
        this.all = document.createElement("option");
        this.all.innerHTML = "All";
        this.MainCourse = document.createElement("option");
        this.MainCourse.innerHTML = "Main Course";
        this.SideDish = document.createElement("option");
        this.SideDish.innerHTML = "Side Dish";
        this.dessert = document.createElement("option");
        this.dessert.innerHTML = "Dessert";
        this.appetizer = document.createElement("option");
        this.appetizer.innerHTML = "Appetizer";
        this.starter = document.createElement("option");
        this.starter.innerHTML = "Starter";
        //Search knappen
        this.button = document.createElement("button");
        this.button.className = "three-bar";
        this.button.id = "search";
        this.button.innerHTML = "Search";

        div.appendChild(h6);

        div.appendChild(input);
        div.appendChild(select);
        div.appendChild(all);
        div.appendChild(MainCourse);
        div.appendChild(SideDish);
        div.appendChild(dessert);
        div.appendChild(appetizer);
        div.appendChild(starter);




        container.appendChild(inp_guests);



        <div class="search_bars menuTable">
                                    <h6>FIND A DISH</h6>
                                    
                                    <input class="three_bar" type="text" placeholder="Enter key words">
                                        <select class="three_bar" id="sel1">
                                            <option>All</option>
                                            <option>Main Course</option>
                                            <option>Side Dish</option>
                                            <option>Dessert</option>
                                            <option>Appetizer</option>
                                            <option>Starter</option>
                                        </select>
                                    <button id="Search" class="three_bar">Search</button>
                                    
        </div>

            
        
            var AllDishes = model.getAllDishes("starter");
            var tha_dish = '';
            var html = '';

            


            for (dish in AllDishes) {
                tha_dish = AllDishes[dish];
                //alert("image: "+"<img src='"+images/tha_dish.image+"'></img>") 
                html = html + "<button id='image' class='btn_image'><img class='small_img' src='images/" + tha_dish.image + "' width='114' height='114'></img>" + "<p class='dish_name_menu'>" + tha_dish.name + "</p></button>";
            }

            container.innerHTML = html;
        
    }
}