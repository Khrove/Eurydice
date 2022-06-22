export class ModuleView {
    get moduleCard() { return cy.get('div[class*="ModuleCardstyled__TextDescription"] span'); }
}