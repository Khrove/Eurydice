import { ModuleView } from "../pages/explore/module.view";

export class ModuleViewOperation {
    private moduleView: ModuleView;

    constructor() {
        this.moduleView = new ModuleView();
    }

    public async selectAssessment(assessment: string | number) {
        this.moduleView.assessmentsDropdown.click();
        this.moduleView.assessmentsDropdownItem.click(assessment);
    }
}