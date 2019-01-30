class SidebarController {

    constructor(generalController, view, model) {
        this.generalController = generalController;
        view.confirm_btn.addEventListener("click", () => this.generalController.showConfirmdinnerview());
        view.menu_list.forEach((dish) => {
            console.log(dish[0]);
            dish[0].addEventListener("click", () => {
                this.generalController.showDishview(dish[1])});
        
        
        });

        view.input.addEventListener("click", () => this.generalController.showConfirmdinnerview());
                
    }
}