import { ModuleViewOperation } from "../operations/module.view.operation";

const moduleViewOperation = new ModuleViewOperation()

describe('empty spec', () => {
  it('passes', () => {
    cy.login('1', 'TEACHER1_REG1');
    moduleViewOperation.openModule(0);
  });
})