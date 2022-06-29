import { ClickablePri } from "../../primary/clickable.pri";

export class ModuleView {
    get assessmentsDropdown() {
        return new ClickablePri(cy.get('div[class*="DetailsContainer"] div[class*="AssessmentsAndQuizstyled"]'));
    }

    get assessmentsDropdownItem() {
        return new ClickablePri(cy.get('[data-testid="dropdown-option-text"]'));
    }
}