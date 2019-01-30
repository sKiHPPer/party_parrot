class SidebarController {

    constructor(container, generalController, model) {
        this.generalController = generalController;
        this.view = new Sidebar(container, model);
        this.view.confirm_btn.addEventListener("click", () => this.generalController.showConfirmdinnerview());
    }
}