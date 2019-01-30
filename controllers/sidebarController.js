class SidebarController {

    constructor(generalController, view, model) {
        this.generalController = generalController;
        view.confirm_btn.addEventListener("click", () => this.generalController.showConfirmdinnerview());
        view.menu_list.forEach((dish) => {
            console.log(dish);
            dish.addEventListener("click", () => {
                this.generalController.showDishview()});
        });
    }
}