class SidebarController {

    constructor(generalController, view) {
        this.generalController = generalController;
        view.confirm_btn.addEventListener("click", () => this.generalController.showConfirmdinnerview());
        view.menu_list.forEach((dish) => {
            dish.addEventListener("click", () => this.generalController.showDishview());
        });
    }
}