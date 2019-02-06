class MenuController {
    constructor(generalController, view) {
        this.generalController = generalController;
        this.view = view;
        //this.view = new MenuView(container, model);
        //få search att funka med enter också, samt få All att funka
        view.button.addEventListener("click", () => {view.updateSearch(view.select.value, view.input.value)
            /*console.log(view.button_list);
            console.log(view.button_list[1])
            view.button_list.forEach((dish) => {
                console.log("Knappen funkar1")
                dish[0].addEventListener("click", () => this.generalController.showDishview(dish[1]))});  
            */});
        
        /*view.button_list.forEach((dish) => {
            console.log("Knappen funkar2")
            dish[0].addEventListener("click", () => this.generalController.showDishview(dish[1]));
        });*/

    }

}