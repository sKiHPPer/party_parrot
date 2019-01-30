class MenuController {
    constructor(container, generalController, model) {
        this.generalController = generalController;
        this.view = new MenuView(container, model);
        this.view.button.addEventListener("click", () => this.generalController.showDishview());
    }
}