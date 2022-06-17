export {};

declare global {
    namespace Cypress {
        interface Chainable {
            login(userId: string, searchVal: string): Chainable<Element>
        }
    }
}