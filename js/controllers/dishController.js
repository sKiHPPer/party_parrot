class DishController{
    constructor(generalController, view, model){
        this.generalController = generalController;
        view.add_to_menu.addEventListener("click", () => {
            model.addDishToMenu(view.dish);
            this.generalController.showMenuview();
        });
        view.back_btn.addEventListener("click", () => {
            generalController.showMenuview()});

        view.back_btn2.addEventListener("click", () => {
            generalController.showMenuview()});
    }
}