import { GradeViewOperation } from "../operations/explore/grade.view.operation";
import { ModuleViewOperation } from "../operations/explore/module.view.operation";
import {LibraryOperation} from "../operations/assess/library.operation";

const gradeViewOperation = new GradeViewOperation();
const moduleViewOperation = new ModuleViewOperation();
const libraryOperation = new LibraryOperation();

describe('Assigns an assessment', () => {
  it('Navigates through explore and validates list of standards', () => {
    cy.fixture('standards.data').as('standards');
    cy.login('1', 'TEACHER1_REG1');
    gradeViewOperation.changeLevel('Level 3');
    gradeViewOperation.openModule("Multiplication and Area");
    moduleViewOperation.selectAssessment('Module 4 Assessment version 1');
    cy.get('@standards').then((standards: any) => {
      libraryOperation.validateItemStandards(standards.standardList);
    });
  });
})