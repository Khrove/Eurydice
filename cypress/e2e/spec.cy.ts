import { GradeViewOperation } from "../operations/grade.view.operation";
import { ModuleViewOperation } from "../operations/module.view.operation";

const gradeViewOperation = new GradeViewOperation();
const moduleViewOperation = new ModuleViewOperation();

describe('Assigns an assessment', () => {
  it('passes', () => {
    cy.login('1', 'TEACHER1_REG1');
    gradeViewOperation.openModule("Multiplication and Area");
    moduleViewOperation.selectAssessment('Module 4 Assessment version 1');
  });
})