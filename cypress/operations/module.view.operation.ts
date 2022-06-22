import { ModuleView } from "../pages/explore/module.view";

export class ModuleViewOperation {
    private moduleView: ModuleView;

    constructor() {
        this.moduleView = new ModuleView();
    }

    public openModule(title: string | number) {
        if (typeof title === 'number') {
            this.moduleView.moduleCard.eq(title).click();
        } else {
            this.moduleView.moduleCard.contains(title).click();
        }
    }
}