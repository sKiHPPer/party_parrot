class SidebarController {

    constructor(generalController, view, model) {
        this.generalController = generalController;
        view.confirm_btn.addEventListener("click", () => this.generalController.showConfirmdinnerview());
        view.menu_list.forEach((dish) => {
            dish[0].addEventListener("click", () => {
                this.generalController.showDishview(dish[1])});
        
        
        });

        view.inp_guests.addEventListener("click", () => {
            //console.log("FUNKAR");
            //console.log(document.getElementById("number_guests").value);
            model.setNumberOfGuests(document.getElementById("number_guests").value)});
    }
}