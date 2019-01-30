class MenuController {
    constructor(generalController, view) {
        this.generalController = generalController;
        //this.view = new MenuView(container, model);
        view.button.addEventListener("click", () => this.generalController.showDishview());
        view.button_list.forEach((dish) => {
            dish.addEventListener("click", () => this.generalController.showDishview());
        });

    }
}