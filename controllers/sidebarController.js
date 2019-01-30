class SidebarController {

    constructor(generalController, view) {
        this.generalController = generalController;
        view.confirm_btn.addEventListener("click", () => this.generalController.showConfirmdinnerview());
    }
}