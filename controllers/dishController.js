class DishController{
    constructor(generalController, view, model){
        this.generalController = generalController;
        view.add_to_menu.addEventListener("click", () => {
            console.log("Id:t på vår dish")
            console.log(view.dish.id);
            model.addDishToMenu(view.dish.id);
            this.generalController.showMenuview()
        
        });
    }

}