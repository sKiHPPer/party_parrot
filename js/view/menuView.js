


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
        this.all.innerHTML = "all";
        this.MainCourse = document.createElement("option");
        this.MainCourse.innerHTML = "main course";
        this.SideDish = document.createElement("option");
        this.SideDish.innerHTML = "side dish";
        this.dessert = document.createElement("option");
        this.dessert.innerHTML = "dessert";
        this.appetizer = document.createElement("option");
        this.appetizer.innerHTML = "appetizer";
        this.salad = document.createElement("option");
        this.salad.innerHTML = "salad";
        this.bread = document.createElement("option");
        this.bread.innerHTML = "bread";
        this.breakfast = document.createElement("option");
        this.breakfast.innerHTML = "breakfast";
        this.soup = document.createElement("option");
        this.soup.innerHTML = "soup";
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
        this.select.appendChild(this.salad);
        this.select.appendChild(this.bread);
        this.select.appendChild(this.breakfast);
        this.select.appendChild(this.soup);
        this.div.appendChild(this.select);
        this.div.appendChild(this.button);



        //this.AllDishes = model.getAllDishes();
        this.tha_dish = '';
        this.dish;
        this.divimg = document.createElement("div");
        
        this.createDishes('all', '')

        //container.innerHTML += html;
        this.div.appendChild(this.divimg);
        container.appendChild(this.div);

    }

    updateSearch(type, filter) {

        //clear the view
        while (this.divimg.firstChild) {
            this.divimg.removeChild(this.divimg.firstChild);
        }
        this.createDishes(type,filter);
    }

    createDishes(type, filter){
        while (this.divimg.firstChild) {
            this.divimg.removeChild(this.divimg.firstChild);
        }

        this.button_list = [];
        
        // Börja med att begära API kall från modellen
        console.log("before promise");
        this.model.getAllDishes(type, filter)
            // registrera vad view ska göra när API kallet går igenom
            .then(result => { //unpacking
                this.showList = result.results; //skickar med hela result istället för bara bit av det
                this.showList.forEach((element) => {
                    this.btn_image = document.createElement("button");
                    this.btn_image.className = "btn_image";
                    this.btn_image.id = "image";
                    this.img = document.createElement("img");
                    this.img.className = "small_img";
                    this.img.src = result.baseUri + element.image; //skickar baseUri innan bildnamnet
                    this.img.width = "114";
                    this.img.height = "114";
                    this.dish_name_menu = document.createElement("p");
                    this.dish_name_menu.className = "dish_name_menu";
                    this.dish_name_menu.innerHTML = element.title;
                    this.btn_image.appendChild(this.img);
                    this.btn_image.appendChild(this.dish_name_menu);
                    this.divimg.appendChild(this.btn_image);
                    this.button_list.push([this.btn_image, element]);
                });
            });
        // Medan vi väntar på API kall så kan vi skriva ut en placeholder.
        console.log("promise recieved");
        
        console.log(loadingPlaceholder);
        console.log("placeholder set");

        console.log(this.showList)
    }
}