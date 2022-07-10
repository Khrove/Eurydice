import { ClickablePri } from "../../primary/clickable.pri";

export class ModuleView {
    get assessmentsDropdown() {
        return new ClickablePri('div[class*="DetailsContainer"] div[class*="AssessmentsAndQuizstyled"]');
    }

    get assessmentsDropdownItem() {
        return new ClickablePri('[data-testid="dropdown-option-text"]');
    }
}