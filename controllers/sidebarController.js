class SidebarController {
    constructor(container, generallController, model) {
        this.generallController = generalController;
        this.view = new Sidebar(container, model);
        this.view.button.addEventListener("click", () => this.generallController.showConfirmdinnerview());
    }
}