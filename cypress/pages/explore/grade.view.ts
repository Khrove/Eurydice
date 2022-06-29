export class GradeView {
    get moduleCard() { return cy.get('div[class*="ModuleCardstyled__TextDescription"] span'); }
}