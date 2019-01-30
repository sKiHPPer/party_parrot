class SidebarController {

    constructor(generalController, view, model) {
        this.generalController = generalController;
        view.confirm_btn.addEventListener("click", () => this.generalController.showConfirmdinnerview());
        view.menu_list.forEach((dish) => {
            console.log(dish);
            dish[0].addEventListener("click", () => {
                this.generalController.showDishview(dish[1])});
        
        
        });

        view.inp_guests.addEventListener("click", () => model.setNumberOfGuests(view.input));
        console.log(view.input);
        console.log(model.getNumberOfGuests());
                
    }
}