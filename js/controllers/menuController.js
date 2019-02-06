class MenuController {
    constructor(generalController, view) {
        this.generalController = generalController;
        this.view = view;
        //få search att funka med enter också
        view.button.addEventListener("click", () => {view.updateSearch(view.select.value, view.input.value)
            });
    }

}