


class MenuView {
    constructor(container, model) {
        this.showList;
        this.button_list = [];
        this.model = model;
        //div tag som allt i search baren ligger i.
        this.div = document.createElement("div");
        this.div.className = "search_bars menuTable";
        //Rubrik för searchbar
        this.h6 = document.createElement("h6");
        this.h6.innerHTML = "FIND A DISH";
        //Input grej till searchbaren. den man skriver in i.
        this.input = document.createElement("input");
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
        this.MainCourse.innerHTML = "main dish";
        this.SideDish = document.createElement("option");
        this.SideDish.innerHTML = "Side Dish";
        this.dessert = document.createElement("option");
        this.dessert.innerHTML = "dessert";
        this.appetizer = document.createElement("option");
        this.appetizer.innerHTML = "Appetizer";
        this.starter = document.createElement("option");
        this.starter.innerHTML = "starter";
        //Search knappen
        this.button = document.createElement("button");
        this.button.className = "three-bar";
        this.button.id = "search";
        this.button.innerHTML = "Search";

        this.div.appendChild(this.h6);

        this.div.appendChild(this.input);
        this.select.appendChild(this.all);
        this.select.appendChild(this.MainCourse);
        this.select.appendChild(this.SideDish);
        this.select.appendChild(this.dessert);
        this.select.appendChild(this.appetizer);
        this.select.appendChild(this.starter);
        this.div.appendChild(this.select);
        this.div.appendChild(this.button);
            
        
        this.AllDishes = model.getAllDishes();
        this.tha_dish = '';
        this.dish;
        this.divimg = document.createElement("div");

        for (this.dish in this.AllDishes) {
            this.tha_dish = this.AllDishes[this.dish];
            //alert("image: "+"<img src='"+images/tha_dish.image+"'></img>") 
            
            this.btn_image = document.createElement("button");
            this.btn_image.className = "btn_image";
            this.btn_image.id = "image";
            this.img = document.createElement("img");
            this.img.className = "small_img";
            this.img.src = "images/"+this.tha_dish.image;
            this.img.width = "114";
            this.img.height = "114";
            this.dish_name_menu = document.createElement("p");
            this.dish_name_menu.className = "dish_name_menu";
            this.dish_name_menu.innerHTML = this.tha_dish.name;
            this.btn_image.appendChild(this.img);
            this.btn_image.appendChild(this.dish_name_menu);
            this.divimg.appendChild(this.btn_image);
            this.button_list.push([this.btn_image, this.tha_dish]);
            //html = html + "<button id='image' class='btn_image'><img class='small_img' src='images/" + tha_dish.image + "' width='114' height='114'></img>" + "<p class='dish_name_menu'>" + tha_dish.name + "</p></button>";
        }
            //container.innerHTML += html;
            this.div.appendChild(this.divimg);
            container.appendChild(this.div);
        
    }

    updateSearch(type, filter){
        
        this.button_list = [];
        this.showList = this.model.getAllDishes(type,filter);

        //clear the view 
        while(this.divimg.firstChild){
            this.divimg.removeChild(this.divimg.firstChild);
        }

        this.showList.forEach((element) => {
            this.btn_image = document.createElement("button");
            this.btn_image.className = "btn_image";
            this.btn_image.id = "image";
            this.img = document.createElement("img");
            this.img.className = "small_img";
            this.img.src = "images/"+element.image;
            this.img.width = "114";
            this.img.height = "114";
            this.dish_name_menu = document.createElement("p");
            this.dish_name_menu.className = "dish_name_menu";
            this.dish_name_menu.innerHTML = element.name;
            this.btn_image.appendChild(this.img);
            this.btn_image.appendChild(this.dish_name_menu);
            this.divimg.appendChild(this.btn_image);
            this.button_list.push([this.btn_image, element]);
        });

    }
}