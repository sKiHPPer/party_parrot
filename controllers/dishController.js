class DishController{
    constructor(generalController, view, model){
        this.generalController = generalController;
        view.add_to_menu.addEventListener("click", () => model.addDishToMenu(view.dish.id));
    }

}